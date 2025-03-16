import React, { Fragment, memo } from 'react';
import { Handle, useStore, Position, useReactFlow } from '@xyflow/react';

const dimensionAttrs = ['width', 'height'];

// 为组件的 props 定义类型，明确包含 id 属性
interface TextInputNodeProps {
  id: string;
}

export default memo(({ id }: TextInputNodeProps) => {
  const { setNodes } = useReactFlow();
  const dimensions = useStore((s) => {
    const node = s.nodeLookup.get('2-3');
    if (
      !node ||
      !node.measured.width ||
      !node.measured.height ||
      !s.edges.some((edge) => edge.target === id)
    ) {
      return null;
    }
    return {
      width: node.measured.width,
      height: node.measured.height,
    };
  });
  const updateDimension = (attr) => (event) => {
    const value = parseInt(event.target.value);
    
    setNodes((nds) =>
      nds.map((n) => {
        if (n.id === '2-3') {

          const parentNode = nds.find(node => node.id === '2-1');
          const parentWidth = parentNode && parentNode.style ? parentNode.style.width : Infinity;
          const parentHeight = parentNode && parentNode.style ? parentNode.style.height : Infinity;
          
          const currentNode = nds.find(node => node.id === '2-3');
          const currentPosX = currentNode ? currentNode.position.x : 0;
          const currentPosY = currentNode ? currentNode.position.y : 0;
  
          const maxWidth = Math.max(typeof parentWidth === 'number' ? parentWidth - currentPosX : 0, 0);
          const maxHeight = Math.max(typeof parentHeight === 'number' ? parentHeight - currentPosY : 0, 0);
  
          const newSize = {
            width: attr === 'width' ? Math.min(value, maxWidth) : (currentNode && currentNode.style ? currentNode.style.width : 0),
            height: attr === 'height' ? Math.min(value, maxHeight) : (currentNode && currentNode.style ? currentNode.style.height : 0),
          };
  
          return {
            ...n,
            style: {
              ...n.style,
              [attr]: newSize[attr],
            },
          };
        }
  
        return n;
      }),
    );
  };
  
  
  return (
    <div>
      {dimensionAttrs.map((attr) => (
        <Fragment key={attr}>
          <label>Node {attr}</label>
          <input
            type="number"
            value={dimensions ? parseInt(dimensions[attr]) : 0}
            onChange={updateDimension(attr)}
            className="text-input-node__input nodrag"
            disabled={!dimensions}
          />
        </Fragment>
      ))}
      {!dimensionAttrs && 'no node connected'}
      <Handle type="target" position={Position.Top} className='custom-handle' />
    </div>
  );
});