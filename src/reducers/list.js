import * as listActions from '../actions/listActions';

const initialState = [];

const list = (state = initialState, action) => {
    switch (action.type) {

        case listActions.GET_ITEMS_ACTION:
            return [
                ...state,
                { id: action.id,
                    title: action.id,
                    text: action.text,
                    completed: false,
                    dateDue: action.dateDue || null,
                    dateCreated: Date.now(),
                    dateUpdated: Date.now()
                }
            ];

        case listActions.ADD_ITEM_ACTION:
            return [
                ...state,
                { id: action.id,
                    title: action.title,
                    text: action.text,
                    completed: false,
                    dateDue: action.dateDue || null,
                    dateCreated: Date.now(),
                    dateUpdated: Date.now()
                }
            ];

        case listActions.COMPLETE_ITEM_ACTION:
            return state.map(item =>
                (item.id === action.id)
                    ? {...item, completed: !item.completed}
                    : item
            );

        case listActions.UPDATE_ITEM_ACTION:
            return state.map(item =>
                (item.id === action.id)
                    ? {...item, completed: !item.completed}
                    : item
            );

        case listActions.DELETE_ITEM_ACTION:
            return state.map(item =>
                (item.id === action.id)
                    ? {...item, completed: !item.completed}
                    : item
            );

        default:
            return state
    }
};

export default list
