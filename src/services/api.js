import axios from 'axios';

// const API_BASE_URL = process.env.REACT_APP_API_DOMAIN;
const API_BASE_URL = 'https://connections-api.herokuapp.com';

const $publicHost = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const $privateHost = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': token...,
  },
});

const authInterceptor = config => {
  config.headers['Authorization'] = localStorage.getItem('token');
  return config;
};

$privateHost.interceptors.request.use(authInterceptor);

export const UserAPI = {
  async register({ name, email, password }) {
    const { data } = await $publicHost.post(`/users/signup`, {
      name,
      email,
      password,
    });
    return data;
  },

  async login({ email, password }) {
    const { data } = await $publicHost.post(`/users/login`, {
      email,
      password,
    });
    return data;
  },

  async userLogOut() {
    const { data } = await $privateHost.post(`/users/logout`);
    return data;
  },

  async getUserDetails() {
    const { data } = await $privateHost.get(`/users/current`);
    return data;
  },
};

export const ContactsAPI = {
  async getContacts() {
    const { data } = await $privateHost.get(`/contacts`);
    return data;
  },

  async addContact({ name, number }) {
    const { data } = await $privateHost.post(`/contacts`, {
      name,
      number,
    });
    return data;
  },

  async deleteContact(contactId) {
    const { data } = await $privateHost.delete(`/contacts/${contactId}`);
    return data;
  },
};
