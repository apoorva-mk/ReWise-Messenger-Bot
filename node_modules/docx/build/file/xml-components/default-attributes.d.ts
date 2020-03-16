import { BaseXmlComponent } from "./base";
import { IXmlableObject } from "./xmlable-object";
export declare type AttributeMap<T> = {
    [P in keyof T]: string;
};
export declare abstract class XmlAttributeComponent<T> extends BaseXmlComponent {
    protected root: T;
    protected readonly xmlKeys?: AttributeMap<T>;
    constructor(properties: T);
    prepForXml(): IXmlableObject;
    set(properties: T): void;
}
