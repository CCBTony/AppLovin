import { EventEmitter } from 'events';
import { IEntryUser } from '@/types/entries';

export interface IModelApp {
  count: number;
  eventHub: EventEmitter;
  user?: IEntryUser;

  setUser(user: IEntryUser): void;
  increase(): void;
}
