import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'


import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import store from './store'

import Auth from './components/Auth'

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Auth>
            <App title="My app"/>
        </Auth>
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker();
