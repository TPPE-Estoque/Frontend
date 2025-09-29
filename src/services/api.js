import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
});

export const getHelloWorld = () => {
  return api.get('/hello/');
};

export default api;