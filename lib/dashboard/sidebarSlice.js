import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sideClose: false
}

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        setSideClose: (state, action) => {
            state.sideClose = action.payload
        },
    }
})

export default sidebarSlice.reducer
export const {setSideClose} = sidebarSlice.actions