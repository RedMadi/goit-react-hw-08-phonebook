import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contactsStore.contacts.items;

export const getFilter = state => state.filter.value;

export const getIsLoading = state => state.contactsStore.isLoading;

export const getError = state => state.contactsStore.error;

export const selectFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
