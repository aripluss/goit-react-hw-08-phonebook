import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: contactsInitialState,
  // Об'єкт редюсерів
  reducers: {
    addContact: {
      reducer: (state, action) => {
        //   action = { type: 'contacts/setContacts', payload: [{}, {}, ..., {}] };
        state.contacts = [action.payload, ...state.contacts];
      },
      prepare(newContacts) {
        return {
          payload: {
            ...newContacts,
            id: nanoid(),
          },
        };
      },
    },

    deleteContact(state, action) {
      //   action = { type: 'contacts/deleteContact', payload: {} };
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },

    setFilter(state, action) {
      //   action = { type: 'contacts/setFilter', payload: '...' };
      state.filter = action.payload;
    },
  },
});

// Генератори екшенів
export const { addContact, setFilter, deleteContact } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
