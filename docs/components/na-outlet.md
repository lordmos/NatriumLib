# NaOutlet

对`<router-outlet></router-outlet>`的简单封装，可以让你在`your-routing.module.ts`中使用。

## 使用方法

由于在Angular中路由跳转子页面需要一个`<router-outlet></router-outlet>`作为容器，因此对`<router-outlet></router-outlet>`做了一个封装。

提供一段示例代码：

    ...(省略import部分)

    const dashRouter: Routes = [{
        path: '', component: DashboardComponent,
    }, {
        path: 'statistic', component: StatisticComponent,
    }, {
        path: 'log', component: LogComponent,
    }]

    const accountRouter: Routes = [{
        path: '', component: AccountManagerComponent,
    }, {
        path: 'detail/:id', component: AccountDetailComponent,
    }]

    const childRouter: Routes = [{
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
    }, {
        path: 'dashboard', component: OutletComponent, children: dashRouter
    }, {
        path: 'account-manager', component: OutletComponent, children: accountRouter
    }]

    const routes: Routes = [{
        path: '', component: OutletComponent, children: childRouter,
    }, {
    	path: '**', redirectTo: ''
    }];

    @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
    export class RoutingModule { }

在范例代码中我们将这个路由设为根路由，因此我们在浏览器中输入`http://localhost:4200/`就会默认跳转到`http://localhost:4200/dashboard`并展示`DashboardComponent`。
