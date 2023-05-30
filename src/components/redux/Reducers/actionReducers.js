import {actionTypes} from '../Constants/actionTypes'


const {SET_TODO, UPDATE_TODO, DELETE_TODO, CLEAR_TODO} = actionTypes

const initialState = {
    list : []
}
export const actionReducers=(state= initialState, action)=>{
    switch (action.type){
        case SET_TODO :
            const {id , data, isEditMode} = action.payload;
            localStorage.setItem(id, data)
            return {
                 ...state, list : [...state.list, {
                    id : id ,
                    data : data,
                    isEditMode : isEditMode
            }]
            }
        case UPDATE_TODO :
            localStorage.setItem(action.payload.id, action.payload.data)
        const newState =  state.list.map(ele=>ele.id===action.payload.id ? {...ele, data : action.payload.data, isEditMode: action.payload.isEditMode}:ele)
            return {
            list : newState
            }

        case DELETE_TODO :
            const filteredData = state.list.filter((element)=>element.id !==action.id)
           localStorage.removeItem(action.id)
            return {
                list : filteredData
            }
        case CLEAR_TODO :   localStorage.clear()
                            return initialState
        default : return state
    }
}