import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { NaFormConfig, NaTableConfig, NaDetailEditorConfig } from 'projects/natrium-lib/src/public_api';
import { NaFormConfigItem } from 'natrium-lib/public_api';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	// config: NaTableConfig;
	// data: any;

	// constructor() {
	// 	this.data = [{
	// 		nickname: "lennon",
	// 		age: 30,
	// 		time: new Date().getTime()
	// 	}, {
	// 		nickname: "mos",
	// 		age: 28,
	// 		time: new Date().getTime()
	// 	}, {
	// 		nickname: "james",
	// 		age: 38,
	// 		time: new Date().getTime()
	// 	}];
	// 	this.config = new NaTableConfig(this)
	// 		.setTitle("用户列表")
	// 		.needMultiSelect(true)
	// 		.needShowIndex(true)
	// 		.setConfig([{
	// 			name: "nickname",
	// 			label: "昵称"
	// 		}, {
	// 			name: "age",
	// 			label: "年龄"
	// 		}, {
	// 			name: "time",
	// 			label: "时间"
	// 		}])
	// 		.setSingleSelectActions([{
	// 			callback: this.edit,
	// 			btnText: "编辑"
	// 		}, {
	// 			callback: this.detail,
	// 			btnText: "详情"
	// 		}])
	// 		.setNormalActions([{
	// 			callback: this.add,
	// 			btnText: "添加用户",
	// 			btnIcon: "ion-ios-add",
	// 			btnStyleCss: "is-small is-info"
	// 		}])
	// 		.setMultiSelectActions([{
	// 			callback: this.delete,
	// 			btnText: "删除"
	// 		}])
	// 		.setPaginationConfig({
	// 			currentPage: 0,
	// 			totalPage: 100,
	// 			maxLength: 9,
	// 			onPageChange: this.onPageChange
	// 		})
	// }

	// edit(index: number): void {
	// 	console.log(index);
	// }

	// detail(index: number): void {
	// 	console.log(index);
	// }

	// add(): void {
	// 	console.log("add")
	// }

	// delete(indexs: Array<number>) {
	// 	console.log(indexs);
	// }

	// onPageChange(page: number) {
	// 	console.log(page);
	// }


	/**
	 * NaForm
	 * 
	 * */

	title = 'app';
	config: NaDetailEditorConfig;
	data: any;

	constructor(
		private http: HttpClient
	) {
		this.data = {
			nickname: "lennon",
			sex: "male",
			avatar: {
				fileName: "avatar.png",
				fileUrl: "./avatar.png"
			}
		}
		this.config = new NaDetailEditorConfig(this)
			.setTitle("基本信息")
			.setConfig([{
				label: "头像上传",
				type: "img",
				name: "avatar",
				btnIcon: "ion-ios-cloud-upload",
				btnText: "头像上传",
				btnStyleCss: "is-warning",
				action: this.onFileDetected,
				fileMaxCount: 1,
				fileMinCount: 1,
				editable: true
			}, {
				label: "昵称",
				type: "text",
				name: "nickname",
				validators: [
					Validators.required
				],
				styleCss: "is-rounded",
				editable: true
			}, {
				label: "邮箱",
				name: "email",
				type: "email",
				validators: [
					Validators.required,
					Validators.email
				],
				styleCss: "is-warning"
			}, {
				label: "手机号码",
				name: "tel",
				type: "tel",
				validators: [
					Validators.required,
					Validators.pattern("^1[0-9]{10}$")
				],
				inputIcon: "ion-ios-call",
				styleCss: "is-info"
			}, {
				label: "其他信息",
				name: "",
				type: "divider"
			}, {
				label: "生日",
				name: "birthday",
				type: "date",
				validators: [
					Validators.required
				],
				styleCss: "is-warning",
				lessThan: "today",
				lessErrorText: "生日不可能超过今天",
				editable: true
			}, {
				label: "今天",
				name: "today",
				type: "date",
				styleCss: "is-warning",
				validators: [
					Validators.required
				]
			}, {
				label: "简介",
				name: "intro",
				type: "textarea",
				styleCss: "is-warning",
				placeholder: "一句话介绍你自己",
				editable: true
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
				styleCss: "is-warning",
				selectDefaultText: "选择用户类型",
				inputIcon: "ion-ios-people",
				editable: true
			}, {
				label: "性别",
				name: "sex",
				type: "radio",
				styleCss: "is-warning",
				options: [{
					name: "男",
					value: "male"
				}, {
					name: "女",
					value: "female"
				}],
				validators: [
					Validators.required
				],
				editable: true
			}])
			.setConfirmBtnConfig(
				"保存",
				null,
				"is-link"
			)
			.setCancelBtnConfig(
				"取消"
			);
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
		setFileList: (files: Array<{
			fileName: string,
			fileUrl: string
		}>) => void
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
		this.data[data.key] = data.value;
	}

	cancel() {
		console.log("cancel")
	}

	change(data: any) {
		console.log(data);
	}


}
