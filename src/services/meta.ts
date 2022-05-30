import { AxiosResponse } from 'axios';

export interface PaginateParams {
  num: number;
  size: number;
}
export interface PaginateMeta extends PaginateParams {
  total: number;
}
export interface SearchResult<Item> {
  pagination?: PaginateMeta;
  items: Item[];
}

export type Requester<P, R> = (params: P) => Promise<AxiosResponse<R>>;
export type Searcher<P, Item> = Requester<P & Partial<PaginateParams>, SearchResult<Item>>;

export type createResource<P> = Requester<P, never>;
export type updateResource<P> = Requester<P, never>;
export type retrieveResource<R, P = { id: number }> = Requester<P, R>;
export type deleteResource<P = { id: number }> = Requester<P, never>;
export type searchResources<P, R> = Searcher<P, R>;
