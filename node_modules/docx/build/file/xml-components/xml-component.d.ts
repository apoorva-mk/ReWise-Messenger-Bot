import { File } from "../file";
import { BaseXmlComponent } from "./base";
import { IXmlableObject } from "./xmlable-object";
export declare const EMPTY_OBJECT: {};
export declare abstract class XmlComponent extends BaseXmlComponent {
    protected root: Array<BaseXmlComponent | string | any>;
    constructor(rootKey: string);
    prepForXml(file?: File): IXmlableObject | undefined;
    addChildElement(child: XmlComponent | string): XmlComponent;
    delete(): void;
}
export declare abstract class IgnoreIfEmptyXmlComponent extends XmlComponent {
    prepForXml(): IXmlableObject | undefined;
}
