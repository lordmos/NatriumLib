import { Directive, ViewContainerRef } from '@angular/core';
@Directive({ selector: '[na-component-host]' })
export class NaComponentHostDirective { constructor(public viewContainerRef: ViewContainerRef) { } }
