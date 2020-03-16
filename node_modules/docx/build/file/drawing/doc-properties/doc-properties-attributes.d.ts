import { XmlAttributeComponent } from "../../../file/xml-components";
export interface IDocPropertiesAttributes {
    readonly id?: number;
    readonly name?: string;
    readonly descr?: string;
}
export declare class DocPropertiesAttributes extends XmlAttributeComponent<IDocPropertiesAttributes> {
    protected readonly xmlKeys: {
        id: string;
        name: string;
        descr: string;
    };
}
