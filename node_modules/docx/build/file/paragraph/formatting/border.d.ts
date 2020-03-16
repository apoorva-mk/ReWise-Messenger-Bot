import { XmlComponent } from "../../../file/xml-components";
interface IBorderPropertyOptions {
    readonly color: string;
    readonly space: number;
    readonly value: string;
    readonly size: number;
}
export interface IBorderOptions {
    readonly top?: IBorderPropertyOptions;
    readonly bottom?: IBorderPropertyOptions;
    readonly left?: IBorderPropertyOptions;
    readonly right?: IBorderPropertyOptions;
}
export declare class Border extends XmlComponent {
    constructor(options: IBorderOptions);
}
export declare class ThematicBreak extends XmlComponent {
    constructor();
}
export {};
