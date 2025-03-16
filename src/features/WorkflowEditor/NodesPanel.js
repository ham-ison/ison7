import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useStore } from '../../store';
export default function NodesPanel() {
    // 明确指定 state 的类型为 { addNode: any }，这里假设 addNode 是一个函数，你可以根据实际情况修改
    const addNode = useStore((state) => state.addNode);
    return (_jsxs("div", { className: "w-64 p-4 bg-gray-50 border-r", children: [_jsx("div", { className: "p-3 mb-2 bg-white rounded shadow cursor-move", draggable: true, onDragStart: (e) => e.dataTransfer.setData('reactflow/node', JSON.stringify({
                    type: 'input',
                    data: { label: '开始节点' },
                    position: { x: 0, y: 0 }
                })), children: _jsxs("div", { className: "flex items-center", children: [_jsx("span", { className: "mr-2", children: "\u2B55" }), "\u8F93\u5165\u8282\u70B9"] }) }), _jsx("div", { className: "p-3 mb-2 bg-blue-50 rounded shadow cursor-move", draggable: true, onDragStart: (e) => e.dataTransfer.setData('reactflow/node', JSON.stringify({
                    type: 'output',
                    data: { label: '结束节点' },
                    position: { x: 0, y: 0 }
                })), children: _jsxs("div", { className: "flex items-center", children: [_jsx("span", { className: "mr-2", children: "\u2705" }), "\u8F93\u51FA\u8282\u70B9"] }) }), _jsx("div", { className: "p-3 mb-2 bg-white rounded shadow cursor-move", draggable: true, onDragStart: (e) => e.dataTransfer.setData('reactflow/node', JSON.stringify({
                    type: 'default',
                    data: { label: '新节点' },
                    position: { x: 0, y: 0 }
                })), children: _jsxs("div", { className: "flex items-center", children: [_jsx("span", { className: "mr-2", children: "\u2699\uFE0F" }), "\u5904\u7406\u8282\u70B9"] }) })] }));
}
