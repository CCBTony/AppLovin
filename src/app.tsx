import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import initHandlers from '@/globalEventHandlers';
import AppRoot from '@/views/root';

initHandlers();

function App(): JSX.Element {
  return <AppRoot />;
}

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('app'),
);
