# NaTableConfigItem

表格列数据项的配置信息。

## 参数

> label: string

表格列数据项的标题。用于表格列项表头的文案展示。

> name: string

表格列数据项的字段名。表格数据中的字段名相同。

> pipe?: (value: any) => string

你可能需要对表格列项进行数据的格式化显示，比如你可以通过设置`timeFormmater(time: number) : string { return new Date(time).toLocaleDateString(); }`来显示本地化时间