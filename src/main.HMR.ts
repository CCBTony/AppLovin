import './app';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
(module as any).hot.accept('./app', () => {
  console.log('HMR done!');
});
