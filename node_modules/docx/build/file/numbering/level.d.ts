import { XmlComponent } from "../../file/xml-components";
import { AlignmentType } from "../paragraph/formatting";
import { IParagraphStyleOptions2, IRunStyleOptions } from "../styles/style-options";
export declare enum LevelSuffix {
    NOTHING = "nothing",
    SPACE = "space",
    TAB = "tab"
}
export interface ILevelsOptions {
    readonly level: number;
    readonly format?: string;
    readonly text?: string;
    readonly alignment?: AlignmentType;
    readonly start?: number;
    readonly suffix?: LevelSuffix;
    readonly style?: {
        readonly run?: IRunStyleOptions;
        readonly paragraph?: IParagraphStyleOptions2;
    };
}
export declare class LevelBase extends XmlComponent {
    private readonly paragraphProperties;
    private readonly runProperties;
    constructor({ level, format, text, alignment, start, style, suffix }: ILevelsOptions);
}
export declare class Level extends LevelBase {
    constructor(options: ILevelsOptions);
}
export declare class LevelForOverride extends LevelBase {
}
