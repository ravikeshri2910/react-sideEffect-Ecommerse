import {createSlice} from '@reduxjs/toolkit'


const uiSlice = createSlice({
    name : 'ui',
    initialState : {cartIsVisible : false},
    reducers :{
        cartVisible(state){
            state.cartIsVisible = !state.cartIsVisible
        }
    }

})

export const uiActions = uiSlice.actions
export default uiSlice.reducer