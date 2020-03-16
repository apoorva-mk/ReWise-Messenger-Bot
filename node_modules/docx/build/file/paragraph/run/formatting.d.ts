import { XmlComponent } from "../../../file/xml-components";
export { Underline } from "./underline";
export { SubScript, SuperScript } from "./script";
export { RunFonts } from "./run-fonts";
export declare class Bold extends XmlComponent {
    constructor();
}
export declare class BoldComplexScript extends XmlComponent {
    constructor();
}
export declare class CharacterSpacing extends XmlComponent {
    constructor(value: number);
}
export declare class Italics extends XmlComponent {
    constructor();
}
export declare class ItalicsComplexScript extends XmlComponent {
    constructor();
}
export declare class Caps extends XmlComponent {
    constructor();
}
export declare class Color extends XmlComponent {
    constructor(color: string);
}
export declare class DoubleStrike extends XmlComponent {
    constructor();
}
export declare class Emboss extends XmlComponent {
    constructor();
}
export declare class Imprint extends XmlComponent {
    constructor();
}
export declare class SmallCaps extends XmlComponent {
    constructor();
}
export declare class Strike extends XmlComponent {
    constructor();
}
export declare class Size extends XmlComponent {
    constructor(size: number);
}
export declare class SizeComplexScript extends XmlComponent {
    constructor(size: number);
}
export declare class RightToLeft extends XmlComponent {
    constructor();
}
export declare class Highlight extends XmlComponent {
    constructor(color: string);
}
export declare class HighlightComplexScript extends XmlComponent {
    constructor(color: string);
}
export declare class Shading extends XmlComponent {
    constructor(value: string, fill: string, color: string);
}
export declare class ShadowComplexScript extends XmlComponent {
    constructor(value: string, fill: string, color: string);
}
