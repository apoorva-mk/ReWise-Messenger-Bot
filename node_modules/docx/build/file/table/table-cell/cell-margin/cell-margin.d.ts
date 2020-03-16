import { XmlComponent } from "../../../../file/xml-components";
export interface ICellMarginProperties {
    readonly type: string;
    readonly width: number;
}
export declare class TopCellMargin extends XmlComponent {
    constructor(value: number);
}
export declare class BottomCellMargin extends XmlComponent {
    constructor(value: number);
}
export declare class LeftCellMargin extends XmlComponent {
    constructor(value: number);
}
export declare class RightCellMargin extends XmlComponent {
    constructor(value: number);
}
