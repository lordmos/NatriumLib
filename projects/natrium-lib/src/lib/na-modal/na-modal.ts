import { Input, Output, EventEmitter } from "@angular/core";

export abstract class NaModal {
    @Input() data: any;
    @Output() onConfirm = new EventEmitter<any>();
    @Output() onCancel = new EventEmitter<void>();

    public abstract confirm(): any;
    public abstract cancel(): any;
}