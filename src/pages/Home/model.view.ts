import { useLocalObservable } from 'mobx-react';
import { appModel } from '@/store';

export default function useViewModel() {
  const model = useLocalObservable(() => ({
    appModel,
    points: [
      { size: 7.98, top: 10.48, right: 72.96 },
      { size: 5, top: 31.92, right: 140.94 },
      { size: 11, bottom: 247, right: -5 },
      { size: 5, bottom: 210, right: 48 },
      { size: 4, bottom: 150, left: 57 },
      { size: 11, bottom: 109, left: 27 },
      { size: 5, bottom: 95, left: 94 },
    ],
  }));
  return model;
}
