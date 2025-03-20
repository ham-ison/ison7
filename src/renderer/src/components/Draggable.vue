<template>
  <div style="height: 200px; width: 500px; border: 1px solid red; position: relative;">
    <vue-draggable-resizable :w="200" :h="100" :parent="true">
      <p>It's a flexible component. You can drag me around and you can resize me.</p>
    </vue-draggable-resizable>
  </div>
</template>
<style>
@import "vue-draggable-resizable/style.css";
</style>