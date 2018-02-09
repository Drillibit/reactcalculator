import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import MatReducer from '../reducers/MatReducer';
import BranchReducer from '../reducers/BranchReducer';

export default () => {
    const store = createStore(
        combineReducers({
            materials: MatReducer,
            branches: BranchReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
};