import { XmlComponent } from "../../../../../file/xml-components";
import { FooterReferenceType } from "./footer-reference-attributes";
export interface IFooterOptions {
    readonly footerType?: FooterReferenceType;
    readonly footerId?: number;
}
export declare class FooterReference extends XmlComponent {
    constructor(options: IFooterOptions);
}
