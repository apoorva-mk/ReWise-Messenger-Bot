import { XmlAttributeComponent } from "../../file/xml-components";
export interface IRelationshipsAttributesProperties {
    readonly xmlns: string;
}
export declare class RelationshipsAttributes extends XmlAttributeComponent<IRelationshipsAttributesProperties> {
    protected readonly xmlKeys: {
        xmlns: string;
    };
}
