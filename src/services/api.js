import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://foodbackapi.herokuapp.com'
});