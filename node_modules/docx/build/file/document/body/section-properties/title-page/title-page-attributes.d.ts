import { XmlAttributeComponent } from "../../../../../file/xml-components";
export interface IHeaderReferenceAttributes {
    readonly value: string;
}
export declare class TitlePageAttributes extends XmlAttributeComponent<IHeaderReferenceAttributes> {
    protected readonly xmlKeys: {
        value: string;
    };
}
