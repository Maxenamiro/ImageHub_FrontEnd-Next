import axios from 'axios';

const api = axios.create({ baseURL: process.env.API_HOST });

export const signUp = async (formData) => {
  const { data } = await api.post('/registration', formData);

  if (data.includes('DOCTYPE')) return null;

  return data;
};

export const signIn = async (formData) => {
  const { data } = await api.post('/login', formData);

  return data;
};
