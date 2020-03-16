import { XmlAttributeComponent } from "../../../../../../../file/xml-components";
export interface IShapePropertiesAttributes {
    readonly bwMode?: string;
}
export declare class ShapePropertiesAttributes extends XmlAttributeComponent<IShapePropertiesAttributes> {
    protected readonly xmlKeys: {
        bwMode: string;
    };
}
