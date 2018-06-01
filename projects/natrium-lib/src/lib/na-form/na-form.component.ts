import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'na-form',
	templateUrl: './na-form.component.html',
	styleUrls: ['./na-form.component.css']
})
export class NaFormComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		window["bulmaCalendar"].attach('[type="date"]', {
			overlay: false,
			dateFormat: 'yyyy-mm-dd',
			lang: 'zh-cn'
		});
	}

}
