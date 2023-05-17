


import { create } from 'zustand'

interface UiState{
    showMenu:           boolean
    showDetail:         boolean
    changeStateMenu:    ()=>void
    changeStateDetail:    ()=>void
}

export const useUiStore = create<UiState>( set => ({

    showMenu:           false,
    showDetail:         false,
    changeStateMenu:  () => set( state => ({ showMenu: !state.showMenu })),
    changeStateDetail:    () => set( state => ({ showDetail: !state.showDetail }))

})) 