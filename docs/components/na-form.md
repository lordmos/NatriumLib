# NaForm

数据和配置驱动的表单。通过配置文件，你就可以配置所需要的表单项类型、样式、分组，并且轻松获得Angular原生表单验证的支持，而且充分减少你的HTML和CSS代码量，让你专注于数据和逻辑本身。

## 使用方法

在HTML文件中使用一行代码引入即可

    <na-form [config]="config" [data]="data" (onFormValueChange)="onFormValueChange($event)" (onSubmit)="save($event)" (onCancel)="cancel()"></na-form>

## 参数

> @Input() config: [NaFormConfig](../configs/na-form-config.md)

NaForm的配置参数，其中包括表单的标题、各个字段的类型设置、风格化设置以及表单验证方式。具体信息请参照NaFormConfig文档。

> @Input() data?: any

NaForm的初始化数据。如果无需初始化则不需要提供。

> @Output() onSubmit: (formValue: any) => void

NaForm在点击提交按钮时获取表单数据。

> @Output() onFormValueChange?: (formValue: any) => void

NaForm在表单数据发生变化时的监听。如果不需要监听则不需要提供。

> @Output() onCancel?: () => void

NaForm为你提供了一个取消按钮的选项，这个方法用于监听取消按钮的事件。

