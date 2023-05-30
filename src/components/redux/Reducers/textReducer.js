import  {textType} from "../Constants/textType";

const {SET_LOBSTER, SET_BALOO_BHAI, SET_BITTER , SET_SATISFY} = textType


const initialText = 'serif'


export const textReducer =(state = initialText, action)=>{
    switch (action.type) {
        case SET_LOBSTER : return action.payload
        case SET_BITTER : return action.payload
        case SET_SATISFY : return action.payload
        case SET_BALOO_BHAI : return action.payload
        default : return state
    }
}