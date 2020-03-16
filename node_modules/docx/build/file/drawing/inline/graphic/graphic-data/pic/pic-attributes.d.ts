import { XmlAttributeComponent } from "../../../../../../file/xml-components";
export interface IPicAttributes {
    readonly xmlns?: string;
}
export declare class PicAttributes extends XmlAttributeComponent<IPicAttributes> {
    protected readonly xmlKeys: {
        xmlns: string;
    };
}
