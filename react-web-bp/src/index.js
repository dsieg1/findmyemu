// React, react router, redux imports
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

// page imports
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import store from "./store";

// Render Page
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
