export interface Node {
  id: string;
  type: 'input' | 'default' | 'output';
  position: { x: number; y: number };
  data: { label: string };
}

export interface Edge {
  id: string;
  source: string;
  target: string;
}

export interface EdgeChange {
  id: string;
  type: 'add' | 'remove' | 'update';
  item?: Edge;
  update?: Partial<Edge>;
}

export interface NodeChange {
  id: string;
  type: 'add' | 'remove' | 'update';
  item?: Node;
  update?: Partial<Node>;
}

export interface WorkflowState {
  nodes: Node[];
  edges: Edge[];
  addNode: (node: Node) => void;
  updateNode: (id: string, position: { x: number; y: number }) => void;
  addEdge: (edge: Edge) => void;
}