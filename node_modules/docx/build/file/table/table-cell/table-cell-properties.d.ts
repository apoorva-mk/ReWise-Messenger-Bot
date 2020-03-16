import { IgnoreIfEmptyXmlComponent } from "../../../file/xml-components";
import { ITableShadingAttributesProperties } from "../shading";
import { ITableCellMarginOptions } from "./cell-margin/table-cell-margins";
import { TableCellBorders, VerticalAlign, VerticalMergeType, WidthType } from "./table-cell-components";
export declare class TableCellProperties extends IgnoreIfEmptyXmlComponent {
    private readonly cellBorder;
    constructor();
    readonly Borders: TableCellBorders;
    addGridSpan(cellSpan: number): TableCellProperties;
    addVerticalMerge(type: VerticalMergeType): TableCellProperties;
    setVerticalAlign(type: VerticalAlign): TableCellProperties;
    setWidth(width: string | number, type?: WidthType): TableCellProperties;
    setShading(attrs: ITableShadingAttributesProperties): TableCellProperties;
    addMargins(options: ITableCellMarginOptions): TableCellProperties;
}
