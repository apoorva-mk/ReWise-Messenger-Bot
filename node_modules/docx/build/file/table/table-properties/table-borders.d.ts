import { BorderStyle } from "../../../file/styles";
import { XmlComponent } from "../../../file/xml-components";
export interface ITableBordersOptions {
    readonly top?: {
        readonly style: BorderStyle;
        readonly size: number;
        readonly color: string;
    };
    readonly bottom?: {
        readonly style: BorderStyle;
        readonly size: number;
        readonly color: string;
    };
    readonly left?: {
        readonly style: BorderStyle;
        readonly size: number;
        readonly color: string;
    };
    readonly right?: {
        readonly style: BorderStyle;
        readonly size: number;
        readonly color: string;
    };
    readonly insideHorizontal?: {
        readonly style: BorderStyle;
        readonly size: number;
        readonly color: string;
    };
    readonly insideVertical?: {
        readonly style: BorderStyle;
        readonly size: number;
        readonly color: string;
    };
}
export declare class TableBorders extends XmlComponent {
    constructor(options: ITableBordersOptions);
}
