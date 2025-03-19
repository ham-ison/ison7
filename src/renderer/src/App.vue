<script setup lang="ts">
import Versions from './components/Versions.vue'

const ipcHandle = () => window.electron.ipcRenderer.send('ping')
</script>

<template>
  <img alt="logo" class="logo" src="./assets/ison7-logo.svg" />
  <div class="creator">Powered by HAM</div>
  <p class="tip">Please try pressing <code>F12</code> to open the devTool</p>
  <div class="actions">
    <div class="action">
      <a href="https://ham-ison.github.io/" target="_blank" rel="noreferrer">HAM's Notes</a>
    </div>
    <div class="action">
      <a target="_blank" rel="noreferrer" @click="ipcHandle">Let's Go Start</a>
    </div>
  </div>
  <Versions />
</template>
