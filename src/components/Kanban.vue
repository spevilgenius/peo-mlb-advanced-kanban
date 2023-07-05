<template>
  <div class="container-fluid px-0">
    <div class="row">
      <ejs-dialog ref="dlgSpinner" :visible="datafalse" :header="'dlgSpinHeader'" :content="'dlgSpinContent'" :showCloseIcon="datatrue" :target="apptarget" position="center center" width="500px" height="500px">
        <template v-slot:dlgSpinHeader>
          <div class="container p-0 m-0">
            <div class="row p-0 m-0 text-center">
              <span>Loading Events</span>
            </div>
          </div>
        </template>
        <template v-slot:dlgSpinContent>
          <div class="container p-0 m-0">
            <div class="row p-0 m-0 text-center">
              <div class="text-center align-middle mx-auto px500" style="z-index: 1000">
                <div id="LoadingBars">
                  <div class="blockG" id="rotateG_01"></div>
                  <div class="blockG" id="rotateG_02"></div>
                  <div class="blockG" id="rotateG_03"></div>
                  <div class="blockG" id="rotateG_04"></div>
                  <div class="blockG" id="rotateG_05"></div>
                  <div class="blockG" id="rotateG_06"></div>
                  <div class="blockG" id="rotateG_07"></div>
                  <div class="blockG" id="rotateG_08"></div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </ejs-dialog>
      <ejs-dialog ref="dlgForm" :visible="datafalse" :content="'dlgFormContent'" :showCloseIcon="datatrue" :target="apptarget" position="center center" width="600px" height="800px">
        <template v-slot:dlgFormContent>
          <div class="e-card">
            <div class="e-card-header">
              <div class="container">
                <div class="row">
                  <div class="col-12 text-center">Edit Item</div>
                </div>
              </div>
            </div>
            <div class="e-card-separator"></div>
            <div class="e-card-content"></div>
            <div class="e-card-separator"></div>
            <div class="e-card-actions">
              <div class="container">
                <div class="row">
                  <div class="col-8"></div>
                  <div class="col-4">
                    <ejs-button id="save-form" cssClass="e-success" content="Save" v-on:click="handleit"></ejs-button>
                    <ejs-button id="close-form" cssClass="e-secondary" content="Close" v-on:click="handleit"></ejs-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </ejs-dialog>
      <div class="col-12">
        <div class="content-wrapper">
          <div class="e-card">
            <div class="e-card-content">
              <div id="calendartab" style="display: none">
                <div class="container-fluid">
                  <div class="row">
                    <div class="toolbar px-0">
                      <ejs-toolbar id="toolbar_calendar_options" height="50px" overflowMode="Scrollable" scrollStep="100" :clicked="onToolbarItemClicked">
                        <e-items>
                          <e-item prefixIcon="e-icons e-menu" tooltipText="Settings Menu" id="menucalendar"></e-item>
                          <e-item type="Separator"></e-item>
                          <e-item prefixIcon="e-icons e-plus" tooltipText="New Event" text="New Event" id="btnCalendarNew"> </e-item>
                          <e-item prefixIcon="e-icons e-repeat" tooltipText="New Recurring Event" text="New Recurring Event" id="btnCalendarNewRecurring"></e-item>
                          <e-item type="Separator"></e-item>
                          <e-item prefixIcon="e-icons e-day" tooltipText="Day" text="Day" id="btnCalendarDay"></e-item>
                          <e-item prefixIcon="e-icons e-week" tooltipText="Week" text="Week" id="btnCalendarWeek"></e-item>
                          <e-item prefixIcon="e-icons e-week" tooltipText="WorkWeek" text="WorkWeek" id="btnCalendarWorkWeek"></e-item>
                          <e-item prefixIcon="e-icons e-month" tooltipText="Month" text="Month" id="btnCalendarMonth"> </e-item>
                        </e-items>
                      </ejs-toolbar>
                    </div>
                  </div>
                  <ejs-sidebar id="sideCalendar" class="sidebar" ref="sidebarCalendar" width="1000px" target=".main-calendar" type="Push" :isOpen="datafalse" :showBackdrop="datafalse" :enablePersistence="datafalse">
                    <div class="main-menu main-menu-calendar px-0">
                      <div>
                        <ejs-dialog ref="dlgCategory" :visible="datafalse" :header="'dialogHeader'" :footerTemplate="'dialogFooter'" :content="'dialogContent'" :showCloseIcon="datatrue" :target="sidebartarget" position="center center" width="500px">
                          <template v-slot:dialogHeader>
                            <div class="container p-0 m-0">
                              <div class="row p-0 m-0 text-center">
                                <span>Are you sure?</span>
                              </div>
                            </div>
                          </template>
                          <template v-slot:dialogContent>
                            <div class="container p-0 m-0">
                              <div class="row p-0 m-0 text-center">
                                <span>This will add the category to all selected lists.</span>
                              </div>
                            </div>
                          </template>
                          <template v-slot:dialogFooter>
                            <div class="container p-0 m-0">
                              <div class="row p-0 m-0">
                                <div class="col-8">
                                  <ejs-textbox v-model="addcategory" placeholder="New Category"></ejs-textbox>
                                </div>
                                <div class="col-4">
                                  <ejs-button id="add-cat" cssClass="e-success mr-1" content="Yes" v-on:click="handleit"></ejs-button>
                                  <ejs-button id="close-cat" cssClass="e-info ml-1" content="No" v-on:click="handleit"></ejs-button>
                                </div>
                              </div>
                            </div>
                          </template>
                        </ejs-dialog>
                        <div class="e-card">
                          <div class="e-card-content">
                            <div id="settings" style="display: none">
                              <div class="container p-0 m-0">
                                <div class="row p-0 m-0 mb-1">
                                  <div class="col-12 text-center">
                                    <ejs-textbox v-model="calprops.Title" placeholder="Calendar Title"></ejs-textbox>
                                  </div>
                                </div>
                                <div class="row p-0 m-0 mb-1">
                                  <div class="col-12 text-center bg-dark text-white">Sites</div>
                                </div>
                                <div class="row p-0 m-0 mb-1">
                                  <div class="col-8">
                                    <ejs-multiselect id="msSitesA" ref="msSitesA" v-model="sitesSelected" :dataSource="calprops.Sites" placeholder="Select Site" :fields="sitefields" mode="CheckBox" :showDropDownIcon="datatrue" :showSelectAll="datatrue" filterBarPlaceholder="Search Sites"></ejs-multiselect>
                                  </div>
                                  <div class="col-4">
                                    <ejs-button id="get-lists" cssClass="e-success" content="Get Lists For Selected Sites" v-on:click="handleit"></ejs-button>
                                  </div>
                                </div>
                                <div v-if="calprops.Lists.length > 0" class="row p-0 m-0 mb-1">
                                  <div class="col-12 text-center bg-dark text-white">Lists:</div>
                                </div>
                                <div v-if="calprops.Lists.length > 0" class="row p-0 m-0">
                                  <div class="col-12 p-0">
                                    <table id="tblLists" class="p-0 px1000">
                                      <thead>
                                        <th class="text-center bg-dark text-white p-0 px60">Select</th>
                                        <th class="text-center bg-dark text-white p-0 px150">Site</th>
                                        <th class="text-center bg-dark text-white p-0 px150">List</th>
                                        <th class="text-center bg-dark text-white p-0 px640">Field Mappings</th>
                                      </thead>
                                      <tbody>
                                        <tr v-for="(list, index) in calprops.Lists" :key="list.Id" class="p-0">
                                          <td class="text-center">
                                            <ejs-checkbox v-model="list.Selected"></ejs-checkbox>
                                          </td>
                                          <td>{{ list.Site }}</td>
                                          <td>{{ list.Title }}</td>
                                          <td>
                                            <div class="p-0">
                                              <div class="row p-0 m-0">
                                                <div class="p-0 px150">
                                                  <div :id="'spinner' + index" :ref="'spinner' + index" class="e-control e-progress-btn e-lib e-round e-small e-success e-icon-btn e-btn e-spin-center" style="padding-top: 3px; visibility: hidden">
                                                    <span class="e-spinner" style="width: 20px; height: 20px">
                                                      <div class="e-spinner-pane e-spin-show">
                                                        <div class="e-spinner-inner">
                                                          <svg class="e-spin-bootstrap5" id="OM4vl" viewBox="0 0 16 16" style="height: 16px; width: 16px; transform-origin: 8px 8px 8px"><path class="e-path-circle" d="M8,0.8A7.2,7.2 0 1 1 0.8,8"></path></svg>
                                                        </div>
                                                      </div>
                                                    </span>
                                                  </div>
                                                  <ejs-button :id="'btn' + index" v-on:click="mapfields" :data-index="index" :data-button="'btn' + index" cssClass="e-danger" content="Map Fields"></ejs-button>
                                                </div>
                                                <div class="p-0 px440">
                                                  <div :id="'ac_' + index" style="display: none">
                                                    <table class="px440">
                                                      <thead>
                                                        <th class="text-center bg-dark text-white">Calendar Field</th>
                                                        <th class="text-center bg-dark text-white">Mapped List Field</th>
                                                      </thead>
                                                      <tbody>
                                                        <tr>
                                                          <td><div class="px100">Title</div></td>
                                                          <td class="mappedlistfield px330">
                                                            <div class="px280"><ejs-dropdownlist :dataSource="list.ListFields" :fields="fieldfields" placeholder="Select Title Field" v-model="list.Fields.Subject" :cssClass="list.Fields.Subject === '' ? 'e-danger' : 'e-success'"></ejs-dropdownlist></div>
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td><div class="px100">StartDate</div></td>
                                                          <td class="mappedlistfield px330">
                                                            <div class="px280"><ejs-dropdownlist :dataSource="list.ListFields" :fields="fieldfields" placeholder="Select StartDate Field" v-model="list.Fields.StartTime" :style="list.Fields.StartTime === '' ? 'border: 1px solid red' : 'border: 1px solid green'"></ejs-dropdownlist></div>
                                                            <div class="px35"><ejs-button v-on:click="addfield(list, index, 'StartDate')" cssClass="e-round e-success" iconCss="e-icons e-medium e-circle-add" content="" title="Add StartDate Field To The List"></ejs-button></div>
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td><div class="px100">EndDate</div></td>
                                                          <td class="mappedlistfield px330">
                                                            <div class="px280"><ejs-dropdownlist :dataSource="list.ListFields" :fields="fieldfields" placeholder="Select EndDate Field" v-model="list.Fields.EndTime" :cssClass="list.Fields.EndTime === '' ? 'e-danger' : 'e-success'"></ejs-dropdownlist></div>
                                                            <div class="px35"><ejs-button v-on:click="addfield(list, index, 'EndDate')" cssClass="e-round e-success" iconCss="e-icons e-medium e-circle-add" content="" title="Add EndDate Field To The List"></ejs-button></div>
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td><div class="px100">Category</div></td>
                                                          <td class="mappedlistfield px330">
                                                            <div class="px280"><ejs-dropdownlist :dataSource="list.ListFields" :fields="fieldfields" placeholder="Select Category Field" v-model="list.Fields.Category" :cssClass="list.Fields.Category === '' ? 'e-danger' : 'e-success'"></ejs-dropdownlist></div>
                                                            <div class="px35"><ejs-button v-on:click="addfield(list, index, 'Category')" cssClass="e-round e-success" iconCss="e-icons e-medium e-circle-add" content="" title="Add Category Field To The List"></ejs-button></div>
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td><div class="px100">Location</div></td>
                                                          <td class="mappedlistfield px330">
                                                            <div class="px280"><ejs-dropdownlist :dataSource="list.ListFields" :fields="fieldfields" placeholder="Select Location Field" v-model="list.Fields.Location"></ejs-dropdownlist></div>
                                                            <div class="px35"><ejs-button v-on:click="addfield(list, index, 'Location')" cssClass="e-round e-success" iconCss="e-icons e-medium e-circle-add" content="" title="Add Location Field To The List"></ejs-button></div>
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td><div class="px100">Description</div></td>
                                                          <td class="mappedlistfield px330">
                                                            <div class="px280"><ejs-dropdownlist :dataSource="list.ListFields" :fields="fieldfields" placeholder="Select Description Field" v-model="list.Fields.Description" :cssClass="list.Fields.Description === '' ? 'e-danger' : 'e-success'"></ejs-dropdownlist></div>
                                                            <div class="px35"><ejs-button v-on:click="addfield(list, index, 'Description')" cssClass="e-round e-success" iconCss="e-icons e-medium e-circle-add" content="" title="Add Description Field To The List"></ejs-button></div>
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td><div class="px100">Recurrence</div></td>
                                                          <td class="mappedlistfield px330">
                                                            <div class="px280"><ejs-dropdownlist :dataSource="list.ListFields" :fields="fieldfields" placeholder="Select Recurrence Field" v-model="list.Fields.Recurrence"></ejs-dropdownlist></div>
                                                            <div class="px35"><ejs-button v-on:click="addfield(list, index, 'Recurrence')" cssClass="e-round e-success" iconCss="e-icons e-medium e-circle-add" content="" title="Add Recurrence Field To The List"></ejs-button></div>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </div>
                                                  <ejs-accordion>
                                                    <e-accordionitems>
                                                      <e-accordionitem class="p-1 px500" :expanded="false" header="Mapped Fields--Expand to map/check fields." :content="'#ac_' + index"></e-accordionitem>
                                                    </e-accordionitems>
                                                  </ejs-accordion>
                                                </div>
                                                <div class="p-0 px50 bg-success"></div>
                                              </div>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                                <div class="row p-0 m-0 mb-1">
                                  <div class="col-12 text-center bg-dark text-white">Categories:</div>
                                </div>
                                <div class="row p-0 m-0 mb-1">
                                  <div class="col-12 p-0">
                                    <table id="tblCats" class="p-0 px1000">
                                      <thead>
                                        <th class="text-center bg-dark text-white px150">Category</th>
                                        <th class="text-center bg-dark text-white px100">Color</th>
                                      </thead>
                                      <tbody>
                                        <tr v-for="category in basecats" :key="category.CategoryId" class="p-0">
                                          <td>{{ category.CategoryText }}</td>
                                          <td><ejs-colorpicker :id="'picker_' + category.CategoryId" class="picker" :data-id="category.CategoryId" v-model="category.CategoryColor" v-on:change="onColorChange(category.CategoryId, category.CategoryColor)"></ejs-colorpicker></td>
                                        </tr>
                                        <tr>
                                          <td colspan="2">
                                            <div class="text-center">
                                              <ejs-button id="show-cat-dialog" cssClass="e-success" content="Add Category" v-on:click="handleit"></ejs-button>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id="instructions" style="display: none">INSTRUCTIONS</div>
                            <div id="errors" style="display: none">
                              <div>The following errors need to be resolved for full proper functionality.</div>
                            </div>
                            <ejs-tab heightAdjustMode="Auto" :showCloseButton="false">
                              <e-tabitems>
                                <e-tabitem :header="SettingsTab" content="#settings"></e-tabitem>
                                <e-tabitem :header="InstructionsTab" content="#instructions"></e-tabitem>
                                <e-tabitem :headerTemplate="'TabHeaderTemplate'" content="#errors">
                                  <template v-slot:TabHeaderTemplate="{}">
                                    <div style="position: relative; display: inline-block; margin: 10px">
                                      <div class="errortext">Errors</div>
                                      <span v-if="errorcount > 0" class="e-badge e-badge-danger e-badge-notification e-badge-circle">{{ errorcount }}</span>
                                    </div>
                                  </template>
                                </e-tabitem>
                              </e-tabitems>
                            </ejs-tab>
                          </div>
                          <div class="e-card-separator"></div>
                          <div class="e-card-actions">
                            <div class="container">
                              <div class="row">
                                <div class="col-2">
                                  <ejs-button id="save-settings" cssClass="e-success" content="Save" v-on:click="handleit"></ejs-button>
                                </div>
                                <div class="col-10">
                                  <ejs-textbox v-model="message"></ejs-textbox>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ejs-sidebar>
                  <div class="row">
                    <div class="main main-calendar px-0">
                      <ejs-schedule id="scheduler" ref="scheduleObj" height="920px" width="100%" cssClass="main-calendar" :quickInfoTemplates="quickInfoTemplates" :currentView="currentView" :popupOpen="onPopupOpen" :selectedDate="selectedDate" :eventSettings="eventSettings" :actionBegin="onActionBegin">
                        <e-views>
                          <e-view option="Day"></e-view>
                          <e-view option="WorkWeek" startHour="10:00" endHour="18:00"></e-view>
                          <e-view option="Month" showWeekend="false"></e-view>
                        </e-views>
                        <e-resources>
                          <e-resource field="CategoryId" ref="Categories" title="Categories" name="Categories" :allowMultiple="datatrue" :dataSource="basecats" textField="CategoryText" idField="CategoryId" colorField="CategoryColor"> </e-resource>
                        </e-resources>
                        <template v-slot:headerTemplate="{ data }">
                          <div class="quick-info-header">
                            <div class="quick-info-header-content" v-if="data.elementType == 'cell'" :style="{ 'align-items': 'center', color: '#919191' }">
                              <div class="quick-info-title">{{ getHeaderTitle(data) }}</div>
                              <div class="duration-text">{{ getHeaderDetails(data) }}</div>
                            </div>
                            <div class="quick-info-header-content" v-else :style="{ 'background-color': getHeaderStyles(data), color: '#FFFFFF' }">
                              <div class="quick-info-title">{{ getHeaderTitle(data) }}</div>
                              <div class="duration-text">{{ getHeaderDetails(data) }}</div>
                            </div>
                          </div>
                        </template>
                        <template v-slot:contentTemplate="{ data }">
                          <div class="quick-info-content">
                            <div class="e-cell-content" v-if="data.elementType === 'cell'">
                              <div class="quick-content-area">
                                <ejs-textbox ref="titleObj" id="title" placeholder="Title"></ejs-textbox>
                              </div>
                              <div class="quick-content-area">
                                <ejs-dropdownlist ref="eventTypeObj" id="eventType" :dataSource="basecats" :index="0" :fields="fields" popupHeight="200px" placeholder="Choose Category"></ejs-dropdownlist>
                              </div>
                              <div class="quick-content-area"><ejs-textbox ref="notesObj" id="notes" placeholder="Notes"></ejs-textbox></div>
                            </div>
                            <div class="event-content" v-else>
                              <div class="meeting-type-wrap">
                                <label>Subject</label>:<span>{{ data.Subject }}</span>
                              </div>
                              <div class="meeting-subject-wrap">
                                <label>Category</label>:<span>{{ getEventType(data) }}</span>
                              </div>
                              <div class="notes-wrap">
                                <label>Description</label>:<span>{{ data.Description }}</span>
                              </div>
                            </div>
                          </div>
                        </template>
                        <template v-slot:footerTemplate="{ data }">
                          <div class="quick-info-footer">
                            <div class="cell-footer" v-if="data.elementType === 'cell'">
                              <ejs-button id="more-details" cssClass="e-flat" content="More Details" v-on:click="buttonClickActions"></ejs-button>
                              <ejs-button id="add" cssClass="e-flat" content="Add" :isPrimary="true" v-on:click="buttonClickActions"></ejs-button>
                            </div>
                            <div class="event-footer" v-else>
                              <ejs-button id="delete" cssClass="e-flat" content="Delete" v-on:click="buttonClickActions"></ejs-button>
                              <ejs-button id="more-details" cssClass="e-flat" content="More Details" :isPrimary="true" v-on:click="buttonClickActions"></ejs-button>
                            </div>
                          </div>
                        </template>
                      </ejs-schedule>
                    </div>
                  </div>
                </div>
              </div>
              <div id="kanbantab" style="display: none">
                <div class="container-fluid">
                  <div class="row">
                    <div class="toolbar px-0">
                      <ejs-toolbar id="toolbar_kanban_options" height="50px" overflowMode="Scrollable" scrollStep="100" :clicked="onToolbarItemClicked">
                        <e-items>
                          <e-item prefixIcon="e-icons e-menu" tooltipText="Settings Menu" id="menukanban"></e-item>
                        </e-items>
                      </ejs-toolbar>
                    </div>
                  </div>
                  <ejs-sidebar id="sideKanban" class="sidebar" ref="sidebarKanban" width="290px" target=".main-kanban" type="Push" :isOpen="datafalse" :showBackdrop="datafalse" :enablePersistence="datafalse">
                    <div class="main-menu main-menu-kanban px-0">
                      <div>SIDEBAR STUFF HERE</div>
                    </div>
                  </ejs-sidebar>
                  <div class="row">
                    <div class="main main-kanban px-0">
                      <ejs-kanban id="kanban" keyField="Status" :dataSource="kanbanData" :cardSettings="cardSettings">
                        <e-columns>
                          <e-column headerText="To Do" keyField="Open"></e-column>
                          <e-column headerText="In Progress" keyField="InProgress"></e-column>
                          <e-column headerText="Done" keyField="Close"></e-column>
                        </e-columns>
                      </ejs-kanban>
                    </div>
                  </div>
                </div>
              </div>
              <div id="gantttab" style="display: none">
                <div class="container-fluid">
                  <div class="row">
                    <div class="toolbar px-0">
                      <ejs-toolbar id="toolbar_gantt_options" height="50px" overflowMode="Scrollable" scrollStep="100" :clicked="onToolbarItemClicked">
                        <e-items>
                          <e-item prefixIcon="e-icons e-menu" tooltipText="Settings Menu" id="menugantt"></e-item>
                        </e-items>
                      </ejs-toolbar>
                    </div>
                  </div>
                  <ejs-sidebar id="sideGantt" class="sidebar" ref="sidebarGantt" width="600px" target=".main-gantt" type="Push" :isOpen="datafalse" :showBackdrop="datafalse" :enablePersistence="datafalse">
                    <div class="main-menu main-menu-gantt px-0">
                      <div>SIDEBAR STUFF HERE</div>
                    </div>
                  </ejs-sidebar>
                  <div class="row">
                    <div class="main main-gantt px-0">GANTT</div>
                  </div>
                </div>
              </div>
              <ejs-tab id="tab" heightAdjustMode="Auto" :showCloseButton="false">
                <e-tabitems>
                  <e-tabitem :headerTemplate="'CalendarTemplate'" content="#calendartab">
                    <template v-slot:CalendarTemplate="{}">
                      <div style="position: relative; display: inline-block; margin: 10px">
                        <div class="tabtext">Calendar</div>
                      </div>
                    </template>
                  </e-tabitem>
                  <e-tabitem :headerTemplate="'KanbanTemplate'" content="#kanbantab">
                    <template v-slot:KanbanTemplate="{}">
                      <div style="position: relative; display: inline-block; margin: 10px">
                        <div class="tabtext">Kanban</div>
                      </div>
                    </template>
                  </e-tabitem>
                  <e-tabitem :headerTemplate="'GanttTemplate'" content="#gantttab">
                    <template v-slot:GanttTemplate="{}">
                      <div style="position: relative; display: inline-block; margin: 10px">
                        <div class="tabtext">Gantt</div>
                      </div>
                    </template>
                  </e-tabitem>
                </e-tabitems>
              </ejs-tab>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable vue/multi-word-component-names */
