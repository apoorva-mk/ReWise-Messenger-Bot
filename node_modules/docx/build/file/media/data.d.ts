export interface IMediaDataDimensions {
    readonly pixels: {
        readonly x: number;
        readonly y: number;
    };
    readonly emus: {
        readonly x: number;
        readonly y: number;
    };
}
export interface IMediaData {
    readonly stream: Buffer | Uint8Array | ArrayBuffer;
    readonly path?: string;
    readonly fileName: string;
    readonly dimensions: IMediaDataDimensions;
}
export declare const WORKAROUND2 = "";
