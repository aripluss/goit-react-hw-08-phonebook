import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  loginRequest,
  registerRequest,
  logOutRequest,
  getUserDetailsRequest,
} from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  isLoggedIn: false,
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      // -------- Login ---------
      .addCase(loginRequest.pending, handlePending)
      .addCase(loginRequest.rejected, handleRejected)
      .addCase(loginRequest.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isLoggedIn = true;
      })

      // ------- Register -------
      .addCase(registerRequest.pending, handlePending)
      .addCase(registerRequest.rejected, handleRejected)
      .addCase(registerRequest.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isLoggedIn = true;
      })

      // -------- Logout --------
      .addCase(logOutRequest.pending, handlePending)
      .addCase(logOutRequest.rejected, handleRejected)
      .addCase(logOutRequest.fulfilled, (state, { payload }) => {
        state.user.name = null;
        state.user.email = null;
        state.isLoggedIn = false;
      })

      // --- Get current user ---
      .addCase(getUserDetailsRequest.pending, handlePending)
      .addCase(getUserDetailsRequest.rejected, handleRejected)
      .addCase(getUserDetailsRequest.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isLoggedIn = true;
      })

      // --------- ALL ----------
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled);
  },
});

const handlePending = state => {
  state.status = 'pending';
  state.error = null;
};

const handleRejected = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
};

const extraActions = [
  loginRequest,
  registerRequest,
  logOutRequest,
  getUserDetailsRequest,
];

const getActions = type => extraActions.map(action => action[type]);

const handleFulfilled = state => {
  state.status = 'resolved';
};

export const userReducer = userSlice.reducer;
