import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import "../assets/appcode/index-4bb4b1c1.css";
export interface IVue3KanbanWebPartProps {
    heading: string;
    description: string;
    list: string;
}
export default class Vue3KanbanWebPart extends BaseClientSideWebPart<IVue3KanbanWebPartProps> {
    render(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=Vue3KanbanWebPart.d.ts.map