import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NaFormConfig } from './na-form.config';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'na-form',
	templateUrl: './na-form.component.html',
	styleUrls: ['./na-form.component.css']
})
export class NaFormComponent implements OnInit {

	private _config: NaFormConfig;

	@Input() set config(config: NaFormConfig) {
		this._config = config;
		this.form = new FormGroup(this.getFormControlGroups());
		this.form.valueChanges.subscribe(value => this.onFormValueChange(value));
		for (let ctrl in this.form.controls) {
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
			for (let key in data) {
				this.form.controls[key].setValue(data[key]);
			}
		}
	}

	@Output() onSubmit = new EventEmitter<any>();
	form: FormGroup;

	constructor() {
		this._data = {};
		this.form = undefined;
	}

	ngOnInit() { }

	getFormControlGroups() {
		let groups = {};
		for (let configItem of this.config.getConfig()) {
			switch (configItem.type) {
				case "text":
				case "tel":
				case "password":
				case "email":
				case "textarea":
				case "search":
				case "select":
				case "radio":
				case "checkbox":
				case "date":
					groups[configItem.name] = new FormControl(
						this._data[configItem.name] ? this._data[configItem.name] : "",
						configItem.validators
					)

					setTimeout(() => {
						new window["bulmaCalendar"](document.querySelector('#' + configItem.name), {
							overlay: false,
							lang: "zh-cn",
							onSelect: date => this.onDateSelect(configItem.name, new Date(date).getTime())
						})
					}, 50);
					break;
				case "file":
					break;
				case "img":
					break;
			}
		}
		return groups;
	}

	onFormValueChange(value: any) {
		console.log(value);
	}

	onDateSelect(name: string, date: number) {
		this.form.controls[name].setValue(date);
	}

	call(action: Function, ...args: Array<any>) {
		action.call(this.config.getContext(), args);
	}

	submit(data: any) {
		this.onSubmit.emit(data);
	}

}
