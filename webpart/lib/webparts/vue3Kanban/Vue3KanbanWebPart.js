var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
// import { DisplayMode } from '@microsoft/sp-core-library';
import { getVueDOMElementHTML } from "../../lib/WebpartProperties";
import { renderVue } from "../assets/appcode/index-70ee7864.js";
import "../assets/appcode/index-4bb4b1c1.css";
var APPCLIENTID = "Vue3Kanban";
var Vue3KanbanWebPart = /** @class */ (function (_super) {
    __extends(Vue3KanbanWebPart, _super);
    function Vue3KanbanWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Vue3KanbanWebPart.prototype.render = function () {
        var instanceId = this.context.instanceId;
        var containerId = APPCLIENTID + (instanceId ? "-" + instanceId : "");
        this.domElement.innerHTML = "<span></span>";
        this.properties.list = instanceId;
        this.domElement.innerHTML = getVueDOMElementHTML(containerId, this.properties, instanceId);
        // call the Vue render function
        renderVue("#".concat(containerId));
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
    };
    Object.defineProperty(Vue3KanbanWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    // Modify this section with editable properties you want to provide to your webpart
    Vue3KanbanWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    };
    return Vue3KanbanWebPart;
}(BaseClientSideWebPart));
export default Vue3KanbanWebPart;
//# sourceMappingURL=Vue3KanbanWebPart.js.map