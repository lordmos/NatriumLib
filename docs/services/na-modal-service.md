# NaModalService

模态窗口。

## 使用方法

首先需要你创建一个你想要展示的组件作为模态窗的内容：

    import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
    import { Modal } from 'natrium-lib';

    @Component({
        selector: 'app-test-dialog',
        templateUrl: './test-dialog.component.html',
        styleUrls: ['./test-dialog.component.scss']
    })
    export class TestDialogComponent extends Modal implements OnInit {

        @Input() data: any;
        @Output() onConfirm = new EventEmitter<any>();
        @Output() onCancel = new EventEmitter<void>();

        constructor() {
            super();
        }

        ngOnInit() {

        }

        confirm() {
            this.onConfirm.emit("data");
        }

        cancel() {
            this.onCancel.emit();
        }
    }

然后在你想要调用模态窗口的地方打开你创建的组件：

    ...
    export class AppComponent {
        constructor(
            public modalService: ModalService
        ) { }

        show() {
            this.modalService.open(TestDialogComponent, { name: 'OK' })
                .then((value) => {
                    console.log(value)
                }, () => {
                    console.log("cancel")
                })
        }
    }


## 函数

> show(modalComponent: Type<Modal>, data?: any): Promise<any>


