import { IXmlableObject, XmlComponent } from "../../file/xml-components";
import { ILevelsOptions } from "./level";
import { ConcreteNumbering } from "./num";
export interface INumberingOptions {
    readonly config: Array<{
        readonly levels: ILevelsOptions[];
        readonly reference: string;
    }>;
}
export declare class Numbering extends XmlComponent {
    private nextId;
    private readonly abstractNumbering;
    private readonly concreteNumbering;
    constructor(options: INumberingOptions);
    prepForXml(): IXmlableObject | undefined;
    private createConcreteNumbering;
    private createAbstractNumbering;
    readonly ConcreteNumbering: ConcreteNumbering[];
}
