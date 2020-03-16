import { XmlAttributeComponent } from "../../../../../file/xml-components";
export declare enum HeaderReferenceType {
    DEFAULT = "default",
    FIRST = "first",
    EVEN = "even"
}
export interface IHeaderReferenceAttributes {
    readonly type: string;
    readonly id: string;
}
export declare class HeaderReferenceAttributes extends XmlAttributeComponent<IHeaderReferenceAttributes> {
    protected readonly xmlKeys: {
        type: string;
        id: string;
    };
}
