import { XmlAttributeComponent } from "../../../file/xml-components";
export interface IExtentAttributes {
    readonly cx?: number;
    readonly cy?: number;
}
export declare class ExtentAttributes extends XmlAttributeComponent<IExtentAttributes> {
    protected readonly xmlKeys: {
        cx: string;
        cy: string;
    };
}
