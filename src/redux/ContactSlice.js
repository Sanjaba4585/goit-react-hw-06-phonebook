import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [{ id: 'id-1', name: 'Oleksandr Korniichuk', number: '123-45-67' }],
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContactsAction: (state, actions) => {
      state.contacts = [...state.contacts, actions.payload];
    },
    removeContactsAction: (state, actions) => {
      state.contacts = state.contacts.filter(el => el.id !== actions.payload);
    },
  },
});
export const contactsReducer = contactSlice.reducer;
export const { addContactsAction, removeContactsAction } = contactSlice.actions;
