import {ADD_TODO, DELETE_ITEM, TOGGLE_FLAG} from "./actionsName";

let nextIdToDoItem = 1;

export const addToDo = (name) => {
    return {
        type: ADD_TODO,
        name,
        id: nextIdToDoItem++
    }
};

export const toggleFlag = (id) => {
    return {
        type: TOGGLE_FLAG,
        id
    }
};

export const deleteItem = (index) => {
    return {
        type: DELETE_ITEM,
        id: index
    }
};