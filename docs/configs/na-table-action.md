# NaTableAction

表格操作的配置信息。

## 参数

> btnText: string

表格操作按钮的文案展示。

> btnIcon?: string

表格操作按钮的图标展示。
    
> btnStyleCss?: string

表格操作按钮的风格化展示。

> callback: (index?: Array<number> | number) => void

表格操作的行数回调。单行操作会返回行数，多行操作会返回行数列表，而其他表格数据操作则不会返回行数。