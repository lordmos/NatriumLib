# Natrium Lib 组件集

`Natrium Lib`是`Natrium Schematics`和`Natrium`项目依赖的组件集。

由于`Natrium`项目需要基于`Angular 6.0.0`版本的项目才能工作，因此通过`npm`安装组件集需要安装`Angular 6.0.0`依赖，但是实际上`Natrium Lib`（单独）在`Angular 2.x`以上的项目中都能正常工作，如果需要，你可以直接下载源码并且安装`Bulma`和`Ionicons`后集成到你的`Angular`项目中。

`Natrium Lib`的依赖只有`Bulma`和`Ionicons`，它们分别为`Natrium Lib`提供基础组件、响应式布局和图标的支持。

## 如何安装Natrium Lib？

`npm install --save natrium-lib`

安装过程中将会自动安装`Bulma`和`Ionicons`，并在`angular.json`中添加两者的`CSS`引用。

卸载时请手动清除`CSS`引用，以免`Angular`项目无法正常编译。

## Natrium基础组件集

`Natrium Lib`使用[Bulma](https://bulma.io/)作为基本组件的样式集。

`Bulma`提供了纯`CSS`样式的基础组件集，包括`button`、`input`、`form`、`table`等等基本组件，仅需引入`CSS`样式而无需`jQuery`支持。

如果你需要在`Natrium`（或者`Natrium Lib`）项目中使用这些组件，请参照`Bulma`官方文档。

## Natrium图标集

`Natrium Lib`使用[Ionicons](https://ionicons.com/)作为基本图标的样式集。

`Bulma`兼容`Font Awesome 5`、`Font Awesome 4`、`Material Design Icons`、`Open Iconic`、`Ionicons`等图标集。在`Natrium Lib`内部我们默认集成了`Ionicons`图标集，你也可以安装以上图标集中的任何图标集进行使用。

图标的使用方法请参照`Bulma`官方文档和相应的图标集使用文档。

## Natrium复合组件集

复合组件是对`Bulma`的基本组件的`Angular`组合封装。`Natrium Lib`的组件设计哲学就是**“Data always first”**，我们希望用户只关心数据本身，而不需要在`HTML`模版上进行修改。

包含以下组件，其中包括：

- `NaTable` : 通过加载配置项数据和列表数据，可以对表格数据进行展示和操作。
- `NaForm` : 通过加载配置项数据和表单数据，可以对表单数据进行展示和操作，而且还能轻松获得表单验证的支持。

## Natrium封装组件集

封装组件是对常用组件的一层封装，让大家可以直接使用组件而避免非数据驱动或者无法直接使用的副作用。

- `NaPagination` : 分页导航器。初始化时设置当前页、总页数和页面导航器所要展示的页面数量，就可以轻松获取和操作页面导航数据。由于`Bulma`的`Pagination`并不基于数据驱动`AJAX`请求而是页面跳转——当然也可以通过`Angular`点击事件驱动，但是用户需要在`HTML`上进行处理，为了减少用户的代码量——因此我不推荐直接使用`Bulma`的`Pagination`组件而是选择重新封装。
- `NaComponentHost` : 在`Angular`中加载动态组件时候需要一个`Host`。直接使用`NaComponentHost`吧。
- `NaOutlet` : 在`route module`中经常需要使用`router-outlet`。直接使用`NaOutlet`吧。

## Natrium组件风格化

由于我们的所有组件都基于`Bulma`，因此也支持Bulma的组件风格化。使用方法请参考`Bulma`官方文档。

> 所以界面之类的东西我什么都丢给了`Bulma`...逃