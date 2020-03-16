import { XmlAttributeComponent, XmlComponent } from "../../../../../file/xml-components";
export declare enum LineNumberRestartFormat {
    CONTINUOUS = "continuous",
    NEW_SECTION = "newSection",
    NEW_PAGE = "newPage"
}
export interface ILineNumberAttributes {
    readonly lineNumberCountBy?: number;
    readonly lineNumberStart?: number;
    readonly lineNumberRestart?: LineNumberRestartFormat;
    readonly lineNumberDistance?: number;
}
export declare class LineNumberAttributes extends XmlAttributeComponent<ILineNumberAttributes> {
    protected readonly xmlKeys: {
        lineNumberCountBy: string;
        lineNumberStart: string;
        lineNumberRestart: string;
        lineNumberDistance: string;
    };
}
export declare class LineNumberType extends XmlComponent {
    constructor(countBy?: number, start?: number, restart?: LineNumberRestartFormat, dist?: number);
}
