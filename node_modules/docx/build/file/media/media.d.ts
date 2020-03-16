import { IDrawingOptions } from "../drawing";
import { File } from "../file";
import { FooterWrapper } from "../footer-wrapper";
import { HeaderWrapper } from "../header-wrapper";
import { PictureRun } from "../paragraph";
import { IMediaData } from "./data";
export declare class Media {
    static addImage(file: File | HeaderWrapper | FooterWrapper, buffer: Buffer | string | Uint8Array | ArrayBuffer, width?: number, height?: number, drawingOptions?: IDrawingOptions): PictureRun;
    private static generateId;
    private readonly map;
    constructor();
    getMedia(key: string): IMediaData;
    addMedia(buffer: Buffer | string | Uint8Array | ArrayBuffer, width?: number, height?: number): IMediaData;
    private createMedia;
    readonly Array: IMediaData[];
    private convertDataURIToBinary;
}
