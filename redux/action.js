import {Tambah,Kurang} from './type'

export const tambahCounter = (counter) => ({
    type:Tambah,data:counter
})

export const kurangCounter = (counter) => ({
    type:Kurang,data:counter
})