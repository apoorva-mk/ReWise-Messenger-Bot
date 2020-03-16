import { XmlAttributeComponent } from "../../../file/xml-components";
export interface IBookmarkStartAttributesProperties {
    readonly id: string;
    readonly name: string;
}
export declare class BookmarkStartAttributes extends XmlAttributeComponent<IBookmarkStartAttributesProperties> {
    protected readonly xmlKeys: {
        id: string;
        name: string;
    };
}
export interface IBookmarkEndAttributesProperties {
    readonly id: string;
}
export declare class BookmarkEndAttributes extends XmlAttributeComponent<IBookmarkEndAttributesProperties> {
    protected readonly xmlKeys: {
        id: string;
    };
}
