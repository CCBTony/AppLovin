import { useLocalObservable } from 'mobx-react';

export default () => {
  const model = useLocalObservable(() => ({
    title: '15, 20, hello',
  }));
  return model;
};
