import { XmlComponent } from "../../file/xml-components";
import { Hyperlink, Paragraph } from "../paragraph";
import { Table } from "../table";
import { TableOfContents } from "../table-of-contents";
import { Body } from "./body";
export declare class Document extends XmlComponent {
    private readonly body;
    constructor();
    add(item: Paragraph | Table | TableOfContents | Hyperlink): Document;
    readonly Body: Body;
    getTablesOfContents(): TableOfContents[];
}
