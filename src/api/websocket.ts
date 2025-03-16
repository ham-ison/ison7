import WebSocket from 'ws';
import { Server } from 'http';
import { useStore } from '../store';

export function createWebSocketServer(server: Server) {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws) => {
    // 同步初始状态
    ws.send(JSON.stringify({
      type: 'INIT_STATE',
      payload: useStore.getState()
    }));

    // 处理客户端消息
    ws.on('message', (message) => {
      const { type, payload } = JSON.parse(message.toString());
      
      switch (type) {
        case 'NODES_CHANGE':
          useStore.getState().onNodesChange(payload);
          break;
        case 'EDGES_CHANGE':
          useStore.getState().onEdgesChange(payload);
          break;
      }

      // 广播给所有客户端
      wss.clients.forEach(client => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type, payload }));
        }
      });
    });
  });

  return wss;
}