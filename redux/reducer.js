import {Tambah,Kurang} from './type'

const initData = {
    counter:0
}

export const reducerCounter = (state = initData, action) => {
    switch(action.type){
        case Tambah:
            console.log('Tambah Counter');
            return{...state,counter:action.data + 1}
        case Kurang:
            console.log('Kurang Counter');
            return {...state,counter:action.data - 1}
        default:return state;
    }
}