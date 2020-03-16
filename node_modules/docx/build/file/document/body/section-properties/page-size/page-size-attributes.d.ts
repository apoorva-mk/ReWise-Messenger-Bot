import { XmlAttributeComponent } from "../../../../../file/xml-components";
export declare enum PageOrientation {
    PORTRAIT = "portrait",
    LANDSCAPE = "landscape"
}
export interface IPageSizeAttributes {
    readonly width?: number;
    readonly height?: number;
    readonly orientation?: PageOrientation;
}
export declare class PageSizeAttributes extends XmlAttributeComponent<IPageSizeAttributes> {
    protected readonly xmlKeys: {
        width: string;
        height: string;
        orientation: string;
    };
}
