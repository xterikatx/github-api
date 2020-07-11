import {API} from './api';

const User = {
    create: async (full_name) => {
        const response = await API().post('/users', { full_name } );
        return await response.data
    },

    index: async () => {
        const response = await API().get('/users');
        return await response.data;
    }
}

export default User;