import { IXmlableObject, XmlComponent } from "../../../file/xml-components";
import { TableOfContents } from "../..";
import { File } from "../../../file";
import { SectionPropertiesOptions } from "./section-properties/section-properties";
export declare class Body extends XmlComponent {
    private readonly sections;
    constructor();
    addSection(options: SectionPropertiesOptions): void;
    prepForXml(file?: File): IXmlableObject | undefined;
    push(component: XmlComponent): void;
    getTablesOfContents(): TableOfContents[];
    private createSectionParagraph;
}
