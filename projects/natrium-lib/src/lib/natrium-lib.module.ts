import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NaComponentHostDirective } from './na-component-host/na-component-host.directive';
import { NaOutletComponent } from './na-outlet/na-outlet.component';
import { NaPaginationComponent } from './na-pagination/na-pagination.component';
import { NaFormComponent } from './na-form/na-form.component';

import { NaTableComponent } from './na-table/na-table.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule
	],
	declarations: [
		NaTableComponent,
		NaFormComponent,
		NaPaginationComponent,
		NaOutletComponent,
		NaComponentHostDirective
	],
	exports: [
		NaTableComponent,
		NaFormComponent,
		NaPaginationComponent,
		NaOutletComponent,
		NaComponentHostDirective
	]
})
export class NatriumLibModule { }
