# NaDetailEditor

数据和配置驱动的表单展示和编辑器。通过配置文件，你就可以配置所需要的表单项类型、样式、分组，并且轻松获得`Angular`原生表单验证的支持，而且充分减少你的HTML和CSS代码量，让你专注于数据和逻辑本身。

## 使用方法

在HTML文件中使用一行代码引入即可

    <na-detail-editor [data]="data" [config]="config" (onSubmit)="save($event)"></na-detail-editor>

## 参数

> @Input() config: [NaDetailEditorConfig](../configs/na-detail-editor-config.md)

`NaDetailEditor`的配置参数，其中包括表单的标题、各个字段的类型设置、风格化设置以及表单验证方式。具体信息请参照`NaDetailEditorConfig`文档。

> @Input() data?: any

`NaDetailEditor`的初始化数据。

> @Output() onSubmit: (formValue: any) => void

`NaDetailEditor`在点击提交按钮时获取表单数据。
