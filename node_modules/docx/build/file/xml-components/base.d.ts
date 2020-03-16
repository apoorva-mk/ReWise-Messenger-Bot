import { File } from "../file";
import { IXmlableObject } from "./xmlable-object";
export declare abstract class BaseXmlComponent {
    protected readonly rootKey: string;
    protected deleted: boolean;
    constructor(rootKey: string);
    abstract prepForXml(file?: File): IXmlableObject | undefined;
    readonly IsDeleted: boolean;
}
