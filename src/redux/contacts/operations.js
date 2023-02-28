import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'services/api';

export const fetchContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      const contacts = await api.getContacts();
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const saveContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const addedContact = await api.addContact({ name, number });
      return addedContact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const deletedContact = await api.deleteContact(contactId);
      return deletedContact.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
