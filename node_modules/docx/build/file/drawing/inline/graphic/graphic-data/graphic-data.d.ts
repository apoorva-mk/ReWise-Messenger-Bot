import { IMediaData } from "../../../../../file/media";
import { XmlComponent } from "../../../../../file/xml-components";
export declare class GraphicData extends XmlComponent {
    private readonly pic;
    constructor(mediaData: IMediaData, x: number, y: number);
    setXY(x: number, y: number): void;
}
