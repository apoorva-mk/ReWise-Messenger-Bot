import { XmlComponent } from "../../file/xml-components";
import { INumberingOptions } from "../numbering";
import { HyperlinkType, Paragraph } from "../paragraph";
import { IStylesOptions } from "../styles";
export interface IInternalHyperlinkDefinition {
    readonly text: string;
    readonly type: HyperlinkType.INTERNAL;
}
export interface IExternalHyperlinkDefinition {
    readonly link: string;
    readonly text: string;
    readonly type: HyperlinkType.EXTERNAL;
}
export interface IPropertiesOptions {
    readonly title?: string;
    readonly subject?: string;
    readonly creator?: string;
    readonly keywords?: string;
    readonly description?: string;
    readonly lastModifiedBy?: string;
    readonly revision?: string;
    readonly externalStyles?: string;
    readonly styles?: IStylesOptions;
    readonly numbering?: INumberingOptions;
    readonly footnotes?: Paragraph[];
    readonly hyperlinks?: {
        readonly [key: string]: IInternalHyperlinkDefinition | IExternalHyperlinkDefinition;
    };
}
export declare class CoreProperties extends XmlComponent {
    constructor(options: IPropertiesOptions);
}
