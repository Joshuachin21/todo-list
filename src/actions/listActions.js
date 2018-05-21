export const GET_ITEMS_ACTION = 'GET_ITEMS';
export const ADD_ITEM_ACTION = 'ADD_ITEM';
export const UPDATE_ITEM_ACTION = 'UPDATE_ITEM';
export const DELETE_ITEM_ACTION = 'DELETE_ITEM';
export const COMPLETE_ITEM_ACTION = 'COMPLETE_ITEM';

let idCounter = 0;

export const GET_ITEMS = () => ({
    type: GET_ITEMS_ACTION
});

export const ADD_ITEM = (title = '', dateDue = null, text = '') => ({
    type: ADD_ITEM_ACTION,
    id: idCounter++,
    title: title,
    text: text,
    dateDue: dateDue,
});

export const UPDATE_ITEM = text => ({
    type: UPDATE_ITEM_ACTION,
    id: idCounter++,
    text
});

export const DELETE_ITEM = text => ({
    type: DELETE_ITEM_ACTION,
    id: idCounter++,
    text
});

export const COMPLETE_ITEM = id => ({
    type: COMPLETE_ITEM_ACTION,
    id: id,
    complete: true
});


