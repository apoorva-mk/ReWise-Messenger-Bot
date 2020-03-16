import { XmlComponent } from "../../../../../file/xml-components";
import { HeaderReferenceType } from "./header-reference-attributes";
export interface IHeaderReferenceOptions {
    readonly headerType?: HeaderReferenceType;
    readonly headerId?: number;
}
export declare class HeaderReference extends XmlComponent {
    constructor(options: IHeaderReferenceOptions);
}
