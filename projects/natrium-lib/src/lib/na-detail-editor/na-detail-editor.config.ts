import { ValidatorFn } from "@angular/forms";

export class NaDetailEditorConfig {

    private _context: any;

    private _title: string;

    private _titleStyle: string;

    private _confirmBtnText: string;

    private _confirmBtnIcon: string;

    private _confirmBtnStyle: string;

    private _cancelBtnText: string;

    private _cancelBtnIcon: string;

    private _cancelBtnStyle: string;

    private _config: Array<NaDetailEditorConfigItem>;

    constructor(context: any) {
        this._context = context;
        this._title = "";
        this._titleStyle = "";
        this._confirmBtnText = "submit";
        this._confirmBtnIcon = "";
        this._confirmBtnStyle = "";
        this._cancelBtnText = "cancel";
        this._cancelBtnIcon = "";
        this._cancelBtnStyle = "";
        this._config = [];
    }

    get context(): any {
        return this._context;
    }

    setTitle(title: string): NaDetailEditorConfig {
        this._title = title;
        return this;
    }

    get title(): string {
        return this._title;
    }

    setTitleStyle(style: string): NaDetailEditorConfig {
        this._titleStyle = style;
        return this;
    }

    get titleStyle(): string {
        return this._titleStyle;
    }

    setConfig(config: Array<NaDetailEditorConfigItem>): NaDetailEditorConfig {
        this._config = config;
        return this;
    }

    get configItems(): Array<NaDetailEditorConfigItem> {
        return this._config;
    }

    setConfirmBtnConfig(btnText: string, btnIcon?: string, btnStyleCss?: string): NaDetailEditorConfig {
        this._confirmBtnText = btnText;
        if (btnIcon) this._confirmBtnIcon = btnIcon;
        if (btnStyleCss) this._confirmBtnStyle = btnStyleCss;
        return this;
    }

    get confirmBtnConfig(): { btnText: string, btnIcon: string, btnStyleCss: string } {
        return {
            btnText: this._confirmBtnText,
            btnIcon: this._confirmBtnIcon,
            btnStyleCss: this._confirmBtnStyle
        }
    }

    setCancelBtnConfig(btnText: string, btnIcon?: string, btnStyleCss?: string): NaDetailEditorConfig {
        this._cancelBtnText = btnText;
        if (btnIcon) this._cancelBtnIcon = btnIcon;
        if (btnStyleCss) this._cancelBtnStyle = btnStyleCss;
        return this;
    }

    get cancelBtnConfig(): { btnText: string, btnIcon: string, btnStyleCss: string } {
        return {
            btnText: this._cancelBtnText,
            btnIcon: this._cancelBtnIcon,
            btnStyleCss: this._cancelBtnStyle
        }
    }

}

export type NaDetailEditorConfigItem = {
    label: string,
    name: string,
    type: "text" | "number" | "tel" | "email" | "textarea"
    | "select" | "radio" | "date" | "img" | "divider",
    /**
     * @param placeholder 仅在type为text\number\tel\password\email\textarea时生效
     * */
    placeholder?: string,
    /**
     * @param equalTo 仅在type为text\number\tel\password\email\textarea时生效，用于判断是否与某个字段的值相等
     * */
    equalTo?: string,
    /**
     * @param equalErrorText 字段不相等时的错误文案
     * */
    equalErrorText?: string,
    /**
     * @param notEqualTo 仅在type为text\number\tel\password\email\textarea时生效，用于判断是否与某个字段的值不相等
     * */
    notEqualTo?: string,
    /**
     * @param notEqualErrorText 字段相等时的错误文案
     * */
    notEqualErrorText?: string,
    /**
     * @param largeThan 仅在type为number\date时生效，用于判断此字段的值是否与大于某个字段的值
     * */
    largeThan?: string,
    /**
     * @param largeErrorText 仅在type为number\date时生效，用于此字段的值不大于某个字段的值时的错误提示
     * */
    largeErrorText?: string,
    /**
     * @param lessThan 仅在type为number\date时生效，用于判断此字段的值是否与小于某个字段的值
     * */
    lessThan?: string,
    /**
     * @param lessErrorText 仅在type为number\date时生效，用于此字段的值不小于某个字段的值时的错误提示
     * */
    lessErrorText?: string,
    validators?: Array<ValidatorFn>,
    invalidErrorText?: any,
    /**
     * @param inputIcon 仅在type为text\number\tel\password\email时生效
     * */
    inputIcon?: string,
    /**
     * @param options 仅在type为select\radio时生效
     * */
    options?: Array<{
        name: string,
        value: any
    }>,
    defaultText?: string,
    selectDefaultText?: string,
    /**
     * @param dateLang 仅在type为date时生效
     * */
    dateLang?: "ar" | "bn" | "de" | "en" | "es" | "fa" | "fr" | "hi" | "hr" | "hu" | "id" | "it"
    | "ja" | "nl" | "pt" | "pt-BR" | "ru" | "sr" | "th" | "tr" | "zh-cn",
    /**
     * @param styleCss 用于组件的颜色渲染
     * */
    styleCss?: string,
    /**
     * @param btnText 仅在type为file\img时生效
     * */
    btnText?: string,
    /**
     * @param btnIcon 仅在type为file\img时生效
     * */
    btnIcon?: string,
    /**
     * @param btnStyleCss 仅在type为file\img时生效
     * */
    btnStyleCss?: string,
    /**
     * @param action 仅在type为file\img时生效。
     * */
    action?: (
        value: Array<FileList>,
        setFileList?: (files: Array<{
            fileName: string,
            fileUrl: string
        }>) => void
    ) => void,
    fileMaxCount?: number,
    fileMinCount?: number,
    fileCountErrorText?: string,
    editable?: boolean,
    editIconStyleCss?: string
}

