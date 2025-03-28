import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.com', // Will change later
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  get(endpoint, params) {
    return apiClient.get(endpoint, { params });
  },
  post(endpoint, data) {
    return apiClient.post(endpoint, data);
  },
  put(endpoint, data) {
    return apiClient.put(endpoint, data);
  },
  delete(endpoint) {
    return apiClient.delete(endpoint);
  }
};
