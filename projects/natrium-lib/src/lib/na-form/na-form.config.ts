import { Component } from "@angular/compiler/src/core";
import { ValidatorFn } from "@angular/forms";

export class NaFormConfig {

    private title?: string;

    private config: Array<{
        label: string,
        type: "text" | "tel" | "password" | "email" | "select" | "radio" | "checkbox" | "date" | "datetime-local" | "month" | "time" | "textarea",
        /**
         * @param placeholder 仅在type为text\tel\password\email\textarea时生效
         * */
        placeholder?: string,
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
         * @param iconLeft 仅在type为text\tel\password\email时生效
         * */
        iconLeft?: string,
        /**
         * @param options 仅在type为select\radio时生效
         * */
        options?: Array<{
            name: string,
            value: any
        }>,
        /**
         * @param checkboxText 仅在type为select\radio时生效
         * */
        checkboxText?: string,
        /**
         * @param styleCss 用于组件的颜色渲染
         * */ 
        styleCss?: string
    }>;

    constructor() {

    }

}

