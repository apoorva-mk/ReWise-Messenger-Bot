import { IgnoreIfEmptyXmlComponent } from "../../../file/xml-components";
import { WidthType } from "../table-cell";
export declare class TableCellMargin extends IgnoreIfEmptyXmlComponent {
    constructor();
    addTopMargin(value: number, type?: WidthType): void;
    addLeftMargin(value: number, type?: WidthType): void;
    addBottomMargin(value: number, type?: WidthType): void;
    addRightMargin(value: number, type?: WidthType): void;
}
