import { XmlAttributeComponent } from "../../../file/xml-components";
import { IDistance } from "../drawing";
export interface IInlineAttributes extends IDistance {
    readonly distT?: number;
    readonly distB?: number;
    readonly distL?: number;
    readonly distR?: number;
}
export declare class InlineAttributes extends XmlAttributeComponent<IInlineAttributes> {
    protected readonly xmlKeys: {
        distT: string;
        distB: string;
        distL: string;
        distR: string;
    };
}
