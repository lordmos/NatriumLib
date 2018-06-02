import { ValidatorFn } from "@angular/forms";
import { ComponentDecorator, ComponentRef, ComponentFactory } from "@angular/core";
import { equal } from "assert";

export class NaFormConfig {

    private _context: any;

    private _title: string;

    private _config: Array<NaFormConfigItem>;

    constructor(context: any) {
        this._context = context;
        this._title = "";
        this._config = [];
    }

    getContext(): any {
        return this._context;
    }

    setTitle(title: string): NaFormConfig {
        this._title = title;
        return this;
    }

    getTitle(): string {
        return this._title;
    }

    setConfig(config: Array<NaFormConfigItem>): NaFormConfig {
        this._config = config;
        return this;
    }

    getConfig(): Array<NaFormConfigItem> {
        return this._config;
    }

}

export interface NaFormConfigItem {
    label: string,
    name: string,
    type: "text" | "tel" | "password" | "email" | "textarea"
    | "select" | "radio" | "checkbox" | "date"
    | "file" | "img" | "search",
    /**
     * @param placeholder 仅在type为text\tel\password\email\textarea时生效
     * */
    placeholder?: string,
    /**
     * @param equalTo 仅在type为text\tel\password\email\textarea时生效，用于判断是否与某个字段的值相等
     * */
    equalTo?: string,
    validators?: Array<ValidatorFn>,
    invalidErrorText?: Array<{
        type: "required" | "minLength" | "maxlength" | "email" | string,
        invalidText: string,
        invalidIcon?: string,
        /**
         * @param invalidInputIcon 仅在type为text\tel\password\email时生效
         * */
        invalidInputIcon?: string
    }>,
    /**
     * @param inputIcon 仅在type为text\tel\password\email时生效
     * */
    inputIcon?: string,
    /**
     * @param options 仅在type为select\radio时生效
     * */
    options?: Array<{
        name: string,
        value: any
    }>,
    /**
     * @param checkboxText 仅在type为checkbox时生效
     * */
    checkboxText?: string,
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
     * @param btnText 仅在type为file\img\search时生效
     * */
    btnText?: string
    /**
     * @param btnIcon 仅在type为file\img\search时生效
     * */
    btnIcon?: string
    /**
     * @param btnStyleCss 仅在type为file\img\search时生效
     * */
    btnStyleCss?: string,
    /**
     * @param searchFrom 仅在type为search时生效，设置为你需要通过哪个字段来进行搜索
     * */
    searchFrom?: string,
    /**
     * @param searchAction 仅在type为file\img\search时生效。
     * 如果type为search获取到你要操作字段的值以及对search按钮进行的处理。
     * */
    action?: (
        value: any,
        target: {
            btnText: string,
            btnIcon: string,
            btnStyleCss: string
        },
        setFileList?: (files: Array<URL>) => void
    ) => void
}

