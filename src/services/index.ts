/**
 * 封装接口请求
 */

import { IEntryUser } from '@/types/entries';
import axios from './axios';

import {
  // createResource,
  updateResource,
  retrieveResource,
  // deleteResource,
  searchResources,
} from './meta';

// user
export type updateUserParams = Partial<Omit<IEntryUser, 'username' | 'remark'>>;
export const putUser: updateResource<updateUserParams> = (data) => axios.post('/user/put', { data });
export const getUser: retrieveResource<IEntryUser, { id?: IEntryUser['id'] }> = (data) =>
  axios.post('/user/get', { data });
export const searchUser: searchResources<never, IEntryUser> = () => axios.post('/user/search');
