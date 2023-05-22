/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
// import { DisplayMode } from '@microsoft/sp-core-library';

import { getVueDOMElementHTML } from "../../lib/WebpartProperties";

import { renderVue } from "../assets/appcode/index-05140511.js";
import "../assets/appcode/index-e632907f.css";

const APPCLIENTID = "Vue3Kanban";

export interface IVue3KanbanWebPartProps {
  heading: string;
  description: string;
  list: string;
}

export default class Vue3KanbanWebPart extends BaseClientSideWebPart<IVue3KanbanWebPartProps> {
  public render(): void {
    let instanceId = this.context.instanceId;
    let containerId = APPCLIENTID + (instanceId ? "-" + instanceId : "");
    this.domElement.innerHTML = "<span></span>";
    this.properties.list = instanceId
    this.domElement.innerHTML = getVueDOMElementHTML(containerId, this.properties, instanceId);
    // call the Vue render function
    renderVue(`#${containerId}`);
    // Is this in edit mode?
    /* try{
      if (this.displayMode === DisplayMode.Edit) {
        let app = document.getElementById("calendarapp") as HTMLElement;
        app.classList.add('edit')
        app = document.getElementById("app") as HTMLElement;
        app.classList.add('edit')
      } else {
        let app = document.getElementById("calendarapp") as HTMLElement;
        app.classList.remove('edit')
        app = document.getElementById("app") as HTMLElement;
        app.classList.remove('edit')
      }
    } catch(e) {
      // do nothing here for now
    } */
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  // Modify this section with editable properties you want to provide to your webpart
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "Vue3 Webpart"
          },
          groups: [
            {
              groupName: "Webpart properties",
              groupFields: [
                PropertyPaneTextField('heading', {
                  label: "Heading"
                }),
                PropertyPaneTextField('description', {
                  label: "Description",
                  multiline: true
                }),
                PropertyPaneTextField('list', {
                  label: "List"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
