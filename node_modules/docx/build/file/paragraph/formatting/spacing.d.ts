import { XmlComponent } from "../../../file/xml-components";
export interface ISpacingProperties {
    readonly after?: number;
    readonly before?: number;
    readonly line?: number;
    readonly lineRule?: string;
}
export declare class Spacing extends XmlComponent {
    constructor(options: ISpacingProperties);
}
export declare class ContextualSpacing extends XmlComponent {
    constructor(value: boolean);
}
