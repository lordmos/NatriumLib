# Natrium Lib 组件集

`Natrium Lib`是`Natrium Schematics`和`Natrium`项目依赖的组件集。

由于`Natrium`项目需要基于`Angular 6.0.0`版本的项目才能工作，因此通过`npm`安装组件集需要安装`Angular 6.0.0`依赖，但是实际上`Natrium Lib`有能力单独在`Angular 2.x`以上的所有项目中正常工作，如果需要，你可以直接下载源码，直接拷贝相应的代码，并且在安装`Bulma`、`Bulma-extensions`和`Ionicons`后集成到你的`Angular`项目中。

`Natrium Lib`的依赖只有`Bulma`、`Bulma-extensions`和`Ionicons`，它们分别为`Natrium Lib`提供基础组件、响应式布局和图标的支持。

## 如何安装Natrium Lib？

`npm install --save natrium-lib`

安装过程中将会自动安装`Bulma`、`Bulma-extensions`和`Ionicons`，并在`angular.json`中添加相应的`CSS`引用。安装完成后需要用户手动在`app.module.ts`中引入`NatriumLibModule`:

> app.module.ts

    ...
    import { NatriumLibModule } from 'natrium-lib';

    @NgModule({
        ...
        imports: [
            ...
            NatriumLibModule
        ]
        ...
    })

## 如何卸载Natrium Lib？

`npm uninstall --save natrium-lib`

出于考量，你可能会依然需要在项目中使用`Bulma`、`Bulma-extensions`和`Ionicons`，因此在卸载时请**按需**手动清除`angular.json`文件中的`CSS`引用，以免`Angular`项目无法正常编译。以下是`CSS`引用：

> angular.json


    ...
    "styles": [
        ...
        "node_modules/ionicons/dist/css/ionicons.min.css",
        "node_modules/bulma/css/bulma.min.css",
        "node_modules/bulma-extensions/dist/bulma-extensions.min.css"
        ...
    ],
    ...


另外，由于在`Natrium Lib`中部分`Bulma-extensions`组件需要`JavaScript`依赖，因此请在卸载`Natrium Lib`时也请**按需**删除手动清除`angular.json`文件中的`JavaScript`引用，以免`Angular`项目无法正常编译。以下是`JavaScript`引用：

> angular.json

    ...
    "scripts": [
        ...
        "node_modules/bulma-extensions/bulma-accordion/dist/bulma-accordion.min.js",
        "node_modules/bulma-extensions/bulma-calendar/dist/js/bulma-calendar.min.js",
        "node_modules/bulma-extensions/bulma-carousel/dist/js/bulma-carousel.min.js",
        "node_modules/bulma-extensions/bulma-tagsinput/dist/bulma-tagsinput.min.js"
        ...
    ],
    ...



## Natrium基础组件集

