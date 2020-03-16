import { XmlAttributeComponent } from "../../../file/xml-components";
export interface IFootnoteAttributesProperties {
    readonly type?: string;
    readonly id: number;
}
export declare class FootnoteAttributes extends XmlAttributeComponent<IFootnoteAttributesProperties> {
    protected readonly xmlKeys: {
        type: string;
        id: string;
    };
}
