import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  fetchContactsRequest,
  saveContactRequest,
  removeContactRequest,
} from './operations';

const contactsInitialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder =>
    builder
      // ----------- App -----------
      .addCase(fetchContactsRequest.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
      })
      // ------- ContactForm -------
      .addCase(saveContactRequest.fulfilled, (state, action) => {
        state.contacts.items = [action.payload, ...state.contacts.items];
      })
      // ----- ContactListItem -----
      .addCase(removeContactRequest.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload
        );
      })

      .addCase(fetchContactsRequest.pending, handlePending)
      .addCase(fetchContactsRequest.rejected, handleRejected)
      .addCase(saveContactRequest.pending, handlePending)
      .addCase(saveContactRequest.rejected, handleRejected)
      .addCase(removeContactRequest.pending, handlePending)
      .addCase(removeContactRequest.rejected, handleRejected)

      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled),
});

const handlePending = state => {
  state.contacts.isLoading = true;
  state.contacts.error = null;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const extraActions = [
  fetchContactsRequest,
  saveContactRequest,
  removeContactRequest,
];

const getActions = type => extraActions.map(action => action[type]);

const handleFulfilled = state => {
  state.contacts.isLoading = false;
};

export const contactsReducer = contactsSlice.reducer;
