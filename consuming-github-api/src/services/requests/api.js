import axios from 'axios';
import User from './index';

const API = () => {
    return axios.create({
        baseURL: 'http://localhost:3333',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        }
    });
}

export {
    API,
    User as UsersAPI,
}