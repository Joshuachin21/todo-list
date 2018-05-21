

export const GET_ITEMS_ACTION = 'GET_ITEMS';
export const RECEIVE_DATA_ACTION = 'RECEIVE_DATA';
export const RECEIVE_DATA_ERROR_ACTION = 'RECEIVE_DATA_ERROR';
export const ADD_ITEM_ACTION = 'ADD_ITEM';
export const UPDATE_ITEM_ACTION = 'UPDATE_ITEM';
export const DELETE_ITEM_ACTION = 'DELETE_ITEM';
export const COMPLETE_ITEM_ACTION = 'COMPLETE_ITEM';
export const OPEN_EDIT_ACTION = 'OPEN_EDIT';
export const CLOSE_EDIT_ACTION = 'CLOSE_EDIT';
export const UPDATE_EDIT_ITEM_ACTION = 'UPDATE_EDIT_ITEM';

let idCounter = 0;

export const GET_ITEMS = () => {
    return {
        type: GET_ITEMS_ACTION
    };
};

export const RECEIVE_DATA = (dataArr) => ({
    type: RECEIVE_DATA_ACTION,
    data: dataArr
});

export const RECEIVE_DATA_ERROR = (dataArr) => ({
    type: RECEIVE_DATA_ACTION,
    data: dataArr
});

export const ADD_ITEM = (title = '', dateDue = null, text = '') => ({
    type: ADD_ITEM_ACTION,
    id: idCounter++,
    title: title,
    text: text,
    dateDue: dateDue,
});

export const OPEN_EDIT = (item) => ({
    type: OPEN_EDIT_ACTION,
    editItem: item
});

export const UPDATE_EDIT_ITEM = (item) => ({
    type: UPDATE_EDIT_ITEM_ACTION,
    editItem: item
});
export const CLOSE_EDIT = () => ({
    type: CLOSE_EDIT_ACTION
});
export const UPDATE_ITEM = (item) => ({
    id: item.id,
    type: UPDATE_ITEM_ACTION,
    title: item.title,
    text: item.text,
    dateDue: item.dateDue,
});

export const DELETE_ITEM = id => ({
    type: DELETE_ITEM_ACTION,
    id: id
});

export const COMPLETE_ITEM = id => ({
    type: COMPLETE_ITEM_ACTION,
    id: id,
    complete: true,

});


