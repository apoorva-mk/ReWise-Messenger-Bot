import { UnderlineType } from "../../../file/paragraph/run/underline";
import { Style } from "./style";
export interface IBaseCharacterStyleOptions {
    readonly basedOn?: string;
    readonly link?: string;
    readonly semiHidden?: boolean;
    readonly run?: {
        readonly size?: number;
        readonly bold?: boolean;
        readonly italics?: boolean;
        readonly smallCaps?: boolean;
        readonly allCaps?: boolean;
        readonly strike?: boolean;
        readonly doubleStrike?: boolean;
        readonly subScript?: boolean;
        readonly superScript?: boolean;
        readonly underline?: {
            readonly type?: UnderlineType;
            readonly color?: string;
        };
        readonly color?: string;
        readonly font?: string;
        readonly characterSpacing?: number;
        readonly highlight?: string;
        readonly shadow?: {
            readonly type: string;
            readonly fill: string;
            readonly color: string;
        };
    };
}
export interface ICharacterStyleOptions extends IBaseCharacterStyleOptions {
    readonly id: string;
    readonly name?: string;
}
export declare class CharacterStyle extends Style {
    private readonly runProperties;
    constructor(options: ICharacterStyleOptions);
}
