import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        count: 0,
        products: [],
    },
    reducers: {
        increment: state => {
            state.count += 1;
        },
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
    }
});

export const { increment, addProduct } = cartSlice.actions;
export default cartSlice.reducer;