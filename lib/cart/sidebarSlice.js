import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartAsideClose: false,
}

const cartSlice = createSlice({
    name: 'cartAside',
    initialState,
    reducers: {
        setCartAside: (state, action) => {
            state.cartAsideClose = action.payload
        }
    }
})

export default cartSlice.reducer;
export const { setCartAside } = cartSlice.actions;