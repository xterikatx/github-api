import axios from 'axios';

const api_axios = axios.create({
    baseURL: 'https://api.github.com',
});

export default api_axios;