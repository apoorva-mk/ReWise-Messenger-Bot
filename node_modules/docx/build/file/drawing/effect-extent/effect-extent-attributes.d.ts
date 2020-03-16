import { XmlAttributeComponent } from "../../../file/xml-components";
export interface IEffectExtentAttributes {
    readonly b?: number;
    readonly l?: number;
    readonly r?: number;
    readonly t?: number;
}
export declare class EffectExtentAttributes extends XmlAttributeComponent<IEffectExtentAttributes> {
    protected readonly xmlKeys: {
        b: string;
        l: string;
        r: string;
        t: string;
    };
}
