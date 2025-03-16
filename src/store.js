import { create } from 'zustand';
import { applyNodeChanges, applyEdgeChanges } from './features/WorkflowEditor/utils';
export const useStore = create((set) => ({
    nodes: [],
    edges: [],
    onNodesChange: (changes) => {
        set((state) => ({
            nodes: applyNodeChanges(changes, state.nodes)
        }));
    },
    onEdgesChange: (changes) => {
        set((state) => ({
            edges: applyEdgeChanges(changes, state.edges)
        }));
    },
    addNode: (node) => {
        set((state) => ({
            nodes: [...state.nodes, node]
        }));
    }
}));
