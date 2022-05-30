export enum AppStatus {
  NEW, // 新
  INITED, // 初始化完成
}

// 全局应用事件
export enum Event {
  AXIOS_REQUEST_ERROR = 'axios.request.error',
  AXIOS_RESPONSE_ERROR = 'axios.response.error',
}

export const AXIOS_BASE_URL = '/api';
