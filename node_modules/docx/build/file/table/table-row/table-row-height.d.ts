import { XmlAttributeComponent, XmlComponent } from "../../../file/xml-components";
export declare enum HeightRule {
    AUTO = "auto",
    ATLEAST = "atLeast",
    EXACT = "exact"
}
interface ITableRowHeight {
    readonly height: number;
    readonly rule: HeightRule;
}
export declare class TableRowHeightAttributes extends XmlAttributeComponent<ITableRowHeight> {
    protected readonly xmlKeys: {
        height: string;
        rule: string;
    };
}
export declare class TableRowHeight extends XmlComponent {
    constructor(value: number, rule: HeightRule);
}
export {};
