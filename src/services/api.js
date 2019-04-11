import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-alves.herokuapp.com',
});

export default api;