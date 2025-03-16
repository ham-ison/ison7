import { useState, useEffect } from 'react';
import { ReactFlow, Background, Controls } from 'reactflow';
import { useStore } from '../../store';

export default function WorkflowEditor() {
  const [nodes] = useState([
    {
      id: '1',
      position: { x: 0, y: 0 },
      data: { label: '开始节点' },
      type: 'input'
    }
  ]);
  const [edges] = useState([]);
  // 自动布局函数
  const applyLayout = () => {
    const dagre = require('dagre');
    const graph = new dagre.graphlib.Graph();
    graph.setGraph({ rankdir: 'LR', nodesep: 50, ranksep: 70 });

    nodes.forEach(node => {
      graph.setNode(node.id, { width: 200, height: 50 });
    });

    edges.forEach(edge => {
// 根据错误信息，问题出在 `edge` 的类型上，`edge` 被推断为 `never` 类型，导致无法访问其 `target` 和 `source` 属性。
// 这里推测 `edges` 的类型定义可能有问题，需要确保 `edges` 数组中的元素类型包含 `source` 和 `target` 属性。
// 假设 `edges` 数组中的元素类型为 `{ source: string; target: string }`，以下是修改后的代码：
edges.forEach((edge: { source: string; target: string }) => {
  graph.setEdge(edge.source, edge.target);
});
    });

    dagre.layout(graph);

    const layoutedNodes = nodes.map(node => ({
      ...node,
      position: {
        x: graph.node(node.id).x,
        y: graph.node(node.id).y
      }
    }));

    // 确保类型兼容，将 type 明确为 "input"
    const typedLayoutedNodes = layoutedNodes.map(node => ({
      ...node,
      type: "input" as const
    }));
    useStore.setState({ nodes: typedLayoutedNodes });
  };

  useEffect(() => {
    applyLayout();
  }, [nodes, edges]);

  return (
    <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        className="bg-white"
        onNodesChange={useStore.getState().onNodesChange}
        onEdgesChange={useStore.getState().onEdgesChange}
      >
        <Background />
        <Controls />
      </ReactFlow>
  );
}