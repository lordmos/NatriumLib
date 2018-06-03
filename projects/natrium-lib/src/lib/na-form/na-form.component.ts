import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NaFormConfig, NaFormConfigItem } from './na-form.config';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'na-form',
	templateUrl: './na-form.component.html',
	styleUrls: ['./na-form.component.css']
})
export class NaFormComponent implements OnInit {

	private _config: NaFormConfig;

	public configSelfValidatorError: any;

	@Input() set config(config: NaFormConfig) {
		this._config = config;
		this.form = new FormGroup(this.getFormControlGroups());
		this.form.valueChanges.subscribe(value => this.formValueChange(value));
		for (const ctrl in this.form.controls) {
			this[ctrl] = this.form.controls[ctrl];
		}
	}

	get config(): NaFormConfig {
		return this._config;
	}

	private _data: any;

	@Input() set data(data: any) {
		this._data = data;
		if (this.form) {
			for (const key in data) {
				this.form.controls[key].setValue(data[key]);
			}
		}
	}

	@Output() onSubmit = new EventEmitter<any>();
	@Output() onFormValueChange = new EventEmitter<any>();
	@Output() onCancel = new EventEmitter<any>();

	form: FormGroup;

	constructor() {
		this._data = {};
		this.configSelfValidatorError = {};
		this.form = undefined;
	}

	ngOnInit() { }

	getFormControlGroups() {
		let groups = {};
		for (const configItem of this.config.getConfig()) {
			switch (configItem.type) {
				case "text":
				case "number":
				case "tel":
				case "password":
				case "email":
				case "textarea":
				case "search":
				case "date":
				case "select":
				case "radio":
				case "checkbox":
					groups[configItem.name] = new FormControl(
						this._data[configItem.name] ? this._data[configItem.name] : "",
						configItem.validators
					)
					if (!/Android|iPhone/i.test(window.navigator.userAgent) && configItem.type === 'date') {
						setTimeout(() => {
							new window["bulmaCalendar"](document.querySelector('#' + configItem.name), {
								overlay: true,
								lang: configItem.dateLang ? configItem.dateLang : "zh-cn",
								onSelect: date => this.onDateSelect(configItem.name, new Date(date).getTime())
							})
						}, 50);
					}
					break;
				case "file":
				case "img":
					groups[configItem.name] = new FormControl(
						this._data[configItem.name] ? this._data[configItem.name] : [],
						configItem.validators
					)
					break;
			}
		}
		return groups;
	}

	formValueChange(value: any) {
		if (this.onFormValueChange) this.onFormValueChange.emit(value);
		this.configSelfValidatorError = {
			valid: true
		};
		for (const configItem of this._config.getConfig()) {
			this.configSelfValidatorError[configItem.name] = {};
			if (configItem.equalTo && value[configItem.name] !== value[configItem.equalTo]) {
				this.configSelfValidatorError[configItem.name].equalTo = {
					error: true,
					errorText: configItem.equalErrorText
				}
				this.configSelfValidatorError.valid = false;
			}
			if (configItem.notEqualTo && value[configItem.name] === value[configItem.notEqualTo]) {
				this.configSelfValidatorError[configItem.name].notEqualTo = {
					error: true,
					errorText: configItem.notEqualErrorText
				};
				this.configSelfValidatorError.valid = false;
			}
			if ((configItem.type === "date" || configItem.type === "number") && configItem.largeThan && value[configItem.name] <= value[configItem.largeThan]) {
				this.configSelfValidatorError[configItem.name].largeThan = {
					error: true,
					errorText: configItem.largeErrorText
				};
				this.configSelfValidatorError.valid = false;
			}
			if ((configItem.type === "date" || configItem.type === "number") && configItem.lessThan && value[configItem.name] >= value[configItem.lessThan]) {
				this.configSelfValidatorError[configItem.name].lessThan = {
					error: true,
					errorText: configItem.lessErrorText
				};
				this.configSelfValidatorError.valid = false;
			}
			if ((configItem.type === 'file' || configItem.type === 'img') && configItem.fileMinCount > this.form.controls[configItem.name].value.length) {
				this.configSelfValidatorError[configItem.name].countError = {
					error: true,
					errorText: configItem.fileCountErrorText
				};
				this.configSelfValidatorError.valid = false;
			}
		}
	}

	onDateSelect(name: string, date: number) {
		this.form.controls[name].setValue(date);
	}

	call(configItem: NaFormConfigItem, ...args: Array<any>) {
		if (!configItem.action) return;
		configItem.action.call(
			this.config.getContext(),
			configItem.type === "search" ? (
				configItem.searchFrom ?
					this.form.controls[configItem.searchFrom].value :
					this.form.controls[configItem.name].value
			) : args,
			configItem,
			configItem.type === "search" ? null : (fileUrls: Array<{
				fileUrl: string,
				fileName: string
			}>) => {
				fileUrls.forEach(file => {
					this.form.controls[configItem.name].value.push(file)
				});
				this.form.updateValueAndValidity();
			}
		);
	}

	onFileDetective(event: any, configItem: NaFormConfigItem) {
		this.call(configItem, event.srcElement["files"]);
	}

	removeFile(itemName: string, index: number) {
		this.form.controls[itemName].value.splice(index, 1);
		this.form.updateValueAndValidity();
	}

	submit(data: any) {
		if (this.onSubmit) this.onSubmit.emit(data);
	}

	cancel() {
		if (this.onCancel) this.onCancel.emit();
	}

	getKeys(obj: any): Array<string> {
		if (!obj) return [];
		return Object.keys(obj);
	}

}
