import { createSlice } from '@reduxjs/toolkit';
// import {
//   addContactThunk,
//   deleteContactThunk,
//   getContactsThunk,
// } from 'redux/operations';
import { addContact, deleteContact, fetchContacts } from './operations';

const contactsInitialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const contactsSlice = createSlice({
  name: 'contactsStore',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.error = null;
        state.contacts.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.error = action.payload;
        state.contacts.isLoading = false;
      })

      .addCase(deleteContact.pending, state => {
        state.contacts.isLoading = true;
      })
      // .addCase(deleteContact.fulfilled, (state, action) => {
      //   state.contacts.items = state.contacts.items.filter(
      //     item => item.id !== action.payload
      //   );
      //   state.contacts.error = null;
      //   state.contacts.isLoading = false;
      // })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const deletedContactId = action.payload;
        state.contacts.items = state.contacts.items.filter(
          item => item.id !== deletedContactId
        );
        state.contacts.error = null;
        state.contacts.isLoading = false;
      })

      .addCase(deleteContact.rejected, (state, action) => {
        state.contacts.error = action.payload;
        state.contacts.isLoading = false;
      })

      .addCase(addContact.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items = [action.payload, ...state.contacts.items];
        state.contacts.error = null;
        state.contacts.isLoading = false;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.contacts.error = action.payload;
        state.contacts.isLoading = false;
      });
  },
});
export const contactsReducer = contactsSlice.reducer;
