import { XmlAttributeComponent, XmlComponent } from "../../file/xml-components";
export interface IUpdateFieldsAttributesProperties {
    readonly enabled: boolean;
}
export declare class UpdateFieldsAttributes extends XmlAttributeComponent<IUpdateFieldsAttributesProperties> {
    protected readonly xmlKeys: {
        enabled: string;
    };
}
export declare class UpdateFields extends XmlComponent {
    constructor(enabled?: boolean);
}
