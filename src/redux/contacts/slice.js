import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from 'redux/operations';

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
      .addCase(getContactsThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(getContactsThunk.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.error = null;
        state.contacts.isLoading = false;
      })
      .addCase(getContactsThunk.rejected, (state, action) => {
        state.contacts.error = action.payload;
        state.contacts.isLoading = false;
      })

      .addCase(deleteContactThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          item => item.id !== action.payload
        );
        state.contacts.error = null;
        state.contacts.isLoading = false;
      })
      .addCase(deleteContactThunk.rejected, (state, action) => {
        state.contacts.error = action.payload;
        state.contacts.isLoading = false;
      })

      .addCase(addContactThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.contacts.items = [action.payload, ...state.contacts.items];
        state.contacts.error = null;
        state.contacts.isLoading = false;
      })
      .addCase(addContactThunk.rejected, (state, action) => {
        state.contacts.error = action.payload;
        state.contacts.isLoading = false;
      });
  },
});
export const contactsReducer = contactsSlice.reducer;
