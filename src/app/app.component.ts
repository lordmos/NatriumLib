import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	currentPage = 0;
	totalPage = 100;
	pageTo(page: number) {
		console.log(page)
	}
}
