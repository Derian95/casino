


import {create} from 'zustand'
import { Casino } from '../interface/casino'

interface DataState{
    casinoInfo:Casino | null
    setCasinoInfo: (obj:Casino | null) => void
}

export const dataStore = create<DataState>( set => ({
    casinoInfo:{
        address:'',
        color:'#000',
        history:'',
        idCasino:0,
        latitude:18.2222,
        longitude:-18.5,
        logoPath:'',
        mission:'',
        musicPath:'',
        name:'',
        promotionalVideoPath:'',
        vision:''
    },
    setCasinoInfo:(obj) =>set({ casinoInfo:obj})
   

})) 