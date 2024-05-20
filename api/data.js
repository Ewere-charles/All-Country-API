import axios from 'axios';

const BASE_URL = 'https://ewere-charles.github.io/Rest-country-API/data.json';

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;