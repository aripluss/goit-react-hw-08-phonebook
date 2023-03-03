import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { userReducer } from './user/userSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';

const rootReducer = combineReducers({
  userData: userReducer,
  contactsData: contactsReducer,
  filterData: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
