import React from 'react';
import { AppRegistry } from 'react-native';
import Contiguous from './components/Contiguous';
import {Provider} from 'react-redux';
import {
    createStore,
    applyMiddleware,
    combineReduxers,
    compose,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from './reducers';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initialState){
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
        ),
    );
    return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

const App = () => (
    <Provider store={store}>
        <Contiguous />
    </Provider>
)

AppRegistry.registerComponent('contiguous', () => App);