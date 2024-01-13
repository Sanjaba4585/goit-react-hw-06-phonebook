import { createSlice } from '@reduxjs/toolkit';

export const FilterSlice2 = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts(state, actions) {
      return actions.payload;
    },
  },
});

export const filterReducer = FilterSlice2.reducer;
export const { filterContacts } = FilterSlice2.actions;
