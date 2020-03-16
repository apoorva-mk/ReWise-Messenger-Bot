import { XmlAttributeComponent } from "../../../file/xml-components";
export interface IOverrideAttributes {
    readonly contentType: string;
    readonly partName?: string;
}
export declare class OverrideAttributes extends XmlAttributeComponent<IOverrideAttributes> {
    protected readonly xmlKeys: {
        contentType: string;
        partName: string;
    };
}
