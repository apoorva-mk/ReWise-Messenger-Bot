import { XmlAttributeComponent } from "../../../file/xml-components";
export interface IBorderAttributesProperties {
    readonly color: string;
    readonly space: number;
    readonly val: string;
    readonly sz: number;
}
export declare class BorderAttributes extends XmlAttributeComponent<IBorderAttributesProperties> {
    protected readonly xmlKeys: {
        val: string;
        color: string;
        space: string;
        sz: string;
    };
}
