import { XmlAttributeComponent } from "../../../../../file/xml-components";
export interface IColumnsAttributes {
    readonly space?: number;
    readonly num?: number;
}
export declare class ColumnsAttributes extends XmlAttributeComponent<IColumnsAttributes> {
    protected readonly xmlKeys: {
        space: string;
        num: string;
    };
}
