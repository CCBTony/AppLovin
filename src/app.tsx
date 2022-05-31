import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import initHandlers from '@/globalEventHandlers';
import { GlobalStyle } from '@/styles';

import PageHome from '@/pages/Home';
import PageTodayDetail from '@/pages/TodayDetail';

initHandlers();

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('app'),
);

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={'/'} element={<PageHome />} />
      <Route path={'/today'} element={<PageTodayDetail />} />
    </Routes>
  );
}
