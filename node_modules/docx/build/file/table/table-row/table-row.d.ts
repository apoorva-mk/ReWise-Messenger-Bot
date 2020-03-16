import { HeightRule } from "../../../file/table/table-row/table-row-height";
import { XmlComponent } from "../../../file/xml-components";
import { TableCell } from "../table-cell";
export interface ITableRowOptions {
    readonly cantSplit?: boolean;
    readonly tableHeader?: boolean;
    readonly height?: {
        readonly height: number;
        readonly rule: HeightRule;
    };
    readonly children: TableCell[];
}
export declare class TableRow extends XmlComponent {
    private readonly options;
    private readonly properties;
    constructor(options: ITableRowOptions);
    readonly CellCount: number;
    readonly Children: TableCell[];
    addCellToIndex(cell: TableCell, index: number): void;
}
