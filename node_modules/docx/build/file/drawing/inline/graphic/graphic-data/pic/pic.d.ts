import { IMediaData } from "../../../../../../file/media";
import { XmlComponent } from "../../../../../../file/xml-components";
export declare class Pic extends XmlComponent {
    private readonly shapeProperties;
    constructor(mediaData: IMediaData, x: number, y: number);
    setXY(x: number, y: number): void;
}
