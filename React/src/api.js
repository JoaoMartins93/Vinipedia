import axios from 'axios';

// url base
const instance = axios.create({
  baseURL: 'http://localhost:8000/api/',
});

export default instance;
