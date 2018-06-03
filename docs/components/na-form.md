# NaForm

数据和配置驱动的表单。通过配置文件，你就可以配置所需要的表单项类型、样式、分组，并且轻松获得Angular原生表单验证的支持，而且充分减少你的HTML和CSS代码量，让你专注于数据和逻辑本身。

## 使用方法

在HTML文件中使用一行代码引入即可

    <na-form [config]="config" [data]="data" (onFormValueChange)="onFormValueChange($event)" (onSubmit)="save($event)" (onCancel)="cancel()"></na-form>

## 参数