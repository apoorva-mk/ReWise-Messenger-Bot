import { IMediaData, IMediaDataDimensions } from "../../../file/media";
import { XmlComponent } from "../../../file/xml-components";
export declare class Inline extends XmlComponent {
    readonly mediaData: IMediaData;
    private readonly dimensions;
    private readonly extent;
    private readonly graphic;
    constructor(mediaData: IMediaData, dimensions: IMediaDataDimensions);
    scale(factorX: number, factorY: number): void;
}
