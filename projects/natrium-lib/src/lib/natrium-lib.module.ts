import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NaComponentHostDirective } from './na-component-host/na-component-host.directive';
import { NaOutletComponent } from './na-outlet/na-outlet.component';
import { NaPaginationComponent } from './na-pagination/na-pagination.component';
import { NaTableComponent } from './na-table/na-table.component';
import { NaFormComponent } from './na-form/na-form.component';
import { NaDetailEditorComponent } from './na-detail-editor/na-detail-editor.component';

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
		NaDetailEditorComponent,
		NaPaginationComponent,
		NaOutletComponent,
		NaComponentHostDirective
	],
	exports: [
		NaTableComponent,
		NaFormComponent,
		NaDetailEditorComponent,
		NaPaginationComponent,
		NaOutletComponent,
		NaComponentHostDirective
	]
})
export class NatriumLibModule { }
