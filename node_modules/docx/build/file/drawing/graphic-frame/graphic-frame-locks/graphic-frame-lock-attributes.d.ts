import { XmlAttributeComponent } from "../../../../file/xml-components";
export interface IGraphicFrameLockAttributes {
    readonly xmlns?: string;
    readonly noChangeAspect?: number;
}
export declare class GraphicFrameLockAttributes extends XmlAttributeComponent<IGraphicFrameLockAttributes> {
    protected readonly xmlKeys: {
        xmlns: string;
        noChangeAspect: string;
    };
}
