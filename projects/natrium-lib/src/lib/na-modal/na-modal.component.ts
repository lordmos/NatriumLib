import { Component, ViewChild, Output, EventEmitter, ViewContainerRef } from '@angular/core';

@Component({
	selector: 'na-modal',
	templateUrl: './na-modal.component.html',
	styleUrls: ['./na-modal.component.css']
})
export class NaModalComponent {
	@Output() onModalContainerDismiss = new EventEmitter<any>();
	@Output() onAfterViewInit = new EventEmitter<any>();

	@ViewChild("dynamic", {
		read: ViewContainerRef
	}) viewContainerRef: ViewContainerRef

	constructor() { }

	ngAfterViewInit() {
		this.onAfterViewInit.emit();
	}

	dismiss() {
		this.onModalContainerDismiss.emit();
	}
}
