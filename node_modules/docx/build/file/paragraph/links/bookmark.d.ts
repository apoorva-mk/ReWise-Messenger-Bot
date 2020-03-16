import { XmlComponent } from "../../../file/xml-components";
import { TextRun } from "../run";
export declare class Bookmark {
    readonly start: BookmarkStart;
    readonly text: TextRun;
    readonly end: BookmarkEnd;
    constructor(name: string, text: string);
}
export declare class BookmarkStart extends XmlComponent {
    constructor(name: string, linkId: string);
}
export declare class BookmarkEnd extends XmlComponent {
    constructor(linkId: string);
}
