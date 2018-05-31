# NaPagination

分页器。`NaPagination`的页码数据从`0`开始，到`totalPage - 1`结束，而页码显示则从`1`开始，到`totalPage`结束。

## 如何使用

`<na-pagination [currentPage]="currentPage" [totalPage]="totalPage" [maxLength]="9" (onPageChange)="pageTo($event)"></na-pagination>`

## 参数

> @Input() currentPage: number

当前指向的页码。

> @Input() totalPage: number

页面总数。

> @Input() maxLength: number

`NaPagination`可以展示出来的页面按钮数量。展示逻辑如下：

1. `[maxLength]="9"`，`currentPage`为`0`，`totalPage`足够大，则页码展示`1 2 3 4 5 6 7 8 9`。
2. `[maxLength]="9"`，`currentPage`为`totalPage - 1`，比如`18`，则页码展示`11 12 13 14 15 16 17 18 19`。
3. `[maxLength]="9"`，`currentPage`为`8`，`totalPage`足够大，则页码展示`4 5 6 7 8 9 10 11 12`。
4. `[maxLength]="9"`，`totalPage`小于`9`，比如`5`，则页码展示`1 2 3 4 5`。

> @Output() onPageChange: (index: number) => any

`NaPagination`的页码变化响应事件。页码数据从`0`开始。