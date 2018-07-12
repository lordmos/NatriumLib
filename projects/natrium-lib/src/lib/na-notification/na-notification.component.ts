import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NaNotificationConfig } from './na-notification.config';

@Component({
	selector: 'na-notification',
	templateUrl: './na-notification.component.html',
	styleUrls: ['./na-notification.component.css']
})
export class NaNotificationComponent {

	@Input() config: NaNotificationConfig;
	@Output() onDismiss = new EventEmitter<any>();

	dismiss() {
		this.onDismiss.emit();
	}

}