/* eslint-disable vue/no-unused-components */
import { Site } from '../interfaces/site'
import { List } from '../interfaces/list'
import { Event } from '../interfaces/event'
import { Category } from '../interfaces/category'
import { CalendarProps } from '../interfaces/properties'
import { defineComponent, Ref } from 'vue'
import axios from 'axios'
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-vue-kanban'
import { Internationalization, isNullOrUndefined, closest, extend } from '@syncfusion/ej2-base'
import { ScheduleComponent, Day, WorkWeek, Month, Agenda, DragAndDrop, Resize, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective, EJ2Instance, ResourcesModel } from '@syncfusion/ej2-vue-schedule'
import { ButtonComponent, SwitchComponent, CheckBoxComponent } from '@syncfusion/ej2-vue-buttons'
import { TextBoxComponent, ColorPickerComponent } from '@syncfusion/ej2-vue-inputs'
import { ToolbarComponent, ItemDirective, ItemsDirective, TabComponent, TabItemsDirective, TabItemDirective, SidebarComponent, AccordionComponent, AccordionItemsDirective, AccordionItemDirective } from '@syncfusion/ej2-vue-navigations'
import { TimePickerComponent, DatePickerComponent } from '@syncfusion/ej2-vue-calendars'
import { DialogUtility, DialogComponent } from '@syncfusion/ej2-vue-popups'
import { MultiSelectComponent, DropDownListComponent, MultiSelect, CheckBoxSelection } from '@syncfusion/ej2-vue-dropdowns'
MultiSelect.Inject(CheckBoxSelection)

