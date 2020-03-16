import { BorderStyle } from "../../../file/styles";
import { IgnoreIfEmptyXmlComponent, XmlComponent } from "../../../file/xml-components";
export declare class TableCellBorders extends IgnoreIfEmptyXmlComponent {
    constructor();
    addTopBorder(style: BorderStyle, size: number, color: string): TableCellBorders;
    addStartBorder(style: BorderStyle, size: number, color: string): TableCellBorders;
    addBottomBorder(style: BorderStyle, size: number, color: string): TableCellBorders;
    addEndBorder(style: BorderStyle, size: number, color: string): TableCellBorders;
    addLeftBorder(style: BorderStyle, size: number, color: string): TableCellBorders;
    addRightBorder(style: BorderStyle, size: number, color: string): TableCellBorders;
}
export declare class GridSpan extends XmlComponent {
    constructor(value: number);
}
export declare enum VerticalMergeType {
    CONTINUE = "continue",
    RESTART = "restart"
}
export declare class VerticalMerge extends XmlComponent {
    constructor(value: VerticalMergeType);
}
export declare enum VerticalAlign {
    BOTTOM = "bottom",
    CENTER = "center",
    TOP = "top"
}
export declare class VAlign extends XmlComponent {
    constructor(value: VerticalAlign);
}
export declare enum WidthType {
    AUTO = "auto",
    DXA = "dxa",
    NIL = "nil",
    PERCENTAGE = "pct"
}
export declare class TableCellWidth extends XmlComponent {
    constructor(value: string | number, type: WidthType);
}
