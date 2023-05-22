import { createApp } from 'vue'

import App from './App.vue'
import { registerLicense } from '@syncfusion/ej2-base'
import './assets/main.scss'

var kanbanapp = createApp(App)

declare module 'pinia' {
  export interface MapStoresCustomization {
    suffix: ''
  }
}

registerLicense('ORg4AjUWIQA/Gnt2VFhhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5XdEFiXHpecXJWT2dc')
kanbanapp.mount('#Vue3Kanban')
