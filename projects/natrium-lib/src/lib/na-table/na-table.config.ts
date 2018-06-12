export class NaTableConfig {

    private _context: any;

    private _title: string;

    private _titleStyle: string;

    private _config: Array<NaTableConfigItem>;

    private _normalActions: Array<NaTableAction>;

    private _singleSelectActions: Array<NaTableAction>;

    private _needShowIndex: boolean;

    private _needMultiSelect: boolean;

    private _multiSelectActions: Array<NaTableAction>;

    private _paginationConfig: NaTablePaginationConfig;

    constructor(context: any) {
        this._context = context;
        this._title = "";
        this._titleStyle = "";
        this._config = [];
        this._needShowIndex = false;
        this._normalActions = [];
        this._singleSelectActions = [];
        this._needMultiSelect = false;
        this._multiSelectActions = [];
        this._paginationConfig = null;
    }

    get context(): any {
        return this._context;
    }

    setTitle(title: string): NaTableConfig {
        this._title = title;
        return this;
    }

    get title(): string {
        return this._title;
    }

    setTitleStyle(style: string): NaTableConfig {
        this._titleStyle = style;
        return this;
    }

    get titleStyle(): string {
        return this._titleStyle;
    }

    setPaginationConfig(paginationConfig: NaTablePaginationConfig): NaTableConfig {
        this._paginationConfig = paginationConfig;
        return this;
    }

    get paginationConfig(): NaTablePaginationConfig {
        return this._paginationConfig;
    }

    setConfig(config: Array<NaTableConfigItem>): NaTableConfig {
        this._config = config;
        return this;
    }

    get configItems(): Array<NaTableConfigItem> {
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
        this._multiSelectActions = actions;
        return this;
    }

    get multiSelectActions(): Array<NaTableAction> {
        return this._multiSelectActions;
    }

    setNormalActions(actions: Array<NaTableAction>): NaTableConfig {
        this._normalActions = actions;
        return this;
    }

    get normalActions(): Array<NaTableAction> {
        return this._normalActions;
    }

    setSingleSelectActions(actions: Array<NaTableAction>): NaTableConfig {
        this._singleSelectActions = actions;
        return this;
    }

    get singleSelectActions(): Array<NaTableAction> {
        return this._singleSelectActions;
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

export type NaTablePaginationConfig = {
    currentPage: number,
    totalPage: number,
    maxLength: number,
    onPageChange: (page:number) => void
}