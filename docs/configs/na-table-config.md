# NaTableConfig

用于驱动`NaTable`表格的配置数据。

## 使用方法

示例代码：

    import { NaTableConfig } from 'natrium-lib';

    export class YourComponent {
        ...
        config: NaTableConfig;
        data: any;

        constructor() {
            this.data = [{
                nickname: "lennon",
                age: 30,
                time: new Date().getTime()
            }, {
                nickname: "mos",
                age: 28,
                time: new Date().getTime()
            }, {
                nickname: "james",
                age: 38,
                time: new Date().getTime()
            }];
            this.config = new NaTableConfig(this)
                .setTitle("用户列表")
                .needMultiSelect(true)
                .needShowIndex(true)
                .setConfig([{
                    name: "nickname",
                    label: "昵称"
                }, {
                    name: "age",
                    label: "年龄"
                }, {
                    name: "time",
                    label: "时间"
                }])
                .setSingleSelectActions([{
                    callback: this.edit,
                    btnText: "编辑"
                }, {
                    callback: this.detail,
                    btnText: "详情"
                }])
                .setNormalActions([{
                    callback: this.add,
                    btnText: "添加用户",
                    btnIcon: "ion-ios-add",
                    btnStyleCss: "is-small is-info"
                }])
                .setMultiSelectActions([{
                    callback: this.delete,
                    btnText: "删除"
                }])
                .setPaginationConfig({
                    currentPage: 0,
                    totalPage: 100,
                    maxLength: 9,
                    onPageChange: this.onPageChange
                })
        }

        edit(index: number): void {
            console.log(index);
        }

        detail(index: number): void {
            console.log(index);
        }

        add(): void {
            console.log("add")
        }

        delete(indexs: Array<number>) {
            console.log(indexs);
        }

        onPageChange(page: number) {
            console.log(page);
        }
        ...
    }

## 函数

> constructor(context: any): NaTableConfig

由于`NaTable`只是配置数据，需要在构造函数中传入你的作用域用于驱动你作用域中的相关方法，比如回调函数。通常直接传入`Component`的`this`即可。

> context: any

获取你设置的作用域。通常是你的`Component`作用域。

> setTitle(title: string): NaTableConfig

设置表格的标题。返回调用函数的`NaTableConfig`来支持链式调用。

> title: string

返回表格的标题。

> setTitleStyle(styleCss: string): NaTableConfig

设置表格标题的样式。返回调用函数的`NaTableConfig`来支持链式调用。

例如`config.setTitleStyle("title is-4")`将标题设置为四号主标题字体，或者`config.setTitleStyle("subtitle is-1")`将标题设置为一号副标题。具体设置方式请参照[Bulma Title风格化设置文档](https://bulma.io/documentation/elements/title/)。

> titleStyle: string

获取表格标题的样式。

> setConfig(configItemList: Array<[NaTableConfigItem](./na-table-config-item.md)>): NaTableConfig

设置表格列项的配置列表。每一列表格项都有自己的表格配置，包括字段的读取，`pipe`的支持等，详情见`NaTableConfigItem`的使用文档。返回调用函数的`NaTableConfig`来支持链式调用。

> configItems: Array<NaFormConfigItem>

获取表格列项配置列表。

> setPaginationConfig(paginationConfig: [NaTablePaginationConfig](./na-table-pagination-config.md)): NaTableConfig

表格分页器配置项。通常表格需要分页进行展示数据，只需要你指定初始页码、页码显示长度和页码数量，并且提供页码变化的回调，就可以轻松操作表格数据。使用方式见上方示例代码和文档。返回调用函数的`NaTableConfig`来支持链式调用。

> paginationConfig: NaTablePaginationConfig

获取表格分页器的配置项。

> needShowIndex(needShowIndex: boolean): NaTableConfig

行数展示。你可以根据你的需要来设置是否需要行数展示。默认为`false`。返回调用函数的`NaTableConfig`来支持链式调用。

> isNeedShowIndex(): boolean

获取当前行数展示的设置。

> needMultiSelect(needMultiSelect: boolean): NaTableConfig 

行复选配置。你可以根据你的需要来设置是否需要行复选。默认为`false`。返回调用函数的`NaTableConfig`来支持链式调用。

> isNeedMultiSelect(): boolean

获取当前行复选的设置。

> setMultiSelectActions(actions: Array<[NaTableAction](./na-table-action.md)>): NaTableConfig

行复选操作。你可能需要操作被选择的行数据，通过设置提供复选操作回调函数，并且设置按钮展示文案和风格化信息就可以轻松获取行复选的数据操作功能。使用方式见上方示例代码和文档。返回调用函数的`NaTableConfig`来支持链式调用。

> multiSelectActions: Array<NaTableAction>

获取行复选操作配置项。

> setSingleSelectActions(actions: Array<NaTableAction>): NaTableConfig

单行数据操作。你可能会希望以不同的方式操作一行数据，通过设置提供复选操作回调函数，并且设置按钮展示文案和风格化信息就可以轻松获取行数据操作功能。使用方式见上方示例代码和文档。返回调用函数的`NaTableConfig`来支持链式调用。

> singleSelectActions(): Array<NaTableAction>

获取行操作配置项。

> setNormalActions(actions: Array<NaTableAction>): NaTableConfig

其他表格数据操作。你可能会希望新增表格数据或者做一些和表格数据并没有强关联的操作，通过设置提供复选操作回调函数，并且设置按钮展示文案和风格化信息就可以轻松获取其他表格数据操作。使用方式见上方示例代码和文档。返回调用函数的`NaTableConfig`来支持链式调用。

> normalActions(): Array<NaTableAction>

获取其他表格数据操作配置项。

