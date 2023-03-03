import { createAsyncThunk } from '@reduxjs/toolkit';

import { UserAPI } from 'services/api';

export const registerRequest = createAsyncThunk(
  'user/register',
  async (formData, thunkAPI) => {
    try {
      const response = await UserAPI.register(formData);
      const { token, user } = response;

      localStorage.setItem('token', token);

      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginRequest = createAsyncThunk(
  'user/login',
  async (formData, thunkAPI) => {
    try {
      const response = await UserAPI.login(formData);
      const { token, user } = response;

      localStorage.setItem('token', token);

      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutRequest = createAsyncThunk(
  'user/logout',
  async (_, thunkAPI) => {
    try {
      const response = await UserAPI.userLogOut();

      localStorage.removeItem('token');

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserDetailsRequest = createAsyncThunk(
  'user/getUserDetails',
  async (_, thunkAPI) => {
    try {
      const response = await UserAPI.getUserDetails();

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
