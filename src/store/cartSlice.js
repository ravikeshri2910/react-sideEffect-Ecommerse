import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialValue,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            // console.log('newItem' , newItem)
            state.totalQuantity++
            const existingItem = state.items.find((item) => item.id === newItem.id);
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                })
            } else {
                existingItem.quantity++,
                    existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }

        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            // console.log('id', id)
            state.totalQuantity--
            const existingItem = state.items.find((item) => item.id === id)

            if (existingItem.quantity === 1) {
                // console.log('here')
                state.items = state.items.filter((item) => item.id !== id)
                // console.log('rat', rat)
            } else {
                existingItem.quantity--
                
            }
        }
    }
})

export const cartAction = cartSlice.actions
export default cartSlice.reducer