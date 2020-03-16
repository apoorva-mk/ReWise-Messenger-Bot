import { XmlComponent } from "../../../../file/xml-components";
export interface ITableCellMarginOptions {
    readonly top?: number;
    readonly left?: number;
    readonly bottom?: number;
    readonly right?: number;
}
export declare class TableCellMargin extends XmlComponent {
    constructor({ top, left, right, bottom }: ITableCellMarginOptions);
}
