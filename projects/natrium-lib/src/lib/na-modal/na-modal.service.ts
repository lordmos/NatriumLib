import { Injectable, ComponentFactoryResolver, Injector, ApplicationRef, Type, ViewRef, ComponentRef } from '@angular/core';
import { NaModal } from './na-modal';
import { NaModalComponent } from './na-modal.component';

@Injectable()
export class NaModalService {

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private injector: Injector,
		private appRef: ApplicationRef) {
	}

	public open(modal: Type<NaModal>, data?: any): Promise<any> {
		return new Promise((resolve, reject) => {
			let modalHost = this.componentFactoryResolver
				.resolveComponentFactory(NaModalComponent)
				.create(this.injector);
			modalHost.instance.onAfterViewInit.subscribe(()=> {
				let modalContainerRef = modalHost.instance.viewContainerRef;
				modalContainerRef.clear();
				let modalComponent = modalContainerRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(modal));
				modalComponent.instance.data = data;
				modalComponent.instance.onConfirm.subscribe((value?: any) => {
					resolve(value);
					this.dismiss(modalHost);
				});
				modalComponent.instance.onCancel.subscribe(() => {
					reject();
					this.dismiss(modalHost);
				});
			})
			modalHost.instance.onModalContainerDismiss.subscribe(() => {
				reject();
				this.dismiss(modalHost);
			})
			this.appRef.components[0].location.nativeElement.append(modalHost.location.nativeElement);
			this.appRef.attachView(modalHost.hostView);
		});
	}

	private dismiss(modalHost: ComponentRef<NaModalComponent>) {
		this.appRef.detachView(modalHost.hostView);
		modalHost.destroy();
	}
}
