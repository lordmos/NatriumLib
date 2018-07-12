import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NaComponentHostDirective } from './na-component-host/na-component-host.directive';
import { NaOutletComponent } from './na-outlet/na-outlet.component';
import { NaPaginationComponent } from './na-pagination/na-pagination.component';
import { NaTableComponent } from './na-table/na-table.component';
import { NaFormComponent } from './na-form/na-form.component';
import { NaDetailEditorComponent } from './na-detail-editor/na-detail-editor.component';
import { NaModalService } from './na-modal/na-modal.service';
import { NaModalComponent } from './na-modal/na-modal.component';
import { NaNotificationService } from './na-notification/na-notification.service';
import { NaNotificationComponent } from './na-notification/na-notification.component';

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
		NaComponentHostDirective,
		NaModalComponent,
		NaNotificationComponent
	],
	exports: [
		NaTableComponent,
		NaFormComponent,
		NaDetailEditorComponent,
		NaPaginationComponent,
		NaOutletComponent,
		NaComponentHostDirective
	],
	entryComponents: [
		NaModalComponent,
		NaNotificationComponent
	]
})
export class NatriumLibModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: NatriumLibModule,
			providers: [
				NaNotificationService,
				NaModalService
			],
		};
	}
}
