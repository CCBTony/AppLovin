import Axios from 'axios';
import { Event } from '@/meta';
import { AXIOS_BASE_URL } from '@/meta';
import { appModel } from '@/store';

const { eventHub } = appModel;

const axios = Axios.create({ baseURL: AXIOS_BASE_URL });

export const globalRequestInterceptor = axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    eventHub.emit(Event.AXIOS_REQUEST_ERROR, error);
    return Promise.reject(error);
  },
);

export const globalResponseInterceptor = axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    eventHub.emit(Event.AXIOS_RESPONSE_ERROR, error);
    return Promise.reject(error);
  },
);

export default axios;
