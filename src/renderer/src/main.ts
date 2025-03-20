import './assets/main.css'
import '@vue-flow/core/dist/style.css'
import '@vue-flow/core/dist/theme-default.css'
import VueDraggableResizable from 'vue-draggable-resizable'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.component("vue-draggable-resizable", VueDraggableResizable)
app.mount('#app')
