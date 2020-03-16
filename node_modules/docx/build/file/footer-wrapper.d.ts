import { XmlComponent } from "../file/xml-components";
import { FooterReferenceType } from "./document";
import { Footer } from "./footer/footer";
import { Media } from "./media";
import { Paragraph } from "./paragraph";
import { Relationships } from "./relationships";
import { Table } from "./table";
export interface IDocumentFooter {
    readonly footer: FooterWrapper;
    readonly type: FooterReferenceType;
}
export declare class FooterWrapper {
    private readonly media;
    private readonly footer;
    private readonly relationships;
    constructor(media: Media, referenceId: number, initContent?: XmlComponent);
    add(item: Paragraph | Table): void;
    addChildElement(childElement: XmlComponent): void;
    readonly Footer: Footer;
    readonly Relationships: Relationships;
    readonly Media: Media;
}
