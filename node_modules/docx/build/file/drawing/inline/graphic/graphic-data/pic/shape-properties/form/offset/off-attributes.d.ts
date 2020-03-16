import { XmlAttributeComponent } from "../../../../../../../../../file/xml-components";
export interface IOffsetAttributes {
    readonly x?: number;
    readonly y?: number;
}
export declare class OffsetAttributes extends XmlAttributeComponent<IOffsetAttributes> {
    protected readonly xmlKeys: {
        x: string;
        y: string;
    };
}
