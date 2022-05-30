import { useState, useCallback } from 'react';
import { makeAutoObservable } from 'mobx';

class Model {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }
}

const useViewModel = () => {
  const [model] = useState(new Model());
  const onClick = useCallback(() => {
    model.count += 1;
  }, [model]);

  return {
    ...model,
    onClick,
  };
};

export default useViewModel;
