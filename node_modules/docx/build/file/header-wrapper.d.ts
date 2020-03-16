import { XmlComponent } from "../file/xml-components";
import { HeaderReferenceType } from "./document";
import { Header } from "./header/header";
import { Media } from "./media";
import { Paragraph } from "./paragraph";
import { Relationships } from "./relationships";
import { Table } from "./table";
export interface IDocumentHeader {
    readonly header: HeaderWrapper;
    readonly type: HeaderReferenceType;
}
export declare class HeaderWrapper {
    private readonly media;
    private readonly header;
    private readonly relationships;
    constructor(media: Media, referenceId: number, initContent?: XmlComponent);
    add(item: Paragraph | Table): HeaderWrapper;
    addChildElement(childElement: XmlComponent | string): void;
    readonly Header: Header;
    readonly Relationships: Relationships;
    readonly Media: Media;
}
