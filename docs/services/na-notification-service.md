# NaNotificationService

简单的单行提示。

## 使用方法

示例代码：

    ...
    export class YourComponent {
        constructor(
            public notification: NaNotificationService
        ) {}

        showNotification() {
            this.notification.show({
                message: "delete : " + indexs,
                styleCss: "is-danger"
                duration: 3000
            }).then(()=> {
                console.log("notification dismiss")
            });
        }
    }

## 函数

> show(config: [NaNotificationConfig](../configs/na-notification-config.md)): Promise<any>

将需要展示的内容、提示的风格以及展示时间作为配置传入。在提示消失时通过`Promise`进行回调。

