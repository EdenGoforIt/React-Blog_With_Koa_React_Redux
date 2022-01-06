import axios from 'axios';

const client = axios.create();

// client.defaults.baseURL = "";
// client.defaults.headers.common['Authorization'] = 'Bearer ';

axios.interceptors.request.use(
  function (config) {
    console.error(config);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

export default client;
