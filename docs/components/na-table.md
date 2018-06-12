# NaTable

数据和配置驱动的表格。通过配置文件，你就可以轻松展示表格数据，并且通过（非`Angular`的）`pipe`支持，显示你需要的数据格式，此外`NaTable`支持行复选、全选，方便你对多行数据进行批量操作。NaTbale充分减少你的HTML和CSS代码量，让你专注于数据和逻辑本身。

## 使用方法

在HTML文件中使用一行代码引入即可

    <na-table [config]="config" [data]="data"></na-table>

## 参数

> @Input() config: [NaTableConfig](../configs/na-table-config.md)

`NaTable`的配置参数，其中包括表格的标题、各个字段的设置、风格化设置等。具体信息请参照`NaTableConfig`文档。

> @Input() data: any

`NaTable`的初始化数据。你可以重复设置你需要的数据并且根据配置进行展示。
