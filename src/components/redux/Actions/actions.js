
import {actionTypes} from "../Constants/actionTypes";

const {SET_TODO, UPDATE_TODO, DELETE_TODO, CLEAR_TODO} = actionTypes

export const setTodo = (data)=>{
    return {
        type : SET_TODO,
        payload : {
            id : new Date().getTime(),
            data : data,
            isEditMode : false
        }
    }
}

export const updateTodo=(id,data)=>{
    return {
        type : UPDATE_TODO,
        payload : {
            id : id,
            data : data,
            isEditMode : false
        }
    }
}

export const deleteTodo = (id)=>{
    return {
        type : DELETE_TODO,
        id : id
    }
}

export const removeTodo = ()=>{
    return {
        type : CLEAR_TODO,
    }
}