var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')

var UUID = function () {
  var chars = CHARS,
    uuid: any = [],
    i: number
  var r: number
  uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
  uuid[14] = '4'
  for (i = 0; i < 36; i++) {
    if (!uuid[i]) {
      r = 0 | (Math.random() * 16)
      uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r]
    }
  }
  return uuid.join('')
}

let that: any

var slash = '/'
var tp1 = String(window.location.protocol)
var tp2 = String(window.location.host)

export default defineComponent({
  name: 'Kanban',
  components: {
    'ejs-kanban': KanbanComponent,
    'e-columns': ColumnsDirective,
    'e-column': ColumnDirective,
    'ejs-schedule': ScheduleComponent,
    'ejs-button': ButtonComponent,
    'ejs-checkbox': CheckBoxComponent,
    'ejs-toolbar': ToolbarComponent,
    'ejs-textbox': TextBoxComponent,
    'ejs-multiselect': MultiSelectComponent,
    'ejs-dropdownlist': DropDownListComponent,
    'ejs-sidebar': SidebarComponent,
    'ejs-tab': TabComponent,
    'ejs-dialog': DialogComponent,
    'ejs-colorpicker': ColorPickerComponent,
    'ejs-accordion': AccordionComponent,
    'e-accordionitems': AccordionItemsDirective,
    'e-accordionitem': AccordionItemDirective,
    'e-tabitems': TabItemsDirective,
    'e-tabitem': TabItemDirective,
    'e-items': ItemsDirective,
    'e-item': ItemDirective,
    'e-views': ViewsDirective,
    'e-view': ViewDirective,
    'e-resources': ResourcesDirective,
    'e-resource': ResourceDirective
  },
  props: {
    KanbanID: String
  },
  data() {
    return {
      refreshtimer: null,
      adding: false,
      editing: false,
      maintarget: '.left-panel',
      sidebartarget: '#sidebarsettings',
      apptarget: '#app',
      dialog: DialogUtility,
      digest: '',
      propslist: '',
      propsexist: false,
      itemtype: '',
      calprops: {
        Title: 'Calendar',
        Sites: new Array<Site>(),
        Lists: new Array<List>(),
        Categories: new Array<Category>()
      } as CalendarProps,
      basecats: [
        { CategoryText: 'Meeting', CategoryColor: '#ff0000', CategoryId: 1 },
        { CategoryText: 'Workshop', CategoryColor: '#88ee00', CategoryId: 2 },
        { CategoryText: 'Holiday', CategoryColor: '#ff88ee', CategoryId: 3 }
      ] as Array<Category>,
      catidcount: 3,
      idcount: 0,
      message: '',
      errorcount: 3,
      errors: new Array<any>(),
      settingserror: true,
      datatrue: true,
      datafalse: false,
      errorheader: '',
      addcategory: '',
      dockSize: '0px',
      badfields: ['ContentType', 'Attachments', 'Geolocation', 'fAllDayEvent', 'fRecurrence', 'ParticipantsPicker', 'Facilities', 'FreeBusy', 'Overbook', 'BannerUrl', 'BannerImageUrl'], // can't use for field mapping
      sitesSelected: new Array<any>(),
      events: new Array<Event>(),
      sitefields: { text: 'Title', value: 'WebId' },
      listfields: { text: 'Title', value: 'Url' },
      fieldfields: { text: 'Title', value: 'Title' },
      SettingsTab: { text: 'Settings' },
      InstructionsTab: { text: 'Setup Instructions' },
      intl: new Internationalization(),
      selectedDate: new Date(),
      currentView: 'Month',
      quickInfoTemplates: {
        header: 'headerTemplate',
        content: 'contentTemplate',
        footer: 'footerTemplate'
      },
      fields: { text: 'CategoryText', value: 'CategoryId' },
      eventSettings: {
        dataSource: new Array<any>()
      },
      kanbanData: [
        {
          Id: 1,
          Status: 'Open',
          Summary: 'Analyze the new requirements gathered from the customer.',
          Assignee: 'Andrew Fuller'
        },
        {
          Id: 2,
          Status: 'InProgress',
          Summary: 'The Quig is AWESOME',
          Assignee: 'The Quig'
        },
        {
          Id: 3,
          Status: 'InProgress',
          Summary: 'Improve application performance',
          Assignee: 'Andrew Fuller'
        },
        {
          Id: 4,
          Status: 'Close',
          Summary: 'Arrange a web meeting with the customer to get new requirements.',
          Assignee: 'Janet Leverling'
        }
      ],
      cardSettings: {
        contentField: 'Summary',
        headerField: 'Id'
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      that = this
      document.body.classList.add('bootstrap5')
      this.getDigest().then(function () {
        that.getSitesForUser().then(function () {
          that.gitRdone(that.KanbanID)
        })
      })
    })
  },
  methods: {
    async getDigest(): Promise<boolean> {
      const response = await axios.request({
        url: tp1 + slash + slash + tp2 + '/_api/contextinfo',
        method: 'POST',
        headers: { Accept: 'application/json; odata=verbose' }
      })
      this.digest = response.data.d.GetContextWebInformation.FormDigestValue
      // console.log('DIGEST: ' + this.digest)
      return true
    },
    async getSitesForUser(): Promise<boolean> {
      // get sites for user
      console.log('GETTING SITES')
      let url = tp1 + slash + slash + tp2 + slash + "_api/search/query?querytext='contentclass:STS_Site contentclass:STS_Web'"
      try {
        await axios
          .get(url, {
            headers: {
              accept: 'application/json;odata=verbose'
            }
          })
          .then((response) => {
            let data = response.data.d.query.PrimaryQueryResult.RelevantResults.Table.Rows.results
            let p: any[] = []
            for (let i = 0; i < data.length; i++) {
              var test = String(data[i].Cells.results[32].Value)
              if (test !== 'SPSPERS' && test !== 'APPCATALOG') {
                p.push({
                  Title: data[i].Cells.results[2].Value,
                  Url: data[i].Cells.results[5].Value,
                  Template: data[i].Cells.results[32].Value,
                  SiteId: data[i].Cells.results[45].Value,
                  WebId: data[i].Cells.results[46].Value,
                  isSelected: false
                })
              }
            }
            this.calprops.Sites = p
            console.log('USER SITES ADDED')
            // will sync with saved settings once setup is done at least one time
          })
      } catch (e) {
        // do nothing
        console.log('ERROR: ' + e)
      }
      return true
    },
    async getListsForSite(site: any, webid: any, sitetitle: any) {
      // console.log('GETTING LISTS...')
      site = String(site)
      webid = String(webid)
      let url = site
      if (site.length - 1 !== site.lastIndexOf('/')) {
        url = url + slash
      }
      url = url + '_api/web/lists'
      try {
        await axios
          .get(url, {
            headers: {
              accept: 'application/json;odata=verbose'
            }
          })
          .then((response) => {
            // console.log('GET LISTS RESPONSE: ' + response)
            let results = response.data.d.results
            for (let k = 0; k < results.length; k++) {
              let hidden = Boolean(results[k].Hidden)
              let catalog = Boolean(results[k].IsCatalog)
              let title = String(results[k].Title)
              // setup lists with default mappings
              if (!hidden && !catalog) {
                if (title.indexOf('WP-') < 0 && title.indexOf('Site Assets') < 0 && title.indexOf('Site Pages') < 0 && title.indexOf('Form Templates') < 0) {
                  this.calprops.Lists.push({
                    Site: sitetitle,
                    WebId: webid,
                    Title: title,
                    Url: site,
                    Id: String(results[k].Id),
                    FieldsUri: String(results[k].Fields.__deferred.uri),
                    Fields: {
                      Subject: 'Title',
                      StartTime: 'StartDate',
                      EndTime: 'EndDate',
                      Category: 'Category',
                      Recurrence: 'Recurrence',
                      Description: 'Description',
                      Location: 'Location'
                    },
                    ListFields: [],
                    Selected: false
                  })
                }
              }
            }
          })
      } catch (e) {
        // do nothing
        console.log('ERROR GETTINGS LISTS: ' + JSON.stringify(e))
      }
    },
    async createWPList(url: string, props: any, config: any): Promise<boolean> {
      const response = await axios.post(url, props, config)
      return true
    },
    async createWPListItem(url: string, itemtype: string): Promise<boolean> {
      const headers = {
        'Content-Type': 'application/json;odata=verbose',
        Accept: 'application/json;odata=verbose',
        'X-RequestDigest': that.digest,
        'X-HTTP-Method': 'POST'
      }
      const config = {
        headers: headers
      }
      let itemprops = {
        __metadata: {
          type: itemtype
        },
        Title: 'Entry'
      }
      const response = await axios.post(url, itemprops, config)
      console.log('INITIAL LIST ITEM CREATED')
      return true
    },
    async getWPListItem(url: string): Promise<boolean> {
      console.log('GET WPLISTITEM URL: ' + url)
      const response = await axios.get(url, {
        headers: {
          accept: 'application/json;odata=verbose'
        }
      })
      console.log('GETWPLISTITEM RESPONSE: ' + response)
      let j: any
      j = response.data.d.CalendarData
      if (j !== null) {
        console.log('PARSED RESPONSE: ' + j)
        this.calprops = JSON.parse(j)
        this.basecats = this.calprops.Categories
        for (let i = 0; i < this.calprops.Sites.length; i++) {
          if (this.calprops.Sites[i].isSelected) {
            this.sitesSelected.push(this.calprops.Sites[i].WebId)
          }
        }
        this.getEvents()
      }
      return true
    },
    async saveWPSettings(): Promise<void> {
      let title = 'WP-' + String(this.KanbanID)
      let url = tp1 + slash + slash + tp2 + slash + "_api/web/lists/getbytitle('" + title + "')/items(1)"
      const headers = {
        'Content-Type': 'application/json;odata=verbose',
        Accept: 'application/json;odata=verbose',
        'X-RequestDigest': this.digest,
        'X-HTTP-Method': 'MERGE',
        'If-Match': '*'
      }
      let config = {
        headers: headers
      }
      let rabbit = title.replaceAll('-', '')
      rabbit = 'SP.Data.' + rabbit + 'ListItem'
      this.calprops.Categories = this.basecats
      let savingprops = JSON.stringify(this.calprops)
      // console.log('SAVING PROPS: ' + savingprops)
      let itemprops = {
        __metadata: {
          type: rabbit
        },
        Title: 'Entry',
        CalendarData: savingprops
      }
      const response = await axios.post(url, itemprops, config)
      // console.log('WP LIST ITEM UPDATED: ' + response)
    },
    gitRdone: function (kanbanID: any) {
      // console.log('gitRdone CALLED')
      let msg: String = ''
      async function getPropsFromList(url: string): Promise<void> {
        await axios
          .get(url, {
            headers: {
              accept: 'application/json;odata=verbose'
            }
          })
          .catch(function (error) {
            if (error.response) {
              msg = String(error.response.data.error.message.value)
              if (msg) {
                console.log('ERROR: ' + msg)
                if (msg.indexOf('does not exist') > 1) {
                  // create the list for the webpart properties
                  const headers = {
                    'Content-Type': 'application/json;odata=verbose',
                    Accept: 'application/json;odata=verbose',
                    'X-RequestDigest': that.digest,
                    'X-HTTP-Method': 'POST'
                  }
                  const config = {
                    headers: headers
                  }
                  let itemprops = {
                    __metadata: {
                      type: 'SP.List'
                    },
                    BaseTemplate: 100,
                    Description: 'Web Part Properties List for Calendar Web Part ' + kanbanID,
                    Title: 'WP-' + kanbanID,
                    Id: kanbanID
                  }
                  let url = tp1 + slash + slash + tp2 + slash + '_api/web/lists'
                  that.createWPList(url, itemprops, config).then(() => {
                    let title = 'WP-' + String(kanbanID)
                    let url = tp1 + slash + slash + tp2 + slash + "_api/web/lists/getbytitle('" + title + "')/Fields"
                    let itemprops = {
                      __metadata: {
                        type: 'SP.Field'
                      },
                      Title: 'CalendarData',
                      StaticName: 'CalendarData',
                      FieldTypeKind: 3
                    }
                    axios.post(url, itemprops, config).then(function () {
                      let title = 'WP-' + String(kanbanID)
                      that.propslist = title
                      // Need to create the intial item. The Title will just be 'Entry' and we will not set any properties yet
                      // Since we do not know what the type name will be, we have to go get that before we can create an item
                      let url = tp1 + slash + slash + tp2 + slash + "_api/web/lists/getbytitle('" + title + "')/items"
                      let rabbit = title.replaceAll('-', '')
                      rabbit = 'SP.Data.' + rabbit + 'ListItem'
                      that.itemtype = rabbit
                      that.createWPListItem(url, rabbit)
                    })
                  })
                }
              }
            }
          })
          .then(function () {
            let title = 'WP-' + String(kanbanID)
            let url = tp1 + slash + slash + tp2 + slash + "_api/web/lists/getbytitle('" + title + "')/items(1)"
            that.getWPListItem(url)
          })
      }
      let title = 'WP-' + String(kanbanID)
      let gurl = tp1 + slash + slash + tp2 + slash + "_api/web/lists/getbytitle('" + title + "')"
      getPropsFromList(gurl)
    },
    onColorChange: function (id: number, color: string) {
      for (let i = 0; i < this.basecats.length; i++) {
        if (this.basecats[i].CategoryId === id) {
          this.basecats[i].CategoryColor === color
        }
      }
      let Schedule = this.$refs['scheduleObj'] as ScheduleComponent
      let instances = Schedule.ej2Instances
      instances.resources[0].dataSource = this.basecats
    },
    onActionBegin: function (args) {
      // let scheduleObj = this.$refs.ScheduleObj
      // console.log('ACTION BEGIN: ' + args)
      let scheduleObj = (this.$refs['scheduleObj'] as any).ej2Instances
      if (args.requestType === 'eventCreate' || args.requestType === 'eventChange') {
        let data
        if (args.requestType === 'eventCreate') {
          data = args.data[0]
          console.log('ADD EVENT: ' + data)
        } else if (args.requestType === 'eventChange') {
          data = args.data
          console.log('EDIT EVENT: ' + data)
        }
        if (!scheduleObj.isSlotAvailable(data.StartTime, data.EndTime)) {
          args.cancel = true
        }
      }
    },
    handleit: function (e: { target: HTMLElement }) {
      if (e.target.id === 'get-lists') {
        // clear existing lists to refresh
        this.calprops.Lists = new Array<List>() // Clear out the lists and recreate based on the sites selected as this might change
        // get lists for selected sites
        if (this.sitesSelected.length > 0) {
          // loop the sitesSelected and go get the lists for each one and add to lists array
          for (let i = 0; i < this.sitesSelected.length; i++) {
            for (let j = 0; j < this.calprops.Sites.length; j++) {
              if (this.sitesSelected[i] === this.calprops.Sites[j].WebId) {
                this.calprops.Sites[j].isSelected = true
                this.getListsForSite(this.calprops.Sites[j].Url, this.calprops.Sites[j].WebId, this.calprops.Sites[j].Title)
              }
            }
          }
        } else {
          alert('You must select at least one site.')
        }
      }
      if (e.target.id === 'save-settings') {
        // loop through the selected lists and get the events from those lists
        let goon = false
        for (let i = 0; i < this.calprops.Lists.length; i++) {
          if (this.calprops.Lists[i].Selected && this.calprops.Lists[i].Selected == true) {
            goon = true
          }
        }
        if (goon == true) {
          this.getEvents().then(() => {
            let Schedule = this.$refs['scheduleObj'] as ScheduleComponent
            Schedule.refreshEvents(false)
            Schedule.hideSpinner()
            that.saveWPSettings()
            ;(that.$refs.sidebarsettings as SidebarComponent).toggle()
          })
        } else {
          alert('No lists selected')
        }
      }
      if (e.target.id === 'show-cat-dialog') {
        ;(this.$refs.dlgCategory as DialogComponent).setProperties({ visible: true }, false)
        ;(this.$refs.dlgCategory as DialogComponent).show()
      }
      if (e.target.id === 'add-cat') {
        this.message = 'Adding Category ' + this.addcategory + '...'
        this.calprops.Categories.push({
          CategoryText: this.addcategory,
          CategoryId: this.catidcount + 1,
          CategoryColor: '#eeeeee'
        })
        this.catidcount += 1
        this.addcategorytolists()
        ;(this.$refs.dlgCategory as DialogComponent).hide()
      }
      if (e.target.id === 'close-cat') {
        ;(this.$refs.dlgCategory as DialogComponent).hide()
      }
    },
    onToolbarItemClicked: function (args: { item: { id: any } }) {
      let scheduleObj = (this.$refs['scheduleObj'] as any).ej2Instances
      switch (args.item.id) {
        case 'menukanban':
          ;(this.$refs.sidebarKanban as SidebarComponent).toggle()
          break

        case 'menucalendar':
          ;(this.$refs.sidebarCalendar as SidebarComponent).toggle()
          break

        case 'menugantt':
          ;(this.$refs.sidebarGantt as SidebarComponent).toggle()
          break

        case 'btnCalendarDay':
          scheduleObj.currentView = 'Day'
          break
        case 'btnCalendarWorkWeek':
          scheduleObj.currentView = 'WorkWeek'
          break
        case 'btnCalendarMonth':
          scheduleObj.currentView = 'Month'
          break
        case 'btnCalendarNew':
          alert('new event clicked')
          // const eventData = this.getEventData()
          // scheduleObj.openEditor(eventData, 'Add', true)
          break
        case 'btnCalendarNewRecurring':
          alert('add recurring event clicked')
          // const recEventData = this.getEventData()
          // scheduleObj.openEditor(recEventData, 'Add', true, 1)
          break
      }
    },
    onPopupOpen: function (args: any) {
      console.log('POPUP OPEN: ' + args)
      if ((args.type == 'QuickInfo' || args.type == 'ViewEventInfo') && !args.element.classList.contains('e-template')) {
        args.element.classList.add('e-template')
      }
      if (args.type == 'QuickInfo' && args.target && !args.target.classList.contains('e-appointment')) {
        const titleObj = (document.querySelector('#title') as HTMLElement as EJ2Instance).ej2_instances[0]
        titleObj.focusIn()
      }
      if (args.type === 'Editor') {
        args.cancel = true
        this.message = 'Open Form'
      }
    },
    getHeaderStyles: function (data: any) {
      let scheduleObj = (document.querySelector('.e-schedule') as HTMLElement as EJ2Instance).ej2_instances[0]
      let resources = scheduleObj.getResourceCollections()[0]
      let resourceData = resources.dataSource.filter((resource) => resource.CategoryId === data.CategoryId)[0]
      return resourceData.CategoryColor
    },
    getHeaderTitle: function (data: any) {
      return data.elementType === 'cell' ? 'Add Appointment' : 'Appointment Details'
    },
    getHeaderDetails: function (data: any) {
      return this.intl.formatDate(data.StartTime, { type: 'date', skeleton: 'full' }) + ' (' + this.intl.formatDate(data.StartTime, { skeleton: 'hm' }) + ' - ' + this.intl.formatDate(data.EndTime, { skeleton: 'hm' }) + ')'
    },
    getEventType: function (data: any) {
      let scheduleObj = (document.querySelector('.e-schedule') as HTMLElement as EJ2Instance).ej2_instances[0]
      let resources = scheduleObj.getResourceCollections()[0]
      let resourceData = resources.dataSource.filter((resource) => resource.CategoryId === data.CategoryId)[0]
      return resourceData.CategoryText
    },
    buttonClickActions: function (e: { target: HTMLElement }) {
      console.log('BUTTON CLICK: ' + e)
      const scheduleObj = document.querySelector('.e-schedule') as unknown as ScheduleComponent
      /* const quickPopup = closest(e.target, '.e-quick-popup-wrapper')
      const getSlotData = function () {
        const titleObj = quickPopup.querySelector('#title') as any
        const notesObj = quickPopup.querySelector('#notes') as any
        const eventTypeObj = quickPopup.querySelector('#eventType') as any
        let addObj = {} as any
        addObj.Id = scheduleObj.getEventMaxID()
        addObj.Subject = isNullOrUndefined(titleObj.value) ? 'Add title' : titleObj.value
        addObj.StartTime = new Date(scheduleObj.ej2Instances.activeCellsData.startTime)
        addObj.EndTime = new Date(scheduleObj.ej2Instances.activeCellsData.endTime)
        addObj.IsAllDay = scheduleObj.ej2Instances.activeCellsData.isAllDay
        addObj.Description = isNullOrUndefined(notesObj.value) ? 'Add notes' : notesObj.value
        addObj.RoomId = eventTypeObj.value
        return addObj
      } */
      if (e.target.id === 'add') {
        /* const addObj = getSlotData()
        scheduleObj.addEvent(addObj) */
        ;(this.$refs.dlgForm as DialogComponent).setProperties({ visible: true }, false)
        ;(this.$refs.dlgForm as DialogComponent).show()
      }
      if (e.target.id === 'delete') {
        const eventDetails = scheduleObj.ej2Instances.activeEventData.event
        let currentAction = 'Delete'
        if (eventDetails.RecurrenceRule) {
          currentAction = 'DeleteOccurrence'
        }
        // scheduleObj.deleteEvent(eventDetails, currentAction)
        // TODO: Setup delete action. Let user know
        this.message = 'Deleting Item...'
      }
      if (e.target.id === 'more-details') {
        // TODO: Get item details for editing if editing. Show form
        /* const isCellPopup = quickPopup.firstElementChild?.classList.contains('e-cell-popup')
        const eventDetails = isCellPopup ? getSlotData() : scheduleObj.ej2Instances.activeEventData.event
        let currentAction = isCellPopup ? 'Add' : 'Save'
        if (eventDetails.RecurrenceRule) {
          currentAction = 'EditOccurrence'
        } */
        // scheduleObj.openEditor(eventDetails, currentAction, true)
        ;(this.$refs.dlgForm as DialogComponent).setProperties({ visible: true }, false)
        ;(this.$refs.dlgForm as DialogComponent).show()
      }
      scheduleObj.closeQuickInfoPopup()
    },
    mapfields: function (e: { target: HTMLElement }) {
      let index = Number(e.target.attributes['data-index'].value)
      let list = this.calprops.Lists[index] as List
      console.log('TESTING: ' + list.Title)
      let button = String(e.target.attributes['data-button'].value)
      let buttonElement = document.getElementById(button) as HTMLElement
      buttonElement.classList.remove('e-danger')
      buttonElement.classList.add('e-warning')
      buttonElement.innerText = 'Getting Data'
      let tp1 = this.$refs['spinner' + index] as Ref
      let spinner = tp1[0] as HTMLDivElement
      spinner.style.visibility = 'visible'
      console.log('TEST POINT 1')
      let zebra = list.FieldsUri as string
      try {
        axios
          .get(zebra, {
            headers: {
              accept: 'application/json;odata=verbose'
            }
          })
          .then((response) => {
            let results = response.data.d.results
            let horse: any = []
            for (let k = 0; k < results.length; k++) {
              let hidden = Boolean(results[k].Hidden)
              let readonly = Boolean(results[k].ReadOnlyField)
              let name = String(results[k].InternalName)
              if (!hidden && !readonly) {
                if (this.badfields.indexOf(name) < 0) {
                  horse.push({ Title: name })
                }
              }
            }
            list.ListFields = horse
            buttonElement.innerText = 'Map Fields'
            buttonElement.classList.remove('e-warning')
            buttonElement.classList.add('e-success')
            spinner.style.visibility = 'hidden'
          })
      } catch (e) {
        // don't care
      }
    },
    addfield: function (list: List, index: number, field: string) {
      // add the field to the dropdown
      // add the field to the SharePoint list TODO: Do we really need to wait for it?
      list.ListFields?.push({ Title: field })
      // Will name the field a default name and use that to determine the field type to add to the list
      switch (field) {
        case 'Description': {
          // add field
          break
        }
        case 'Location': {
          // add field
          break
        }
        case 'StartDate': {
          // add field
          break
        }
        case 'EndDate': {
          // add field
          break
        }
        case 'StartTime': {
          // add field
          break
        }
        case 'EndTime': {
          // add field
          break
        }
        case 'Recurrence': {
          // add field
          break
        }
        case 'Category': {
          // add field
          break
        }
      }
    },
    async addcategorytolists(): Promise<void> {
      async function addCategoryToList(url: string, list: List): Promise<void> {
        console.log('ADD CAT URL: ' + url)
        // We have to get the existing categories first
        await axios
          .get(url, {
            headers: {
              accept: 'application/json;odata=verbose'
            }
          })
          .then((response) => {
            // get the existing categories
            let cats: any = []
            cats = response.data.d.Choices.results
            cats.push(that.addcategory)
            let headers = {
              'Content-Type': 'application/json;odata=verbose',
              Accept: 'application/json;odata=verbose',
              'X-RequestDigest': that.digest,
              'X-HTTP-Method': 'PATCH',
              'If-Match': '*'
            }
            let config = {
              headers: headers
            }
            let itemprops = {
              __metadata: {
                type: 'SP.FieldChoice'
              },
              Choices: {
                results: cats
              }
            }
            axios.post(url, itemprops, config)
            that.message = ''
          })
      }
      // loop through the lists and add the category to the category field
      for (let i = 0; i < this.calprops.Lists.length; i++) {
        if (this.calprops.Lists[i].Selected && this.calprops.Lists[i].Selected == true) {
          let catfield = this.calprops.Lists[i].Fields.Category
          let url = String(this.calprops.Lists[i].Url)
          if (url.length - 1 !== url.lastIndexOf('/')) {
            url = url + slash
          }
          url = url + "_api/lists/getbytitle('" + this.calprops.Lists[i].Title + "')/fields/getbytitle('" + catfield + "')"
          addCategoryToList(url, this.calprops.Lists[i])
        }
      }
    },
    async getEvents(): Promise<boolean> {
      /* ;(this.$refs.dlgSpinner as DialogComponent).setProperties({ visible: true }, false)
      ;(this.$refs.dlgSpinner as DialogComponent).show() */
      this.events = []
      let j: any[] = []
      let Schedule = this.$refs['scheduleObj'] as ScheduleComponent
      // clear existing events
      let events = Schedule.getEvents()
      for (let c = 0; c < events.length; c++) {
        Schedule.deleteEvent(events[c])
      }
      async function getAllEvents(url: string, list: List): Promise<void> {
        console.log('GETALLEVENTS: ' + url)
        await axios
          .get(url, {
            headers: {
              accept: 'application/json;odata=verbose'
            }
          })
          .then((response) => {
            console.log('GET EVENTS RESPONSE: ' + response)
            if (response.data.d.results && response.data.d.results.length > 0) {
              j = j.concat(response.data.d.results)
              if (response.data.d.__next) {
                url = response.data.d.__next
                return getAllEvents(url, list)
              } else {
                // Now we have all events for this list
                // loop events here to add to the events array and the Calendar. Currently duplicating effort as the events array does not seem to work for the dataSource of the Calendar.
                // Keeping the events list and calendar separate is good here so we can kkep track of changes.
                if (j && j.length > 0) {
                  for (let a = 0; a < j.length; a++) {
                    // check category exists and add if not
                    let cat = String(j[a][list.Fields.Category])
                    let exists = false
                    let catid = 0
                    for (let b = 0; b < that.basecats.length; b++) {
                      let text = String(that.basecats[b].CategoryText)
                      if (text === cat) {
                        exists = true
                        catid = that.basecats[b].CategoryId
                      }
                    }
                    if (exists === false) {
                      that.basecats.push({
                        CategoryId: that.catidcount + 1,
                        CategoryText: cat,
                        CategoryColor: '#eeeeee'
                      })
                      that.catidcount += 1
                    }
                    // add event
                    let start = new Date(j[a][list.Fields.StartTime])
                    let end = new Date(j[a][list.Fields.EndTime])
                    let guid = String(UUID())
                    try {
                      that.idcount += 1
                      that.events.push({
                        Id: that.idcount, // Fake Id as this is a required field of Scheduler but we don't need the event ID as we have the uri
                        Subject: String(j[a][list.Fields.Subject]),
                        Description: String(j[a][list.Fields.Description]),
                        StartTime: start, // will address start time later
                        EndTime: end,
                        Location: String(j[a][list.Fields.Location]),
                        Category: String(j[a][list.Fields.Category]),
                        CategoryId: catid,
                        guid: guid,
                        etag: String(j[a]['__metadata']['etag']),
                        uri: String(j[a]['__metadata']['uri']),
                        type: String(j[a]['__metadata']['type'])
                      })
                      Schedule.addEvent({
                        Id: that.idcount,
                        Subject: String(j[a][list.Fields.Subject]),
                        Description: String(j[a][list.Fields.Description]),
                        StartTime: start,
                        EndTime: end,
                        Location: String(j[a][list.Fields.Location]),
                        Category: String(j[a][list.Fields.Category]),
                        CategoryId: catid,
                        guid: guid,
                        etag: String(j[a]['__metadata']['etag']),
                        uri: String(j[a]['__metadata']['uri']),
                        type: String(j[a]['__metadata']['type'])
                      })
                    } catch (e) {
                      // not gonna do it
                    }
                  }
                }
              }
            }
            // ;(that.$refs.dlgSpinner as DialogComponent).hide()
          })
      }
      for (let i = 0; i < this.calprops.Lists.length; i++) {
        if (this.calprops.Lists[i].Selected && this.calprops.Lists[i].Selected == true) {
          // call inside async function to get all events from each list
          // build url
          let url = String(this.calprops.Lists[i].Url)
          if (url.length - 1 !== url.lastIndexOf('/')) {
            url = url + slash
          }
          url = url + "_api/lists/getbytitle('" + this.calprops.Lists[i].Title + "')/items?$select=*"
          getAllEvents(url, this.calprops.Lists[i])
        }
      }
      return true
    }
  },
  provide: {
    schedule: [Day, WorkWeek, Month, DragAndDrop, Resize]
  }
})
</script>

