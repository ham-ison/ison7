// 如果你遇到找不到模块“axios”或其相应类型声明的问题，需要安装axios和它的类型定义。
// 可以使用以下命令进行安装：
// npm install axios
// npm install --save-dev @types/axios
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});