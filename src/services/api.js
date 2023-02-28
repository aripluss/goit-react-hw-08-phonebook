import axios from 'axios';

const API_BASE_URL = 'https://63fbd53f6deb8bdb814b4308.mockapi.io';

export const getContacts = async () => {
  const { data } = await axios.get(`${API_BASE_URL}/contacts`);
  return data;
};

export const addContact = async ({ name, number }) => {
  const { data } = await axios.post(`${API_BASE_URL}/contacts`, {
    name,
    number,
  });
  return data;
};

export const deleteContact = async contactId => {
  const { data } = await axios.delete(`${API_BASE_URL}/contacts/${contactId}`);
  return data;
};
