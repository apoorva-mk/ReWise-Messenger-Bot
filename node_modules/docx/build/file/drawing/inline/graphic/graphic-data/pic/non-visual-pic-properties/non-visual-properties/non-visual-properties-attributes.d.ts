import { XmlAttributeComponent } from "../../../../../../../../file/xml-components";
export interface INonVisualPropertiesAttributes {
    readonly id?: number;
    readonly name?: string;
    readonly descr?: string;
}
export declare class NonVisualPropertiesAttributes extends XmlAttributeComponent<INonVisualPropertiesAttributes> {
    protected readonly xmlKeys: {
        id: string;
        name: string;
        descr: string;
    };
}
