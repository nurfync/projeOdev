import { createStore, combineReducers, applyMiddleware } from 'redux';
import { loadingReducer, LOADING_NAMESPACE } from '../Screens/Loading/LoadingRedux';

import { userReducer } from './UserRedux';


const rootReducer = combineReducers({
    userState: userReducer,
    loadingState:loadingReducer

});

export const store=createStore(rootReducer)
