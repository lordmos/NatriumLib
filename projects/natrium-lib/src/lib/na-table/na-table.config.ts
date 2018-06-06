import { Pipe } from "@angular/core";

export class NaTableConfig {

    private _context: any;

    private _title: string;

    private _titleStyle: string;

    private _config: Array<NaTableConfigItem>;

    private _normalActions: Array<NaTableAction>;

    private _singalActions: Array<NaTableAction>;

    private _needShowIndex: boolean;

    private _indexText: string;

    private _needMultiSelect: boolean;

    private _multiActions: Array<NaTableAction>;

    constructor(context: any) {
        this._context = context;
        this._title = "";
        this._titleStyle = "";
        this._config = [];
        this._needShowIndex = false;
        this._indexText = "";
        this._normalActions = [];
        this._singalActions = [];
        this._needMultiSelect = false;
        this._multiActions = [];
    }

    getContext(): any {
        return this._context;
    }

    setTitle(title: string): NaTableConfig {
        this._title = title;
        return this;
    }

    getTitle(): string {
        return this._title;
    }

    setIndexText(indexText: string): NaTableConfig {
        this._indexText = indexText;
        return this;
    }

    getIndexText(): string {
        return this._indexText;
    }

    setTitleStyle(style: string): NaTableConfig {
        this._titleStyle = style;
        return this;
    }

    getTitleStyle(): string {
        return this._titleStyle;
    }

    setConfig(config: Array<NaTableConfigItem>): NaTableConfig {
        this._config = config;
        return this;
    }

    getConfig(): Array<NaTableConfigItem> {
        return this._config;
    }

    needShowIndex(needShowIndex: boolean): NaTableConfig {
        this._needShowIndex = needShowIndex;
        return this;
    }

    isNeedShowIndex(): boolean {
        return this._needShowIndex;
    }

    needMultiSelect(needMultiSelect: boolean): NaTableConfig {
        this._needMultiSelect = needMultiSelect;
        return this;
    }

    isNeedMultiSelect(): boolean {
        return this._needMultiSelect;
    }

    setMultiSelectActions(actions: Array<NaTableAction>): NaTableConfig {
        this._multiActions = actions;
        return this;
    }

    getMultiSelectActions(): Array<NaTableAction> {
        return this._multiActions;
    }

    setNormalActions(actions: Array<NaTableAction>): NaTableConfig {
        this._normalActions = actions;
        return this;
    }

    getNormalActions(): Array<NaTableAction> {
        return this._normalActions;
    }

    setSingleSelectActions(actions: Array<NaTableAction>): NaTableConfig {
        this._singalActions = actions;
        return this;
    }

    getSingleSelectActions(): Array<NaTableAction> {
        return this._singalActions;
    }

}

export type NaTableConfigItem = {
    label: string,
    name: string,
    pipe?: (value: any) => string
}

export type NaTableAction = {
    callback: (index?: Array<number> | number) => void,
    btnText: string,
    btnIcon?: string,
    btnStyleCss?: string
}