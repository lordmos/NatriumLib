# NaComponentHostDirective

在Angular中，我们需要一个`component-host`来进行动态组件加载，因此Natrium中对宿主进行封装。

## 使用方法

示例代码：

> your-component.html
    
    ...
    <ng-template na-component-host></ng-template>
    ...

> your-component.component.ts

    ...（此处省略import）

    @Component({
        selector: 'your-component',
        templateUrl: './your-component.component.html'
    })
    export class YourComponent implements OnInit {
        @ViewChild(NaComponentHostDirective) viewHost: NaComponentHostDirective;

        constructor(...) {...}

        ngOnInit() {...}

        private selectUserType(userType: number) {
            switch (userType) {
                case 1:
                    this.loadComponent(FirstTypeUserComponent);
                    break;
                case 2:
                    this.loadComponent(SecondTypeUserComponent);
                    break;
                default:
                    this.loadComponent(ThirdTypeUserComponent);
            }
        }

        private loadComponent(component: Type<Dashboard>) {
            let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
            let viewContainerRef = this.viewHost.viewContainerRef;
            viewContainerRef.clear();
            let componentRef = viewContainerRef.createComponent(componentFactory);
            ...
        }
        ...
    }
