import { XmlAttributeComponent } from "../../../../../file/xml-components";
export interface IPageMarginAttributes {
    readonly top?: number;
    readonly right?: number;
    readonly bottom?: number;
    readonly left?: number;
    readonly header?: number;
    readonly footer?: number;
    readonly gutter?: number;
    readonly mirror?: boolean;
}
export declare class PageMarginAttributes extends XmlAttributeComponent<IPageMarginAttributes> {
    protected readonly xmlKeys: {
        top: string;
        right: string;
        bottom: string;
        left: string;
        header: string;
        footer: string;
        gutter: string;
        mirror: string;
    };
}
