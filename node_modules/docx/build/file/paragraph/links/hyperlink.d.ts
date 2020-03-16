import { XmlComponent } from "../../../file/xml-components";
import { TextRun } from "../run";
export declare enum HyperlinkType {
    INTERNAL = "INTERNAL",
    EXTERNAL = "EXTERNAL"
}
export declare class HyperlinkRef {
    readonly id: string;
    constructor(id: string);
}
export declare class Hyperlink extends XmlComponent {
    readonly linkId: string;
    private readonly textRun;
    constructor(text: string, relationshipId: string, anchor?: string);
    readonly TextRun: TextRun;
}
