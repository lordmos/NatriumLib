import { Injectable, ComponentFactoryResolver, Injector, ApplicationRef, ComponentRef } from '@angular/core';
import { NaNotificationConfig } from './na-notification.config';
import { NaNotificationComponent } from './na-notification.component';

@Injectable()
export class NaNotificationService {

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private injector: Injector,
		private appRef: ApplicationRef) {
	}


	public show(config: NaNotificationConfig): Promise<any> {
		return new Promise((resolve, reject) => {
			let notification = this.componentFactoryResolver
				.resolveComponentFactory(NaNotificationComponent)
				.create(this.injector);
			let timeout = setTimeout(() => {
				this.dismiss(notification, resolve);
			}, config.duration);
			notification.instance.config = config;
			notification.instance.onDismiss.subscribe(() => {
				clearTimeout(timeout);
				this.dismiss(notification, resolve);
			});
			this.appRef.components[0].location.nativeElement.append(notification.location.nativeElement);
			this.appRef.attachView(notification.hostView);
		});
	}

	private dismiss(notification: ComponentRef<NaNotificationComponent>, onDismiss: (value?: any) => any) {
		this.appRef.detachView(notification.hostView);
		notification.destroy();
		onDismiss();
	}
}
