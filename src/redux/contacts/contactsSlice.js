import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { fetchContacts, saveContact, removeContact } from './operations';

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
  reducers: {
    setError(state, action) {
      state.contacts.error = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      // ----- App -----
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
      })
      // ----- ContactForm -----
      .addCase(saveContact.fulfilled, (state, action) => {
        state.contacts.items = [action.payload, ...state.contacts.items];
      })
      // ----- ContactListItem -----
      .addCase(removeContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload
        );
      })

      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(saveContact.pending, handlePending)
      .addCase(saveContact.rejected, handleRejected)
      .addCase(removeContact.pending, handlePending)
      .addCase(removeContact.rejected, handleRejected)

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

const extraActions = [fetchContacts, saveContact, removeContact];

const getActions = type => extraActions.map(action => action[type]);

const handleFulfilled = state => {
  state.contacts.isLoading = false;
};

export const { setError } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
