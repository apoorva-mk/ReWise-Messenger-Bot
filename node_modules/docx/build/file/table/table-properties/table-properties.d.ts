import { IgnoreIfEmptyXmlComponent } from "../../../file/xml-components";
import { AlignmentType } from "../../paragraph";
import { ITableShadingAttributesProperties } from "../shading";
import { WidthType } from "../table-cell";
import { ITableBordersOptions } from "./table-borders";
import { TableCellMargin } from "./table-cell-margin";
import { ITableFloatOptions } from "./table-float-properties";
import { TableLayoutType } from "./table-layout";
export declare class TableProperties extends IgnoreIfEmptyXmlComponent {
    private readonly cellMargin;
    constructor();
    setWidth(width: number, type?: WidthType): TableProperties;
    setLayout(type: TableLayoutType): void;
    setBorder(borderOptions: ITableBordersOptions): TableProperties;
    readonly CellMargin: TableCellMargin;
    setTableFloatProperties(tableFloatOptions: ITableFloatOptions): TableProperties;
    setShading(attrs: ITableShadingAttributesProperties): TableProperties;
    setAlignment(type: AlignmentType): void;
}
