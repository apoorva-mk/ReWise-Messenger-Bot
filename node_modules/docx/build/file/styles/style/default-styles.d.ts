import { CharacterStyle, IBaseCharacterStyleOptions } from "./character-style";
import { IBaseParagraphStyleOptions, IParagraphStyleOptions, ParagraphStyle } from "./paragraph-style";
export declare class HeadingStyle extends ParagraphStyle {
    constructor(options: IParagraphStyleOptions);
}
export declare class TitleStyle extends HeadingStyle {
    constructor(options: IBaseParagraphStyleOptions);
}
export declare class Heading1Style extends HeadingStyle {
    constructor(options: IBaseParagraphStyleOptions);
}
export declare class Heading2Style extends HeadingStyle {
    constructor(options: IBaseParagraphStyleOptions);
}
export declare class Heading3Style extends HeadingStyle {
    constructor(options: IBaseParagraphStyleOptions);
}
export declare class Heading4Style extends HeadingStyle {
    constructor(options: IBaseParagraphStyleOptions);
}
export declare class Heading5Style extends HeadingStyle {
    constructor(options: IBaseParagraphStyleOptions);
}
export declare class Heading6Style extends HeadingStyle {
    constructor(options: IBaseParagraphStyleOptions);
}
export declare class ListParagraph extends ParagraphStyle {
    constructor(options: IBaseParagraphStyleOptions);
}
export declare class FootnoteText extends ParagraphStyle {
    constructor(options: IBaseParagraphStyleOptions);
}
export declare class FootnoteReferenceStyle extends CharacterStyle {
    constructor(options: IBaseCharacterStyleOptions);
}
export declare class FootnoteTextChar extends CharacterStyle {
    constructor(options: IBaseCharacterStyleOptions);
}
export declare class HyperlinkStyle extends CharacterStyle {
    constructor(options: IBaseCharacterStyleOptions);
}