`Natrium Lib`使用[Bulma](https://bulma.io/)以及[Bulma-extensions](https://wikiki.github.io/)，`Bulma`作为基本组件的样式集，`Bulma-extensions`是基础的组件补充。

`Bulma`和**大多**`Bulma-extensions`组件仅需引入`CSS`样式文件而无需任何`JavaScript`代码支持，少部分组件需要你在代码中通过变更`CSS`样式进行激活，这个与Angular的`ngClass`能够很好的配合。例如：

- [Page-loader](https://wikiki.github.io/elements/pageloader/)，来自`Bulma-extensions`：它的引用方式很简单，只需要一行HTML代码`<div class="pageloader"><span class="title">Pageloader</span></div>`，默认的状态是收起状态，需要通过在`Page-loader`的样式中使用`is-active`激活它，如`<div class="pageloader is-active"><span class="title">Pageloader</span></div>`。在Angular中，你可以通过ngClass的方式来激活它。

另外`Bulma-extensions`提供了一部分需要`JavaScript`支持的复合组件，也在安装时自动将`JavaScript`引入到了`angular.json`文件中。自动引入的组件有：

- [Accordion](https://wikiki.github.io/components/accordion/)
- [Calendar](https://wikiki.github.io/components/calendar/)
- [Carousel](https://wikiki.github.io/components/carousel/)
- [TagsInput](https://wikiki.github.io/form/tagsinput/)

同时，你在使用`Bulma-extensions`的某个组件，比如`Tooltip`，使用方式很简单，只需`<button class="button is-primary tooltip" data-tooltip="Tooltip Text">top tooltip</button>`即可，但是如果你需要双向绑定`Tooltip`的内容时，你需要使用`<button class="button is-primary tooltip" [attr.data-tooltip]="tooltipText">top tooltip</button>`来进行绑定。很多组件的数据都是在attribute中。

组件具体的使用方式与样式请参照`Bulma`和`Bulma-extensions`的官方文档。

## Natrium图标集

`Natrium Lib`使用[Ionicons](https://ionicons.com/)作为基本图标的样式集。

`Bulma`兼容`Font Awesome 5`、`Font Awesome 4`、`Material Design Icons`、`Open Iconic`、`Ionicons`等图标集。在`Natrium Lib`内部`Natrium Lib`默认集成了`Ionicons`图标集，你也可以安装以上图标集中的任何图标集进行使用。`Ionicons`图标集的使用方法非常简单，例如：

    <span class="icon has-text-info">
        <i class="ion-ios-albums"></i>
    </span>


图标的使用方法请参照`Bulma`[官方文档-图标部分](https://bulma.io/documentation/elements/icon/)和相应的图标集使用文档。

## Natrium复合型组件集

复合型组件是对`Bulma`的基本组件的`Angular`组合封装。`Natrium Lib`的组件设计哲学就是**“Data always first”**，`Natrium Lib`希望用户只关心数据本身，而不需要在`HTML`模版上进行修改。

包含以下组件，其中包括：

- [NaTable](./docs/components/na-table.md) : 通过加载配置项数据和列表数据，可以对表格数据进行展示和操作。
- [NaForm](./docs/components/na-form.md) : 通过加载配置项数据和表单数据，可以对表单数据进行展示和操作，而且还能轻松获得表单验证的支持。
- [NaDetailEditor](./docs/components/na-detail-editor.md) : 通常用来展示表单详情数据，同时支持字段编辑。通过加载配置项数据和表单数据，可以对表单数据进行展示和操作，而且还能轻松获得表单验证的支持。

## Natrium封装型组件集

封装型组件是对常用组件的一层封装，让大家可以直接使用组件而避免非数据驱动或者无法直接使用的副作用。

- [NaPagination](./docs/components/na-pagination.md) : 分页导航器。初始化时设置当前页、总页数和页面导航器所要展示的页面数量，就可以轻松获取和操作页面导航数据。由于`Bulma`的`Pagination`并不基于数据驱动`AJAX`请求而是页面跳转——当然也可以通过`Angular`点击事件驱动，但是用户需要在`HTML`上进行处理，为了减少用户的代码量——因此`Natrium Lib`不推荐直接使用`Bulma`的`Pagination`组件而是选择重新封装。
- [NaComponentHost](./docs/components/na-component-host.md) : 在`Angular`中加载动态组件时候需要一个`Host`。直接使用`NaComponentHost`吧。
- [NaOutlet](./docs/na-outlet.md) : 在`routing-module`中经常需要在HTML中嵌套`router-outlet`。直接使用`NaOutlet`吧。

## Natrium组件风格化

由于`Natrium Lib`的所有组件都基于`Bulma`和`Bulma-extensions`，因此也理应支持`Bulma`的组件风格化，只是现在暂时无法提供完整的风格化解决方案。使用方法请参考`Bulma`和`Bulma-extensions`官方文档。

## Natrium Lib最佳实践

由于在日常开发过程中业务场景非常多，同时也希望用户能真正理解`Natrium Lib`的工作行为方式，方便用户更好的使用，`Natrium Lib`为大家提供了几种业务场景下的最佳实践文档。

> 所以界面之类的东西`Natrium Lib`基本什么都丢给了`Bulma`...逃