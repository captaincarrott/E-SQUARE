import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    dataIsLoaded: false
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        },
        setDataIsLoaded: (state, action) => {
            state.dataIsLoaded = action.payload
        }
    }
})

export default productSlice.reducer
export const {setPosts, setDataIsLoaded} = productSlice.actions