import {API} from './api';

const User = {
    create: async (full_name, description) => {
        const params = { full_name, description }
        const response = await API().post('/users', params );
        return await response.data
    },

    index: async () => {
        const response = await API().get('/users');
        return await response.data;
    }
}

export default User;