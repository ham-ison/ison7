import './assets/main.css'
import VueDraggableResizable from 'vue-draggable-resizable'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.component("vue-draggable-resizable", VueDraggableResizable)
app.mount('#app')
