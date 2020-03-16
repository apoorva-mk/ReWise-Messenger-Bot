import { HeightRule } from "../../../file/table/table-row/table-row-height";
import { IgnoreIfEmptyXmlComponent, XmlComponent } from "../../../file/xml-components";
export declare class TableRowProperties extends IgnoreIfEmptyXmlComponent {
    constructor();
    setCantSplit(): TableRowProperties;
    setTableHeader(): TableRowProperties;
    setHeight(height: number, rule: HeightRule): TableRowProperties;
}
export declare class CantSplit extends XmlComponent {
    constructor();
}
export declare class TableHeader extends XmlComponent {
    constructor();
}
