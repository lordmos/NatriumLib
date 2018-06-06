import { Component, OnInit, Input } from '@angular/core';
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

	constructor() { }

	ngOnInit() {
		this.selectAll = false;
		this.anyoneSelected = false;
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
		action.callback.call(this.config.getContext(), arg);
	}

}
