import { XmlComponent } from "../../../file/xml-components";
export interface IIndentAttributesProperties {
    readonly left?: number;
    readonly hanging?: number;
    readonly firstLine?: number;
    readonly start?: number;
    readonly end?: number;
    readonly right?: number;
}
export declare class Indent extends XmlComponent {
    constructor(attrs: IIndentAttributesProperties);
}
