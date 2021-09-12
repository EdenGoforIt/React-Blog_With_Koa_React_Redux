import axios from 'axios';

const client = axios.create();

// client.defaults.baseURL = "";
// client.defaults.headers.common['Authorization'] = 'Bearer ';

axios.intercepter.response.user(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);

export default client;
