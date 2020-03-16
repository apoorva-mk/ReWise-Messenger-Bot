import { Paragraph } from "../../../file/paragraph";
import { XmlComponent } from "../../../file/xml-components";
export declare enum FootnoteType {
    SEPERATOR = "separator",
    CONTINUATION_SEPERATOR = "continuationSeparator"
}
export declare class Footnote extends XmlComponent {
    constructor(id: number, type?: FootnoteType);
    add(paragraph: Paragraph): void;
}
