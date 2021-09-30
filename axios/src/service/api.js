import axios from 'axios';

const api = axios.create({
  baseURL: " https://digimon-api.herokuapp.com"
});

export default api;