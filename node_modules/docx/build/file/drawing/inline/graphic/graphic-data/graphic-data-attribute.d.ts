import { XmlAttributeComponent } from "../../../../../file/xml-components";
export interface IGraphicDataAttributes {
    readonly uri?: string;
}
export declare class GraphicDataAttributes extends XmlAttributeComponent<IGraphicDataAttributes> {
    protected readonly xmlKeys: {
        uri: string;
    };
}
