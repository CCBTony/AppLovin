import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from '@/views/root';
import initHandlers from '@/globalEventHandlers';

initHandlers();

ReactDOM.render(<AppRoot />, document.getElementById('app'));
