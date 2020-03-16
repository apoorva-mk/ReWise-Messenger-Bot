import { IgnoreIfEmptyXmlComponent, XmlComponent } from "../../file/xml-components";
import { IBorderOptions } from "./formatting/border";
interface IParagraphPropertiesOptions {
    readonly border?: IBorderOptions;
}
export declare class ParagraphProperties extends IgnoreIfEmptyXmlComponent {
    constructor(options: IParagraphPropertiesOptions);
    push(item: XmlComponent): void;
}
export {};
