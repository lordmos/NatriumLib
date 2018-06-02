import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { NaFormConfig } from 'projects/natrium-lib/src/public_api';

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
			.setTitle("基本信息")
			.setConfig([{
				label: "昵称",
				type: "text",
				name: "nickname",
				validators: [
					Validators.required
				]
			}, {
				label: "姓名",
				type: "text",
				name: "name",
				validators: [
					Validators.required
				]
			}, {
				label: "邮箱",
				name: "email",
				type: "email",
				validators: [
					Validators.required,
					Validators.email
				]
			}, {
				label: "手机号码",
				name: "tel",
				type: "tel",
				validators: [
					Validators.required,
					Validators.pattern("^1[0-9]{10}$")
				],
				inputIcon: "ion-ios-call"
			}, {
				label: "验证码",
				name: "code",
				type: "search",
				searchFrom: "tel",
				validators: [
					Validators.required,
					Validators.pattern("^[0-9]{6}$")
				],
				action: this.search,
				btnText: "手机验证码",
				btnStyleCss: "is-primary"
			}, {
				label: "原密码",
				name: "oldpassword",
				type: "password",
				validators: [
					Validators.required,
					Validators.minLength(6),
					Validators.maxLength(20)
				],
				notEqualTo: "password"
			}, {
				label: "新密码",
				name: "password",
				type: "password",
				validators: [
					Validators.required,
					Validators.minLength(6),
					Validators.maxLength(20)
				]
			}, {
				label: "密码确认",
				name: "passwordConfirm",
				type: "password",
				equalTo: "password",
				validators: [
					Validators.required
				]
			}, {
				label: "生日",
				name: "birthday",
				type: "date",
				validators: [
					Validators.required
				],
				lessThan: "today"
			}, {
				label: "今天",
				name: "today",
				type: "date",
				validators: [
					Validators.required
				]
			}])
			.setConfirmBtnConfig(
				"下一步",
				null,
				"is-link"
			)
			.setCancelBtnConfig(
				true,
				"取消"
			)
	}

	search(value: any, target: any) {
		console.log(value)
		let count = 3;
		let interval = setInterval(() => {
			count--;
			if (count <= 0) {
				target.btnText = "手机验证码";
				console.log(target)
				clearInterval(interval);
			} else {
				target.btnText = count + " s ";
			}
		}, 1000);
	}

	save(data: any) {
		console.log(data);
	}
}
