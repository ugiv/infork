import { createSlice } from '@reduxjs/toolkit';

const userDataSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            return action.payload
        }
    }
})

export const { addUser } = userDataSlice.actions;
export default userDataSlice.reducer;

export const selectUser = (state) => state.user;