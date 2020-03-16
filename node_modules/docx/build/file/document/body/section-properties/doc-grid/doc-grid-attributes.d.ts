import { XmlAttributeComponent } from "../../../../../file/xml-components";
export interface IDocGridAttributesProperties {
    readonly linePitch?: number;
}
export declare class DocGridAttributes extends XmlAttributeComponent<IDocGridAttributesProperties> {
    protected readonly xmlKeys: {
        linePitch: string;
    };
}
