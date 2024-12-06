import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const viewData = createSlice({
  name: 'viewData',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.push({ ...action.payload });  
    },
    removeData: (state, action) => {
     state.splice(action.payload,1)  
    },
    updateData: (state, action) => {
        const { email, updatedUser } = action.payload;
        const userIndex = state.findIndex((user) => user.email === email);  
        if (userIndex !== -1) {
          state[userIndex] = { ...state[userIndex], ...updatedUser };  
        }
      },
      
  },
});

export const { addData, removeData, updateData } = viewData.actions;
export default viewData.reducer;
