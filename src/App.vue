<script lang="ts">
import { defineComponent, ComponentPublicInstance } from 'vue'
import * as WebpartProperties from './lib/WebpartProperties'
import Kanban from './components/Kanban.vue'

interface ICompData {
  heading: string
  description: string
  list: string
}

export default defineComponent({
  name: 'App',
  components: { Kanban },
  data() {
    return {
      heading: '',
      description: '',
      list: ''
    } as ICompData
  },
  mounted() {
    this.setPropertiesFromWebpart()
  },
  methods: {
    setPropertiesFromWebpart() {
      this.heading = WebpartProperties.getPropertyString(this.$root as ComponentPublicInstance, 'heading')
      this.description = WebpartProperties.getPropertyString(this.$root as ComponentPublicInstance, 'description')
      this.list = WebpartProperties.getInstanceId(this.$root as ComponentPublicInstance)
    },
    getInstance() {
      return WebpartProperties.getInstanceId(this.$root as ComponentPublicInstance)
    }
  }
})
</script>

<template>
  <div id="kanbanapp">
    <Kanban :KanbanID="list" />
  </div>
</template>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css';
@import '../node_modules/@syncfusion/ej2-icons/styles/bootstrap5.css';
@import '../node_modules/@syncfusion/ej2-vue-layouts/styles/bootstrap5.css';
@import '../node_modules/@syncfusion/ej2-vue-buttons/styles/bootstrap5.css';
@import '../node_modules/@syncfusion/ej2-vue-splitbuttons/styles/bootstrap5.css';
@import '../node_modules/@syncfusion/ej2-vue-calendars/styles/bootstrap5.css';
@import '../node_modules/@syncfusion/ej2-vue-kanban/styles/bootstrap5.css';
@import '../node_modules/@syncfusion/ej2-vue-gantt/styles/bootstrap5.css';
@import '../node_modules/@syncfusion/ej2-vue-dropdowns/styles/bootstrap5.css';
@import '../node_modules/@syncfusion/ej2-vue-inputs/styles/bootstrap5.css';
@import '../node_modules/@syncfusion/ej2-vue-popups/styles/bootstrap5.css';
@import '../node_modules/@syncfusion/ej2-vue-schedule/styles/bootstrap5.css';
@import '../node_modules/@syncfusion/ej2-vue-notifications/styles/bootstrap5.css';
@import '../node_modules/@syncfusion/ej2-vue-navigations/styles/bootstrap5.css';
</style>
