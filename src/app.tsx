import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from '@/styles';
import { appModel } from '@/store';
import { observer, useLocalObservable } from 'mobx-react';
import 'dayjs/locale/zh-cn';

import PageHome from '@/pages/Home';
import PageTodayDetail from '@/pages/Today';
import { AppStatus } from '@/meta';

const App = observer((): JSX.Element => {
  const app = useLocalObservable(() => appModel);

  useEffect(() => {
    app.init();
  }, [app]);

  return app.status === AppStatus.Done ? (
    <Routes>
      <Route path={'/'} element={<PageHome />} />
      <Route path={'/today'} element={<PageTodayDetail />} />
    </Routes>
  ) : null;
});

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('app'),
);
