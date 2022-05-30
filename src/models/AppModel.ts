import { makeAutoObservable } from 'mobx';
import { EventEmitter } from 'events';
import { IEntryUser } from '@/types/entries';
import { IModelApp } from '@/types/models';
import { injectable } from 'inversify';

@injectable()
export class AppModel implements IModelApp {
  count = 1;
  eventHub = new EventEmitter();
  user?: IEntryUser = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: IEntryUser) {
    this.user = user;
  }

  increase() {
    this.count += 1;
  }
}
