import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import list from './list';
import dialog from "./dialog";

export default combineReducers({
    router: routerReducer,
    list,
    dialog
});
