/**
 * 封装接口请求
 */

import * as entries from './entries';
import axios from './axios';

import {
  // createResource,
  updateResource,
  retrieveResource,
  // deleteResource,
  searchResources,
} from './meta';

// user
export type updateUserParams = Partial<Omit<entries.EntryUser, 'username' | 'remark'>>;
export const putUser: updateResource<updateUserParams> = (data) => axios.post('/user/put', { data });
export const getUser: retrieveResource<entries.EntryUser, { id?: entries.EntryUser['id'] }> = (data) =>
  axios.post('/user/get', { data });
export const searchUser: searchResources<never, entries.EntryUser> = () => axios.post('/user/search');
