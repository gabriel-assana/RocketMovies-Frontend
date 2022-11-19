import axios from 'axios';

export const api = axios.create({
  baseURL: "https://rocketmoviesprod.onrender.com",
});
