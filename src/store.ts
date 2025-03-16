import { create } from 'zustand';
import { Node, Edge } from './features/WorkflowEditor/types';
import { applyNodeChanges, applyEdgeChanges } from './features/WorkflowEditor/utils';

interface StoreState {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: (changes: any) => void;
  onEdgesChange: (changes: any) => void;
  addNode: (node: Node) => void;
}

export const useStore = create<StoreState>((set) => ({
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