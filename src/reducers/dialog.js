import * as listActions from '../actions/listActions';

const initialState = {
    editing: false,
    editItem:{}
};

const dialog = (state = initialState, action) => {
    switch (action.type) {

        case listActions.CLOSE_EDIT_ACTION:
            return {
                ...state,
                editing: false
            };

        case listActions.OPEN_EDIT_ACTION:
            return {
                ...state,
                editing: true,
                editItem:action.editItem
            };

        case listActions.UPDATE_EDIT_ITEM_ACTION:
            return {
                ...state,
                editItem:action.editItem
            };

        case listActions.UPDATE_ITEM_ACTION:
            return {
                ...state,
                editing: false,
                editItem:{}
            };

        case listActions.DELETE_ITEM_ACTION:
            return {
                ...state,
                editing: false,
                editItem:{}
            };

        default:
            return state
    }
};

export default dialog
