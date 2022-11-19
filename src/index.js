import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from "react-redux";

import App from "./components/App";

import { store } from "./redux";

import './styles/styles.scss';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
