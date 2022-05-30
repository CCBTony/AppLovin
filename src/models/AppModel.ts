import { makeAutoObservable } from 'mobx';
import { EventEmitter } from 'events';
import { EntryUser } from '@/services/entries';

export class AppModel {
  count = 1;
  eventHub = new EventEmitter();
  user?: EntryUser = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: EntryUser) {
    this.user = user;
  }

  increase() {
    this.count += 1;
  }
}
