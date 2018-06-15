import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NaDetailEditorConfigItem, NaDetailEditorConfig } from './na-detail-editor.config';

@Component({
	selector: 'na-detail-editor',
	templateUrl: './na-detail-editor.component.html',
	styleUrls: ['./na-detail-editor.component.css']
})
export class NaDetailEditorComponent implements OnInit {

	editStatusMap: any;


	private _config: NaDetailEditorConfig;

	public configSelfValidatorError: any;

	@Input() set config(config: NaDetailEditorConfig) {
		this._config = config;
		this.form = new FormGroup(this.getFormControlGroups());
		this.form.valueChanges.subscribe(value => this.formValueChange(value));
		for (const ctrl in this.form.controls) {
			this[ctrl] = this.form.controls[ctrl];
		}
		this.editStatusMap = {};
		for (let configItem of this._config.configItems) {
			if (configItem.editable) {
				this.editStatusMap[configItem.name] = false;
			}
		}

	}

	get config(): NaDetailEditorConfig {
		return this._config;
	}

	private _data: any;

	public _dataCopy: any;

	@Input() set data(data: any) {
		this._data = data;
		this._dataCopy = JSON.parse(JSON.stringify(data));
		if (this.form) {
			for (const key in data) {
				this.form.controls[key].setValue(data[key]);
			}
		}
	}

	@Output() onSubmit = new EventEmitter<any>();

	form: FormGroup;

	constructor() {
		this._data = {};
		this.configSelfValidatorError = {};
		this.form = undefined;
		this.editStatusMap = {};
	}

	ngOnInit() { }

	getFormControlGroups() {
		let groups = {};
		for (const configItem of this.config.configItems) {
			switch (configItem.type) {
				case "text":
				case "number":
				case "tel":
				case "email":
				case "textarea":
				case "date":
				case "select":
				case "radio":
					groups[configItem.name] = new FormControl(
						this._data[configItem.name] ? this._data[configItem.name] : "",
						configItem.validators
					)
					break;
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
		this.configSelfValidatorError = {
			valid: true
		};
		for (const configItem of this._config.configItems) {
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
			if (configItem.type === 'img' && configItem.fileMinCount > this.form.controls[configItem.name].value.length) {
				this.configSelfValidatorError[configItem.name].countError = {
					error: true,
					errorText: configItem.fileCountErrorText
				};
				this.configSelfValidatorError.valid = false;
			}
		}
	}

	onEditClicked(configItem: NaDetailEditorConfigItem) {
		if (!configItem.editable) return;
		this.editStatusMap[configItem.name] = true;
		if (configItem.type === "date") {
			this.onDateWantToBeEdited(configItem);
		}
	}

	onDateSelect(name: string, date: number) {
		this.form.controls[name].setValue(date);
	}

	onDateWantToBeEdited(configItem: NaDetailEditorConfigItem) {
		if (!/Android|iPhone/i.test(window.navigator.userAgent)) {
			setTimeout(() => {
				new window["bulmaCalendar"](document.querySelector('#' + configItem.name), {
					overlay: false,
					lang: configItem.dateLang ? configItem.dateLang : "zh-cn",
					onSelect: date => this.onDateSelect(configItem.name, new Date(date).getTime())
				})
			}, 50);
		}
	}

	call(configItem: NaDetailEditorConfigItem, ...args: Array<any>) {
		if (!configItem.action) return;
		configItem.action.call(
			this.config.context, args,
			(fileUrls: Array<{
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

	onFileDetective(event: any, configItem: NaDetailEditorConfigItem) {
		if(!configItem.editable) return;
		this.call(configItem, event.srcElement["files"]);
	}

	removeFile(configItem: NaDetailEditorConfigItem, index: number) {
		if(!configItem.editable) return;
		this.form.controls[configItem.name].value.splice(index, 1);
		this.form.updateValueAndValidity();
	}

	submit(key: string, value: any) {
		if (this.onSubmit) {
			this.onSubmit.emit({ key: value });
			this._data[key] = value;
			this._dataCopy[key] = value;
			this.form.controls[key].setValue(value);
			this.editStatusMap[key] = false;
		}
	}

	cancel(key: string) {
		this.editStatusMap[key] = false;
		this.form.controls[key].setValue(this._data[key]);
	}

	getKeys(obj: any): Array<string> {
		if (!obj) return [];
		return Object.keys(obj);
	}

	getLocalDateTime(time: number): string {
		return new Date(time).toLocaleString();
	}

	getOptionName(configItem: NaDetailEditorConfigItem, value: any): string {
		for(let options of configItem.options) {
			if(options.value === value) {
				return options.name;
			}
		}
		return configItem.defaultText ? configItem.defaultText : "未设置";
	}

}
