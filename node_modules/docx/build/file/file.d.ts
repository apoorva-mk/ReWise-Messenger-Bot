import { AppProperties } from "./app-properties/app-properties";
import { ContentTypes } from "./content-types/content-types";
import { CoreProperties, IPropertiesOptions } from "./core-properties";
import { Document } from "./document";
import { IPageSizeAttributes, SectionPropertiesOptions } from "./document/body/section-properties";
import { IPageMarginAttributes } from "./document/body/section-properties/page-margin/page-margin-attributes";
import { IFileProperties } from "./file-properties";
import { FooterWrapper } from "./footer-wrapper";
import { FootNotes } from "./footnotes";
import { Footer, Header } from "./header";
import { HeaderWrapper } from "./header-wrapper";
import { Media } from "./media";
import { Numbering } from "./numbering";
import { Hyperlink, HyperlinkRef, Paragraph } from "./paragraph";
import { Relationships } from "./relationships";
import { Settings } from "./settings";
import { Styles } from "./styles";
import { Table } from "./table";
import { TableOfContents } from "./table-of-contents";
export interface ISectionOptions {
    readonly headers?: {
        readonly default?: Header;
        readonly first?: Header;
        readonly even?: Header;
    };
    readonly footers?: {
        readonly default?: Footer;
        readonly first?: Footer;
        readonly even?: Footer;
    };
    readonly size?: IPageSizeAttributes;
    readonly margins?: IPageMarginAttributes;
    readonly properties?: SectionPropertiesOptions;
    readonly children: Array<Paragraph | Table | TableOfContents | HyperlinkRef>;
}
export declare class File {
    private currentRelationshipId;
    private readonly document;
    private readonly headers;
    private readonly footers;
    private readonly docRelationships;
    private readonly coreProperties;
    private readonly numbering;
    private readonly media;
    private readonly fileRelationships;
    private readonly footNotes;
    private readonly settings;
    private readonly contentTypes;
    private readonly appProperties;
    private readonly styles;
    private readonly hyperlinkCache;
    constructor(options?: IPropertiesOptions, fileProperties?: IFileProperties, sections?: ISectionOptions[]);
    addSection({ headers, footers, margins, size, properties, children, }: ISectionOptions): void;
    verifyUpdateFields(): void;
    private createHyperlink;
    private createInternalHyperLink;
    private createHeader;
    private createFooter;
    private addHeaderToDocument;
    private addFooterToDocument;
    private addDefaultRelationships;
    readonly Document: Document;
    readonly Styles: Styles;
    readonly CoreProperties: CoreProperties;
    readonly Numbering: Numbering;
    readonly Media: Media;
    readonly DocumentRelationships: Relationships;
    readonly FileRelationships: Relationships;
    readonly Headers: HeaderWrapper[];
    readonly Footers: FooterWrapper[];
    readonly ContentTypes: ContentTypes;
    readonly AppProperties: AppProperties;
    readonly FootNotes: FootNotes;
    readonly Settings: Settings;
    readonly HyperlinkCache: {
        readonly [key: string]: Hyperlink;
    };
}
