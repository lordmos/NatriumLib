# NaFormConfig

用于驱动`NaForm`表单的配置数据。

## 使用方法

示例代码：

    import { NaFormConfig } from 'natrium-lib';

    export class YourComponent {
        ...
        config: NaFormConfig;

        constructor() {
            ...
            this.config = new NaFormConfig(this).setTitle("基本信息")
                .setConfig([{
                    label: "头像上传",
                    type: "img",
                    name: "avatar",
                    btnIcon: "ion-ios-cloud-upload",
                    btnText: "头像上传",
                    btnStyleCss: "is-warning",
                    action: this.onFileDetected,
                    fileMaxCount: 2,
                    fileMinCount: 1,
                    styleCss: "is-128x128 is-9by16",
                    columnStyleCss: "is-6"
                }, {
                    label: "文件上传",
                    type: "file",
                    name: "files",
                    btnIcon: "ion-ios-cloud-upload",
                    btnText: "文件上传",
                    btnStyleCss: "is-dark",
                    action: this.onFileDetected,
                    styleCss: "is-warning",
                    fileMinCount: 1,
                    columnStyleCss: "is-6"
                }, {
                    label: "昵称",
                    type: "text",
                    name: "nickname",
                    styleCss: "is-warning",
                    validators: [
                        Validators.required
                    ],
                    columnStyleCss: "is-6",
                }, {
                    label: "邮箱",
                    name: "email",
                    type: "email",
                    validators: [
                        Validators.required,
                        Validators.email
                    ],
                    styleCss: "is-warning",
                    columnStyleCss: "is-6"
                }, {
                    label: "手机号码",
                    name: "tel",
                    type: "tel",
                    validators: [
                        Validators.required,
                        Validators.pattern("^1[0-9]{10}$")
                    ],
                    inputIcon: "ion-ios-call",
                    columnStyleCss: "is-6"
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
                    btnStyleCss: "is-primary",
                    styleCss: "is-warning",
                    columnStyleCss: "is-6"
                }, {
                    label: "密码信息",
                    name: "",
                    type: "divider"
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
                    lessThan: "today",
                    lessErrorText: "生日不可能超过今天"
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
                    columnStyleCss: "is-12"
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
                    inputIcon: "ion-ios-people"
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
                    ]
                }, {
                    label: "",
                    checkboxText: "是否同意",
                    name: "agreement",
                    type: "checkbox",
                    styleCss: "is-warning",
                    columnStyleCss: "is-12",
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
            ...
        }
    }

## 函数

> constructor(context: any): NaFormConfig

由于`NaForm`只是配置数据，需要在构造函数中传入你的作用域用于驱动你作用域中的相关方法，比如回调函数。通常直接传入`Component`的`this`即可。

> context: any

获取你设置的作用域。通常是你的`Component`作用域。

> setTitle(title: string): NaFormConfig

设置表单的标题。返回调用函数的`NaFormConfig`来支持链式调用。

> title: string

返回表单的标题。

> setTitleStyle(styleCss: string): NaFormConfig

设置表单标题的样式。返回调用函数的`NaFormConfig`来支持链式调用。

例如`config.setTitleStyle("title is-4")`将标题设置为四号主标题字体，或者`config.setTitleStyle("subtitle is-1")`将标题设置为一号副标题。具体设置方式请参照[Bulma Title风格化设置文档](https://bulma.io/documentation/elements/title/)。

> titleStyle: string

获取表单标题的样式。

> setConfig(configItemList: Array<[NaFormConfigItem](./na-form-config-item.md)>): NaFormConfig

设置表单项的配置列表。每个表单项都有自己的表单类型，比如`text`\\`date`\\`select`\\`img`等。通过`NaFormConfigItem`可以控制每一个表单项的数据类型和展示方式，具体设置方式请参照[NaFormConfigItem 文档](./na-form-config-item.md)>。返回调用函数的`NaFormConfig`来支持链式调用。

> configItems: Array<NaFormConfigItem>

获取表单项配置列表。

> setConfirmBtnConfig(btnText: string, btnIcon?: string, btnStyleCss?: string): NaFormConfig

设置确认按钮的文案、图标、样式。返回调用函数的`NaFormConfig`来支持链式调用。

> confirmBtnConfig: { btnText: string, btnIcon: string, btnStyleCss: string }

获取确认按钮的文案、图标、样式。

> setCancelBtnConfig(showCancelBtn: boolean, btnText?: string, btnIcon?: string, btnStyleCss?: string): NaFormConfig

设置取消按钮的展示和消失，以及文案、图标、样式。返回调用函数的`NaFormConfig`来支持链式调用。

> cancelBtnConfig: { showCancelBtn: boolean, btnText: string, btnIcon: string, btnStyleCss: string }

获取取消按钮的展示和消失，以及文案、图标、样式。