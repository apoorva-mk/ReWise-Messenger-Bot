import { XmlComponent } from "../../file/xml-components";
import { LevelForOverride } from "./level";
export declare class ConcreteNumbering extends XmlComponent {
    readonly reference?: string | undefined;
    readonly id: number;
    constructor(numId: number, abstractNumId: number, reference?: string | undefined);
    overrideLevel(num: number, start?: number): LevelOverride;
}
export declare class LevelOverride extends XmlComponent {
    private readonly levelNum;
    private readonly lvl;
    constructor(levelNum: number, start?: number);
    readonly Level: LevelForOverride;
}
