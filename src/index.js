import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './modules';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}> //한개의 스토어에 오로지 APP콤포넌트를 등록 시키고
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
