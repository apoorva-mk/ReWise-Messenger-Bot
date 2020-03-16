import { XmlComponent } from "../../../file/xml-components";
export interface IStyleAttributes {
    readonly type?: string;
    readonly styleId?: string;
    readonly default?: boolean;
    readonly customStyle?: string;
}
export declare class Style extends XmlComponent {
    constructor(attributes: IStyleAttributes, name?: string);
}
