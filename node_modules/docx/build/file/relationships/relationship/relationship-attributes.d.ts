import { XmlAttributeComponent } from "../../../file/xml-components";
export interface IRelationshipAttributesProperties {
    readonly id: string;
    readonly type: string;
    readonly target: string;
    readonly targetMode?: string;
}
export declare class RelationshipAttributes extends XmlAttributeComponent<IRelationshipAttributesProperties> {
    protected readonly xmlKeys: {
        id: string;
        type: string;
        target: string;
        targetMode: string;
    };
}
