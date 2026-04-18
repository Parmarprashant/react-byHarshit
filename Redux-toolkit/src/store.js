import {configureStore} from '@reduxjs/toolkit';

import counterReducer from './features/counter/counterSlice'
// state change dispatch function --> action

//slice for feature


export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})
