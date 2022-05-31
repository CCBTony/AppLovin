import { useLocalObservable } from 'mobx-react';

export default () => {
  const model = useLocalObservable(() => ({
    title: 'hello world',
  }));
  return model;
};
