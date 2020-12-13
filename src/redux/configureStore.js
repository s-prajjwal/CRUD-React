import { applyMiddleware, compose, createStore  } from 'redux';
import thunkMiddleware from "redux-thunk";
import createRootReducer from './reducers';

export default function configureStore(preloadedState) {
    const middlewares = [thunkMiddleware];
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
        createRootReducer(),
        preloadedState,
        composeEnhancers(
            applyMiddleware(
                ...middlewares,
            )
        )
    )
}