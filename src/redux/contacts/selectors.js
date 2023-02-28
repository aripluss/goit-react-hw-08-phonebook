import { createSelector } from '@reduxjs/toolkit';

import { selectFilter } from 'redux/filter/selectors';

export const selectContacts = state => state.contactsData.contacts.items;
export const selectIsLoading = state => state.contactsData.contacts.isLoading;
export const selectError = state => state.contactsData.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
