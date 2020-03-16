import { XmlAttributeComponent } from "../../../../../../../../file/xml-components";
export interface IPresetGeometryAttributes {
    readonly prst?: string;
}
export declare class PresetGeometryAttributes extends XmlAttributeComponent<IPresetGeometryAttributes> {
    protected readonly xmlKeys: {
        prst: string;
    };
}
