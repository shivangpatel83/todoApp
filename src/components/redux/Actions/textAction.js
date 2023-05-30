import  {textType} from "../Constants/textType";

const {SET_LOBSTER, SET_BALOO_BHAI, SET_BITTER , SET_SATISFY} = textType


export const setLobster =()=>{
    return {
        type : SET_LOBSTER,
        payload: 'Lobster'
    }
}

export const setBalooBhai =()=>{
    return {
        type : SET_BALOO_BHAI,
        payload: 'BalooBhai2'
    }
}

export const setBitter =()=>{
    return {
        type : SET_BITTER,
        payload: 'Bitter'
    }
}

export const setSatisfy =()=>{
    return {
        type : SET_SATISFY,
        payload: 'Satisfy'
    }
}