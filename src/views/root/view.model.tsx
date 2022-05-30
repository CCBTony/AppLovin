import { useCallback, useEffect, useState } from 'react';
import { getUser } from '@/services';
import di from '@/inversify.config';
import { IModelApp } from '@/types/models';
import { REFS } from '@/types';

const useViewModel = () => {
  const [model] = useState(di.get<IModelApp>(REFS.AppModel));

  const onClick = useCallback(async () => {
    const user = (await getUser({})).data;
    model.setUser(user);
    model.increase();
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
