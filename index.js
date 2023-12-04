import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import App from './App';
import './index.css';
import './variables/colorVariable.module.css'

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <ContactPage />
  </Provider>,
  document.getElementById('root')
);
