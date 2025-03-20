<template>
  <vue-flow
    :nodes="nodes"
    :edges="edges"
    @node:click="onNodeClick"
    style="width: 100%; height: 100vh;">
    <MiniMap />
  </vue-flow>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { VueFlow } from '@vue-flow/core';
import { MiniMap } from '@vue-flow/additional-components';
import '@vue-flow/core/dist/style.css';


const nodes = ref([
  { id: '1', label: '开始', position: { x: 250, y: 5 }, type: 'input' },
  { id: '2', label: '处理', position: { x: 250, y: 150 } },
  { id: '3', label: '结束', position: { x: 250, y: 300 }, type: 'output' },
]);

const edges = ref([
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
]);

const onNodeClick = (node: any) => {
  console.log('节点被点击:', node);
};
</script>
