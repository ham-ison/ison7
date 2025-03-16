import { useStore } from '../../store';
import { Node } from './types';

export default function NodesPanel() {
  // 明确指定 state 的类型为 { addNode: any }，这里假设 addNode 是一个函数，你可以根据实际情况修改
  const addNode = useStore((state: { addNode: any }) => state.addNode);
  
  return (
    <div className="w-64 p-4 bg-gray-50 border-r">
      <div 
        className="p-3 mb-2 bg-white rounded shadow cursor-move"
        draggable
        onDragStart={(e) => e.dataTransfer.setData('reactflow/node', JSON.stringify({
          type: 'input',
          data: { label: '开始节点' },
          position: { x: 0, y: 0 }
        }))}
      >
        <div className="flex items-center">
          <span className="mr-2">⭕</span>
          输入节点
        </div>
      </div>
      <div 
        className="p-3 mb-2 bg-blue-50 rounded shadow cursor-move"
        draggable
        onDragStart={(e) => e.dataTransfer.setData('reactflow/node', JSON.stringify({
          type: 'output',
          data: { label: '结束节点' },
          position: { x: 0, y: 0 }
        }))}
      >
        <div className="flex items-center">
          <span className="mr-2">✅</span>
          输出节点
        </div>
      </div>
      <div 
        className="p-3 mb-2 bg-white rounded shadow cursor-move"
        draggable
        onDragStart={(e) => e.dataTransfer.setData('reactflow/node', JSON.stringify({
          type: 'default',
          data: { label: '新节点' },
          position: { x: 0, y: 0 }
        }))}
      >
        <div className="flex items-center">
          <span className="mr-2">⚙️</span>
          处理节点
        </div>
      </div>
    </div>
  );
}