<style>
#kanbanapp {
  max-height: 1004px;
  height: 1004px;
  border: 2px solid red;
}

.e-tab .e-content {
  min-height: 820px;
}

.e-card .e-card-content {
  padding: 0 !important;
}

.main {
  min-height: 1000px;
  border: 1px solid black;
}

.e-sidebar {
  left: 1.5rem;
  height: 918px !important;
  /* border: 1px solid black; */
}

#tab {
  padding: 0 !important;
  min-height: 1000px !important;
}

.main-calendar .overview-toolbar {
  display: flex;
  height: 50px;
}

.main-calendar .overview-toolbar .e-toolbar {
  border-radius: 0;
}

.main-calendar .overview-toolbar .e-toolbar .e-toolbar-item .e-tbar-btn.e-tbtn-txt {
  display: inline-grid;
}

.main-calendar .overview-toolbar .e-toolbar .e-toolbar-item.e-template {
  margin: 0 5px;
}

.main-calendar .overview-toolbar .overview-toolbar-settings {
  border-radius: 0;
  background-color: #f8f9fa;
  border-color: rgba(0, 0, 0, 0.15);
  border-left-width: 0;
  border-top-width: 0;
  box-shadow: none;
  color: #495057;
  height: 72px;
  line-height: 1.6;
  outline: none;
  text-transform: capitalize;
  width: 100%;
}

