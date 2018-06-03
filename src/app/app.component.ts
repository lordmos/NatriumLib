import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { NaFormConfig } from 'projects/natrium-lib/src/public_api';
import { NaFormConfigItem } from 'natrium-lib/public_api';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	config: NaFormConfig;

	constructor(
		private http: HttpClient
	) {
		this.config = new NaFormConfig(this)
			.setTitle("基本信息")
			// .setFormColumnStyle("is-half-tablet is-half-desktop is-one-quarter-widescreen")
			.setConfig([{
				label: "头像上传",
				type: "img",
				name: "avatar",
				btnIcon: "ion-ios-cloud-upload",
				btnText: "文件上传",
				btnStyleCss: "is-warning",
				action: this.onFileDetected,
				fileMaxCount: 1
			}, {
				label: "昵称",
				type: "text",
				name: "nickname",
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
				lessThan: "today",
				lessErrorText: "生日不可能超过今天"
			}, {
				label: "今天",
				name: "today",
				type: "date",
				validators: [
					Validators.required
				]
			}, {
				label: "简介",
				name: "intro",
				type: "textarea",
				placeholder: "一句话介绍你自己"
			}, {
				label: "用户类型",
				name: "usertype",
				type: "select",
				options: [{
					name: "程序员",
					value: "dev"
				}, {
					name: "设计师",
					value: "design"
				}],
				validators: [
					Validators.required
				],
				selectDefaultText: "选择用户类型",
				inputIcon: "ion-ios-people"
			}, {
				label: "",
				checkboxText: "是否同意",
				name: "agreement",
				type: "checkbox",
				validators: [
					Validators.requiredTrue
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

	onFileDetected(
		fileListArray: Array<FileList>,
		target: any,
		setFileList: (files: Array<any>) => void
	) {
		for (const filelist of fileListArray) {
			for (let i = 0; i < filelist.length; i++) {
				let formData: FormData = new FormData();
				formData.append('file', filelist[i], filelist[i].name);
				this.http.post('http://fwqsf.joyware.com/zhongwei/fileupload/imgeUploadFormData', formData)
					.toPromise().then(response => {
						setFileList([{
							fileUrl: response["data"],
							fileName: filelist[i].name
						}])
					})
			}
		}
	}

	save(data: any) {
		console.log(data);
	}

	cancel() {
		console.log("cancel")
	}




}
