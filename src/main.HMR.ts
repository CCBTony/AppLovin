import './entry';

// eslint-disable-next-line
(module as any).hot.accept('./entry', () => {
  console.log('HMR done!');
});
