# NaFormConfigItem

单个表单数据项的配置信息。

## 参数

> label: string

表单项的标题。如果`type`为`divider`则作为分割线中间的展示文案。

> name: string

表单项的字段名。如果`type`为`divider`则设置无效。

> type: "text" | "number" | "tel" | "password" | "email" | "textarea" | "select" | "radio" | "checkbox" | "date" | "file" | "img" | "search" | "divider"

表单项的类型。

> placeholder?: string

input[placeholder]。仅在`type`为`text`\\`number`\\`tel`\\`password`\\`email`\\`textarea`时生效。

> equalTo?: string

表单验证：此字段(`name`)的值是否和目标字段(`equalTo`)的值相等。仅在`type`为`text`\\`number`\\`tel`\\`password`\\`email`\\`textarea`\\`date`时生效。

> equalErrorText?: string

表单验证：字段(`name`)的值和目标字段(`equalTo`)的值字段不相等时的错误文案。仅在`type`为`text`\\`number`\\`tel`\\`password`\\`email`\\`textarea`\\`date`时生效。

> notEqualTo?: string

表单验证：此字段(`name`)的值是否和目标字段(`equalTo`)的值不相等。仅在`type`为`text`\\`number`\\`tel`\\`password`\\`email`\\`textarea`时生效。

> notEqualErrorText?: string

表单验证：字段(`name`)的值和目标字段(`equalTo`)的值字段相等时的错误文案。仅在`type`为`text`\\`number`\\`tel`\\`password`\\`email`\\`textarea`\\`date`时生效。

> largeThan?: string

表单验证：此字段(`name`)的值是否大于目标字段(`equalTo`)的值。仅在`type`为`number`\\`date`时生效。

> largeErrorText?: string

表单验证：此字段(`name`)的值不大于目标字段(`equalTo`)的值时的错误文案。仅在`type`为`number`\\`date`时生效。

> lessThan?: string

表单验证：此字段(`name`)的值是否小于目标字段(`equalTo`)的值。仅在`type`为`number`\\`date`时生效。

> lessErrorText?: string

表单验证：此字段(`name`)的值不小于目标字段(`equalTo`)的值时的错误文案。仅在`type`为`number`\\`date`时生效。

> validators?: Array<ValidatorFn>

表单验证：使用`Angular`提供的表单验证方式进行验证。比如`Validators.required`\\`Validators.pattern(pattern: string)`，同样也支持`Angular Custom Validators`。使用方式参考[Angular Custom Validators Guide](https://angular.io/guide/form-validation#custom-validators)和[相关API文档](https://angular.io/api/forms/Validators)

> invalidErrorText?: any

表单验证：`Angular`提供的表单验证方式验证错误时的信息提示。比如`{ 'required': '需要填写此字段', 'maxLength': '长度超出限制' }`，同样也支持`Angular Custom Validators`错误时的提示。

> inputIcon?: string

输入框的图标展示。仅在`type`为`text`\\`number`\\`tel`\\`password`\\`email`时生效。

> options?: Array<{ name: string, value: any }>

复选框的数据配置。`name`为展示的信息，`value`为选择该`option`时的值。比如`options: [{ name: "男", value: "male" }, { name: "女", value: "female" }]`。仅在`type`为`select`\\`radio`时生效。

> selectDefaultText?: string,

未选择`select options`的默认文案。仅在`type`为`select`时生效。

> checkboxText?: string

`checkbox`的显示文案。仅在`type`为`checkbox`时生效。

> dateLang?: "ar" | "bn" | "de" | "en" | "es" | "fa" | "fr" | "hi" | "hr" | "hu" | "id" | "it" | "ja" | "nl" | "pt" | "pt-BR" | "ru" | "sr" | "th" | "tr" | "zh-cn"

时间展示的语言。默认为`zh-cn`。仅在`type`为`date`时生效。

> styleCss?: string

用于表单项的风格化展示。

> btnText?: string

按钮文案的展示。仅在`type`为`file`\\`img`\\`search`时生效。

> btnIcon?: string

按钮图标的展示。仅在`type`为`file`\\`img`\\`search`时生效。

> btnStyleCss?: string

按钮风格化的展示。仅在`type`为`file`\\`img`\\`search`时生效。

> searchFrom?: string

设置为你需要通过哪个目标字段(`searchFrom`)的值来进行搜索，默认为本字段(`name`)的值。仅在`type`为`search`时生效。

> action?: ( value: any, target: { btnText: string, btnIcon: string, btnStyleCss: string }, setFileList?: (files: Array<{ fileName: string, fileUrl: string }>) => void ) => void

按钮操作的回调函数。仅在`type`为`file`\\`img`\\`search`时生效。

1. `type`为`search`: `value`为表单字段为`searchFrom`(若设置)或者`name`(未设置`searchFrom`)的值。`target`为操作按钮的相关配置。`setFileList`为`null`
2. `type`为`img`\\`search`: `value`为浏览器选择的文件列表，类型为`Array<FileList>`。`target`为操作按钮的相关配置。提供`setFileList`的回调，在用户处理文件列表成功之后可以通过这个回调函数将文件相关数据提交给`NaForm`。

> fileMaxCount?: number

验证此字段(`name`)的文件最大数量，文件数量到达最大数量时将会自动隐藏上传按钮。仅在`type`为`file`\\`img`时生效。
    
> fileMinCount?: number

表单验证：验证此字段(`name`)的文件最小数量。仅在`type`为`file`\\`img`时生效。

> fileCountErrorText?: string

表单验证：验证此字段(`name`)的文件小于需要的最小数量所要展示的错误提示信息。仅在`type`为`file`\\`img`时生效。

> columnStyleCss?: string

设置这个列表项的响应式布局方式。详细请见[Bulma 响应式布局文档](https://bulma.io/documentation/columns/)。