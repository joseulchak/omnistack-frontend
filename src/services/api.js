import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-ulchak.herokuapp.com',
});

export default api;