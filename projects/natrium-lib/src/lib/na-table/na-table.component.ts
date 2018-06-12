import { Component, OnInit, Input, ElementRef, HostListener } from '@angular/core';
import { NaTableConfig, NaTableAction } from './na-table.config';

@Component({
	selector: 'na-table',
	templateUrl: './na-table.component.html',
	styleUrls: ['./na-table.component.css']
})
export class NaTableComponent implements OnInit {

	@Input() config: NaTableConfig;

	_data: Array<any>;

	@Input() set data(data: Array<any>) {
		this._data = data;
		for (const dataItem of data) {
			dataItem.__checked = false;
		}
	}

	get data(): Array<any> {
		return this._data;
	}

	selectAll: boolean;

	anyoneSelected: boolean;

	constructor(private elementRef: ElementRef) { }

	ngOnInit() {
		this.selectAll = false;
		this.anyoneSelected = false;
	}

	ngAfterViewInit() {
		this.onResize();
	}

	@HostListener('window:resize') onResize() {
		const fakeHeader = this.elementRef.nativeElement.getElementsByClassName("na-fake-header")[0];
		const header = this.elementRef.nativeElement.getElementsByTagName("thead")[0];
		fakeHeader.style.width = header.clientWidth + "px";
		const headerCells = header.children[0].cells;
		const fakeHeaderCells = fakeHeader.children;
		for (let i = 0; i < headerCells.length; i++) {
			fakeHeaderCells[i].style.cssText = document.defaultView.getComputedStyle(headerCells[i], "").cssText;
		}
	}

	onSelectAllChange() {
		this.selectAll = !this.selectAll;
		this.anyoneSelected = this.selectAll;
		for (const dataItem of this.data) {
			dataItem.__checked = this.selectAll;
		}
	}

	onSelectChange(index: number) {
		this.data[index].__checked = !this._data[index].__checked;
		this.anyoneSelected = false;
		let isSelectAll = true;
		for (const dataItem of this.data) {
			isSelectAll = isSelectAll && dataItem.__checked;
			if (dataItem.__checked) {
				this.anyoneSelected = true;
			}
		}
		this.selectAll = isSelectAll;
	}

	callMulti(action: NaTableAction) {
		let selectList = [];
		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i].__checked) {
				selectList.push(i);
			}
		}
		this.call(action, selectList);
	}

	call(action: NaTableAction, arg?: any) {
		this.callFunc(action.callback, arg);
	}

	callFunc(func: any, arg?: any) {
		func.call(this.config.context, arg);
	}

	onPageChange(page: number) {
		this.callFunc(this.config.paginationConfig.onPageChange, page);
	}

}
