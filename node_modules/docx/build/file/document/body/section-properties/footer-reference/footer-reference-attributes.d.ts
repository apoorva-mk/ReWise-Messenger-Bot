import { XmlAttributeComponent } from "../../../../../file/xml-components";
export declare enum FooterReferenceType {
    DEFAULT = "default",
    FIRST = "first",
    EVEN = "even"
}
export interface IFooterReferenceAttributes {
    readonly type: string;
    readonly id: string;
}
export declare class FooterReferenceAttributes extends XmlAttributeComponent<IFooterReferenceAttributes> {
    protected readonly xmlKeys: {
        type: string;
        id: string;
    };
}
