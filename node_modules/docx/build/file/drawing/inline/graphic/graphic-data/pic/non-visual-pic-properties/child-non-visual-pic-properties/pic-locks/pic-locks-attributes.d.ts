import { XmlAttributeComponent } from "../../../../../../../../../file/xml-components";
export interface IPicLocksAttributes {
    readonly noChangeAspect?: number;
    readonly noChangeArrowheads?: number;
}
export declare class PicLocksAttributes extends XmlAttributeComponent<IPicLocksAttributes> {
    protected readonly xmlKeys: {
        noChangeAspect: string;
        noChangeArrowheads: string;
    };
}