.main-calendar .overview-content {
  border: 1px solid #00000026;
  border-top: 0;
  display: flex;
}

.main-calendar .overview-content .left-panel {
  height: 1000px;
  width: 100%;
}

.main-calendar .overview-content .right-panel {
  display: block;
  height: 1000px;
  transform: translateX(0%);
  transition: transform 1.5s ease, width 1500ms;
  width: 800px;
}

.main-calendar .overview-content .right-panel.hide {
  display: none;
  transform: translateX(100%);
  transition: transform 0.5s ease, width 500ms;
  width: 0;
}

.main-calendar .overview-content .right-panel .control-panel {
  background: #f8f9fa;
  border-left: 1px solid #00000026;
  font-size: 14px;
  height: 100%;
  overflow: auto;
  padding: 15px;
  width: 100%;
}

.main-calendar .overview-content .right-panel .control-panel .col-row {
  display: flex;
  flex-wrap: wrap;
}

.main-calendar .overview-content .right-panel .control-panel label {
  font-weight: 500;
}

.main-calendar .overview-content .right-panel .control-panel .col-left {
  flex: 0 0 41.666667%;
  max-width: 41.666667%;
  margin-bottom: 1rem;
}

.main-calendar .overview-content .right-panel .control-panel .col-right {
  flex: 0 0 58.333333%;
  max-width: 58.333333%;
  margin-bottom: 1rem;
}

