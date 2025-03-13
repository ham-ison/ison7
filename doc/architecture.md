# **ison7 软件架构选型**

## **1. 软件架构设计**
### **架构模式**
- **前后端分离**（前端和后端通过 API 交互，提升扩展性）
- **微服务架构**（拆分不同服务，如存储、协作、AI 辅助）
- **Serverless**（低成本、弹性扩展需求）

---

## **2. 技术栈选型**
### **前端**
#### **选型方案**
1. **框架：Vite + React + TypeScript + Canvas**
    - 组件化开发，生态丰富，适合复杂交互
    - TypeScript 提高代码可维护性
    - Vite + React + Canvas（轻量、可定制）
    - 待定：[react-flow](https://reactflow.dev/)（轻量、可定制、支持拖拽）
3. **UI 组件库**
   - Tailwind CSS（轻量、可自定义）
   - Shadcn/ui（现代设计）

#### **关键技术**
- **Canvas / SVG 绘制思维导图**
- **WebSocket 实时协作**
- **拖拽 & 节点连接**
- **快捷键支持（Ctrl+Z 撤销，Ctrl+S 保存）**
- **Markdown / JSON 格式存储导出**

---

### **后端**
#### **选型方案**
1. **框架**
   - **Node.js**（轻量、适合前后端同构）
   - **后端待定**（高性能）
   - **Python**（适合 AI 辅助功能）
2. **实时协作**
   - 网络通信待定
   - 待定：CRDT（冲突自由数据类型）支持多人编辑
3. **AI 生成思维导图**
   - 待定：OpenAI / ChatGPT 接口
   - 自定义 NLP 解析文本生成结构化数据

---

### **数据库**
- **待定：PostgreSQL**（支持 JSON 数据存储）
- **待定：MongoDB**（更适合文档存储）
- **待定：Redis**（缓存 & 协作数据同步）
- **待定：Firebase Firestore**（Serverless 解决方案）

---

## **3. 部署方案**
- **待定：Docker + Kubernetes**（适合规模化应用）
- **待定：Serverless（Vercel / Cloud Functions）**（适合 MVP 快速上线）
- **待定：数据库托管（Supabase / Firebase）**（降低维护成本）

---

## **4. 关键功能**
✅ **图绘制**  
✅ **实时协作**  
✅ **AI 生成**  
✅ **跨平台支持（Web、桌面端 Electron、移动端 React Native）**  
✅ **云端存储 & 导出（JSON、Markdown、图片、PDF）**  
✅ **权限管理 & 共享**  

---
