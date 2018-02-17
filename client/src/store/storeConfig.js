import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import MatReducer from '../reducers/MatReducer';
import BranchReducer from '../reducers/BranchReducer';
import UserReducer from '../reducers/UserReducer';

export default () => {
    const store = createStore(
        combineReducers({
            materials: MatReducer,
            branches: BranchReducer,
            users: UserReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
};