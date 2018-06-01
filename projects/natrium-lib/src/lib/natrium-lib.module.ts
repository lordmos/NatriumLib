import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NaComponentHostDirective } from './na-component-host/na-component-host.directive';
import { NaOutletComponent } from './na-outlet/na-outlet.component';
import { NaPaginationComponent } from './na-pagination/na-pagination.component';
import { NaFormComponent } from './na-form/na-form.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule
	],
	declarations: [
		NaFormComponent,
		NaPaginationComponent,
		NaOutletComponent,
		NaComponentHostDirective
	],
	exports: [
		NaFormComponent,
		NaPaginationComponent,
		NaOutletComponent,
		NaComponentHostDirective
	]
})
export class NatriumLibModule { }
