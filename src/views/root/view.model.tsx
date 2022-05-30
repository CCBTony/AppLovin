import { useCallback, useEffect, useState } from 'react';
// import { appModel } from '@/store';
import { getUser } from '@/services';
import { EntryUser } from '@/services/entries';
import { makeAutoObservable, runInAction } from 'mobx';

class Model {
  user?: EntryUser = null;
  count = 1;

  constructor() {
    makeAutoObservable(this);
  }
}

const useViewModel = () => {
  const [model] = useState(new Model());

  const onClick = useCallback(async () => {
    const user = (await getUser({})).data;
    runInAction(() => {
      model.user = user;
      model.count += 1;
    });
  }, [model]);

  useEffect(() => {
    console.log('mount!!!');
  }, []);

  return {
    ...model,

    onClick,
  };
};

export default useViewModel;
