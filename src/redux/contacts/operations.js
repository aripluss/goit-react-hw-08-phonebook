import { createAsyncThunk } from '@reduxjs/toolkit';

import { ContactsAPI } from 'services/api';

export const fetchContactsRequest = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      const contacts = await ContactsAPI.getContacts();
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const saveContactRequest = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const addedContact = await ContactsAPI.addContact({ name, number });
      return addedContact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeContactRequest = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const deletedContact = await ContactsAPI.deleteContact(contactId);
      return deletedContact.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