.main-calendar .overview-scheduler {
  height: 100%;
  padding: 10px;
  width: 100%;
}

.main-calendar .e-schedule .e-vertical-view .e-header-cells {
  text-align: center !important;
}

.main-calendar .e-schedule .date-text {
  font-size: 14px;
}

.main-calendar .e-schedule.e-device .date-text {
  font-size: 12px;
}

.main-calendar .e-schedule .weather-image {
  width: 20px;
  height: 20px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.main-calendar .e-schedule .weather-text {
  font-size: 11px;
}

.main-calendar .e-schedule-toolbar .e-views,
.main-calendar .e-schedule-toolbar .e-schedule-seperator,
.schedule-workweek.e-multi-select-list-wrapper.e-checkbox .e-filter-parent,
.schedule-resource.e-multi-select-list-wrapper.e-checkbox .e-filter-parent {
  display: none !important;
}

.main-calendar .e-timeline-view .e-resource-left-td,
.main-calendar .e-timeline-month-view .e-resource-left-td {
  width: 120px;
}

.schedule-resource.e-multi-select-list-wrapper.e-checkbox .e-list-parent:first-child li:first-child {
  background-image: none;
  opacity: 0.5;
  pointer-events: none;
  user-select: none;
}

.main-calendar .quick-info-header {
  background-color: white;
  padding: 8px 18px;
}

.main-calendar .quick-info-header-content {
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
  padding: 5px 10px 5px;
}

.main-calendar .quick-info-title {
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.48px;
  height: 22px;
}

.main-calendar .duration-text {
  font-size: 11px;
  letter-spacing: 0.33px;
  height: 14px;
}

.main-calendar .content-area {
  padding: 10px;
  width: auto;
  margin: unset;
}

.main-calendar .event-content {
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;
}

.main-calendar .meeting-type-wrap,
.main-calendar .meeting-subject-wrap,
.main-calendar .notes-wrap {
  font-size: 11px;
  color: #666;
  letter-spacing: 0.33px;
  height: 24px;
  padding: 5px;
  display: flex;
}

.main-calendar .event-content div label {
  display: inline-block;
  min-width: 45px;
  color: #666;
}

.main-calendar .event-content div span {
  font-size: 11px;
  color: #151515;
  letter-spacing: 0.33px;
  line-height: 14px;
  padding-left: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.main-calendar .cell-footer.e-btn {
  background-color: #ffffff;
  border-color: #878787;
  color: #878787;
}

.main-calendar .cell-footer {
  padding-top: 10px;
}

.main-calendar .e-quick-popup-wrapper.e-template .e-cell-popup .e-popup-content {
  padding: 0 14px;
}

.main-calendar .e-quick-popup-wrapper.e-template .e-event-popup .e-popup-footer {
  display: block;
}

.main-calendar .e-quick-popup-wrapper.e-template .e-popup-footer button:first-child {
  margin-right: 5px;
}

.main-calendar .calendar-import.e-upload {
  border: 0;
  padding-left: 0 !important;
}

.main-calendar .calendar-import.e-upload .e-file-select-wrap {
  padding: 0;
}

.main-calendar .calendar-import.e-upload .e-file-select-wrap .e-file-drop,
.calendar-import .e-upload-files {
  display: none;
}

.main-calendar .quick-info-header {
  background-color: white;
  padding: 8px 18px;
}

.main-calendar .content-area {
  padding: 10px;
  width: 100%;
}

.e-bigger .schedule-context-menu ul .e-menu-item .e-menu-icon {
  font-size: 14px;
}

.schedule-context-menu ul .e-menu-item .e-menu-icon {
  font-size: 12px;
}

.main-calendar.e-schedule .e-vertical-view .e-header-cells,
.main-calendar.e-schedule .e-timeline-month-view .e-header-cells {
  padding: 0;
  text-align: center !important;
}

.main-calendar.e-schedule .date-text {
  font-size: 14px;
}

.main-calendar.e-schedule.e-device .date-text {
  font-size: 12px;
}

.main-calendar.e-schedule .weather-image {
  width: 20px;
  height: 20px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.main-calendar.e-schedule .weather-text {
  font-size: 11px;
}

.main-calendar.e-schedule .e-month-view .weather-image {
  float: right;
  margin: -20px 2px 0 0;
  width: 20px;
  height: 20px;
}

.main-calendar .overview-toolbar .e-toolbar .e-toolbar-item .e-tbar-btn.e-btn {
  height: 50px !important;
}

.main-calendar .overview-toolbar .e-toolbar .e-toolbar-item:not(.e-separator) {
  padding: 3.5px;
}

.main-calendar .overview-toolbar .e-toolbar .e-toolbar-item .e-tbar-btn {
  padding: 1.5px;
}

.e-bigger .main-calendar .overview-toolbar .e-toolbar .e-toolbar-item:not(.e-separator) {
  padding: 5px;
}

.e-bigger .main-calendar .overview-toolbar .e-toolbar .e-toolbar-item .e-tbar-btn {
  padding: 6px;
}

.main-calendar .overview-toolbar .e-toolbar .e-toolbar-item .e-btn.e-tbar-btn .e-icons.e-btn-icon,
.main-calendar .overview-toolbar .e-toolbar .e-toolbar-item .e-btn.e-tbar-btn .e-tbar-btn-text {
  line-height: 23px !important;
  min-height: 23px !important;
  padding: 0px !important;
}

.main-calendar .overview-toolbar .e-toolbar .e-toolbar-item.e-template .icon-child {
  height: 23px !important;
}

.main-calendar .overview-toolbar .e-toolbar .e-toolbar-item.e-template .text-child {
  line-height: 23px !important;
}

.bootstrap5 .main-calendar .overview-toolbar .overview-toolbar-settings,
.bootstrap5 .main-calendar .overview-content .right-panel .control-panel {
  background-color: #f8f9fa;
  color: #212529;
  font-weight: 400;
}

.bootstrap5 .main-calendar .overview-toolbar .overview-toolbar-settings:focus {
  background-color: #5c636a;
  color: #fff;
}

.bootstrap5 .main-calendar .overview-toolbar .e-toolbar {
  border: 1px solid #dee2e6;
}

.bootstrap5 .main-calendar .overview-toolbar .overview-toolbar-settings {
  border-color: #dee2e6;
}

.main-calendar .quick-info-template .quick-info-header {
  background-color: white;
  padding: 8px 18px;
}

.main-calendar .quick-info-template .quick-info-header-content {
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
  padding: 5px 10px 5px;
}

.main-calendar .quick-info-template .quick-info-title {
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.48px;
  height: 22px;
}

.main-calendar .quick-info-template .duration-text {
  font-size: 11px;
  letter-spacing: 0.33px;
  height: 14px;
}

.main-calendar .quick-info-template .quick-content-area {
  margin: 0;
  padding: 10px;
  width: auto;
}

.main-calendar .quick-info-template .event-content {
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;
}

.main-calendar .quick-info-template .meeting-type-wrap,
.main-calendar .quick-info-template .meeting-subject-wrap,
.main-calendar .quick-info-template .notes-wrap {
  font-size: 11px;
  color: #666;
  letter-spacing: 0.33px;
  height: 24px;
  padding: 5px;
}

.main-calendar .quick-info-template .event-content div label {
  display: inline-block;
  min-width: 45px;
  color: #666;
}

.main-calendar .quick-info-template .event-content div span {
  font-size: 11px;
  color: #151515;
  letter-spacing: 0.33px;
  line-height: 14px;
  padding-left: 8px;
}

.main-calendar .quick-info-template .cell-footer.e-btn {
  background-color: #ffffff;
  border-color: #878787;
  color: #878787;
}

.main-calendar .quick-info-template .cell-footer {
  padding-top: 10px;
}

.quick-info-template .e-template.e-quick-popup-wrapper .e-cell-popup .e-popup-content {
  padding: 0 14px;
}

.quick-info-template .e-template.e-quick-popup-wrapper .e-event-popup .e-popup-footer {
  display: block;
}

.quick-info-template .e-template.e-quick-popup-wrapper .e-popup-footer button:first-child {
  margin-right: 5px;
}

.quick-info-header {
  background-color: white;
  padding: 8px 18px;
}

.quick-info-header-content {
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
  padding: 5px 10px 5px;
}

.quick-info-title {
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.48px;
  height: 22px;
}

.duration-text {
  font-size: 11px;
  letter-spacing: 0.33px;
  height: 14px;
}

.event-content {
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;
}

.meeting-type-wrap,
.meeting-subject-wrap,
.notes-wrap {
  font-size: 11px;
  color: #666;
  letter-spacing: 0.33px;
  height: 24px;
  padding: 5px;
}

.event-content div label {
  display: inline-block;
  min-width: 45px;
  color: #666;
}

.event-content div span {
  font-size: 11px;
  color: #151515;
  letter-spacing: 0.33px;
  line-height: 14px;
  padding-left: 8px;
}

.cell-footer.e-btn {
  background-color: #ffffff;
  border-color: #878787;
  color: #878787;
}

.cell-footer {
  padding-top: 10px;
}

.dark .quick-info-template .quick-info-header {
  background-color: transparent;
}

.dark .quick-info-template .quick-info-header-content {
  color: #fff !important;
}

.dark .quick-info-template .event-content div label {
  color: #fff;
}

.e-tab .e-content .e-item {
  font-size: 12px;
  padding: 10px;
  text-align: justify;
}

.e-badge.e-badge-notification {
  top: 0 !important;
  margin-left: 3px;
}

.e-accordion .e-acrdn-item .e-acrdn-header {
  border-radius: 0;
  line-height: 22px !important;
  min-height: 22px !important;
  overflow: hidden;
  padding: 3px !important;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 4px;
}

.e-accordion .e-acrdn-item .e-acrdn-panel .e-acrdn-content {
  line-height: 1.5;
  overflow: hidden;
  padding: 5px !important;
  text-overflow: ellipsis;
}

.mappedlistfield {
  display: flex;
  justify-content: space-between;
}

.e-sidebar {
  overflow: hidden;
}

.overview-content .e-card .e-card-content {
  font-size: 14px;
  line-height: 1.5;
  padding: 0 !important;
  min-height: 850px !important;
}

.e-tab .e-content .e-item {
  padding: 0;
  text-align: justify;
}

.e-dropdownbase .e-ul {
  background-color: '#cccccc';
}
</style>
