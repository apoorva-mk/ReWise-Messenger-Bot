import { FooterWrapper } from "../../../../file/footer-wrapper";
import { HeaderWrapper } from "../../../../file/header-wrapper";
import { XmlComponent } from "../../../../file/xml-components";
import { IDocGridAttributesProperties } from "./doc-grid/doc-grid-attributes";
import { ILineNumberAttributes } from "./line-number";
import { IPageBordersOptions } from "./page-border";
import { IPageMarginAttributes } from "./page-margin/page-margin-attributes";
import { IPageNumberTypeAttributes } from "./page-number";
import { IPageSizeAttributes } from "./page-size/page-size-attributes";
import { ISectionVerticalAlignAttributes } from "./vertical-align";
export interface IHeaderFooterGroup<T> {
    readonly default?: T;
    readonly first?: T;
    readonly even?: T;
}
interface IHeadersOptions {
    readonly headers?: IHeaderFooterGroup<HeaderWrapper>;
}
interface IFootersOptions {
    readonly footers?: IHeaderFooterGroup<FooterWrapper>;
}
interface ITitlePageOptions {
    readonly titlePage?: boolean;
}
export declare type SectionPropertiesOptions = IPageSizeAttributes & IPageMarginAttributes & IDocGridAttributesProperties & IHeadersOptions & IFootersOptions & IPageNumberTypeAttributes & ILineNumberAttributes & IPageBordersOptions & ITitlePageOptions & ISectionVerticalAlignAttributes & {
    readonly column?: {
        readonly space?: number;
        readonly count?: number;
    };
};
export declare class SectionProperties extends XmlComponent {
    private readonly options;
    constructor(options?: SectionPropertiesOptions);
    private addHeaders;
    private addFooters;
    readonly Options: SectionPropertiesOptions;
}
export {};
