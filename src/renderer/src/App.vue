<script setup lang="ts">
import Versions from './components/Versions.vue'
import Draggable from './components/Draggable.vue'
import VueFlow from './components/VueFlow.vue'
import FlowEditor from './components/FlowEditor.vue'

const ipcHandle = () => window.electron.ipcRenderer.send('ping')
</script>

<template>
  <div class="actions">
    <img alt="logo" class="logo" src="./assets/ison7-logo.svg" />
    <div class="action">
      <a href="https://ham-ison.github.io/" target="_blank" rel="noreferrer">HAM's Notes</a>
    </div>
    <div class="action">
      <a target="_blank" rel="noreferrer" @click="ipcHandle">Let's Go Start</a>
    </div>
  </div>
  <Draggable />
  <FlowEditor />
  <Versions />
  <div class="creator">Powered by HAM</div>
  <p class="tip">Please try pressing <code>F12</code> to open the devTool</p>
</template>
