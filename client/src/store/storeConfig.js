import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import MatReducer from '../reducers/MatReducer';

export default () => {
    const store = createStore(
        combineReducers({
            materials: MatReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
};