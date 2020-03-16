import { BaseXmlComponent, ImportedXmlComponent, XmlComponent } from "../../file/xml-components";
import { CharacterStyle, ParagraphStyle } from "./style";
import { ICharacterStyleOptions } from "./style/character-style";
import { IParagraphStyleOptions } from "./style/paragraph-style";
export * from "./border";
export interface IStylesOptions {
    readonly initialStyles?: BaseXmlComponent;
    readonly paragraphStyles?: IParagraphStyleOptions[];
    readonly characterStyles?: ICharacterStyleOptions[];
    readonly importedStyles?: Array<XmlComponent | ParagraphStyle | CharacterStyle | ImportedXmlComponent>;
}
export declare class Styles extends XmlComponent {
    constructor(options: IStylesOptions);
}
