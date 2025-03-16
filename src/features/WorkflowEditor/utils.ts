import type { NodeChange, EdgeChange } from './types';

export function applyNodeChanges(changes: NodeChange[], nodes: any[]) {
  return changes.reduce((acc, change) => {
    switch (change.type) {
      case 'add':
        return [...acc, change.item];
      case 'remove':
        return acc.filter(n => n.id !== change.id);
      case 'update':
        return acc.map(n => n.id === change.id ? {...n, ...change.update} : n);
      default:
        return acc;
    }
  }, nodes);
}

export function applyEdgeChanges(changes: EdgeChange[], edges: any[]) {
  return changes.reduce((acc, change) => {
    switch (change.type) {
      case 'add':
        return [...acc, change.item];
      case 'remove':
        return acc.filter(e => e.id !== change.id);
      case 'update':
        return acc.map(e => e.id === change.id ? {...e, ...change.update} : e);
      default:
        return acc;
    }
  }, edges);
}