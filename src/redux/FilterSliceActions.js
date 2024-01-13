import { createSlice } from '@reduxjs/toolkit';

export const filterSlice1 = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts(state, actions) {
      return actions.payload;
    },
  },
});

export const filterReducer = filterSlice1.reducer;
export const { filterContacts } = filterSlice1.actions;
