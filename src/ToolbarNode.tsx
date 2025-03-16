import { memo, useState } from 'react';
import { Handle, Position, NodeToolbar, NodeProps } from '@xyflow/react';
import React from 'react';

const emojis = ['🚀', '🔥', '✨'];

// 为了满足约束，我们可以扩展 ToolbarNodeData 以包含必要的属性
export type ToolbarNodeData = {
  label?: string;
  id: string;
  position: { x: number; y: number };
  data: Record<string, unknown>;
  sourcePosition?: Position;
  targetPosition?: Position;
  width?: number;
  height?: number;
  selected?: boolean;
  dragging?: boolean;
};

export type ToolbarNodeProps = NodeProps<ToolbarNodeData>;

function ToolbarNode({ data }: ToolbarNodeProps) {
  const [emoji, setEmoji] = useState('🚀');

  return (
    <>
      <NodeToolbar>
        <div style={{display: 'flex'}}>
          {emojis.map((e) => (
            <button key={e} onClick={() => setEmoji(e)}>
              {e}
            </button>
          ))}
        </div>
      </NodeToolbar>
      <div style={{padding: '10px 20px', border: '1px solid #ddd', background: '#fff', borderRadius: '4px'}}>
        {data && typeof data === 'object' && 'label' in data ? (typeof data.label === 'string' ? data.label : '') : ''}
        <Handle type="source" position={Position.Right} className="custom-handle" />
      </div>
    </>
  );
}

export default memo(ToolbarNode) as React.ComponentType<NodeProps>;
