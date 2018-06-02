import { Component } from '@angular/core';
import { NaFormConfig } from 'dist/natrium-lib';
import { Validators } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	config: NaFormConfig;
	
	constructor() {
		this.config = new NaFormConfig(this)
			.setTitle("Test")
			.setConfig([{
			// 	label: "姓名",
			// 	name: "name",
			// 	type: "text",
			// 	validators: [
			// 		Validators.required
			// 	]
			// }, {
			// 	label: "邮箱",
			// 	name: "email",
			// 	type: "email",
			// 	validators: [
			// 		Validators.required,
			// 		Validators.email
			// 	]
			// }, {
			// 	label: "手机号码",
			// 	name: "tel",
			// 	type: "tel",
			// 	validators: [
			// 		Validators.required,
			// 		Validators.pattern("^1[0-9]{10}$")
			// 	]
			// }, {
			// 	label: "密码",
			// 	name: "password",
			// 	type: "password",
			// 	validators: [
			// 		Validators.required
			// 	]
			// },{
				label: "生日",
				name: "birthday",
				type: "date",
				validators: [
					Validators.required
				]
			}])
	}

	search(value: any, target: any) {
		console.log(this)
		console.log(value)
	}

	save(data: any) {
		console.log(data);
	}
}
