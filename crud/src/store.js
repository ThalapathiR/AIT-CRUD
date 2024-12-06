import { configureStore } from '@reduxjs/toolkit';
import  viewDataReducer from './slice';
const store = configureStore({
    reducer: {
        viewData: viewDataReducer
    }
});

export default store;
