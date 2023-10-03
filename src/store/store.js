
import { configureStore } from '@reduxjs/toolkit';
import userDataSlice from '../slice/userData';


const store = configureStore({
    reducer: {
        user: userDataSlice
    }
})

export default store;