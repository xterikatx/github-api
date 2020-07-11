import User from '../model/User';
import api from '../../services/api';
import sequelize from 'sequelize';

class UserController {
    async store(req, res) {
        const userExists = await User.findOne({
            where: {
                full_name: req.body.full_name
            }
        });

        if (userExists) {
            return res.status(400).json({
                error: 'Username/repo already exists in database.'
            });
        }

        const contributors_data = await api.get(`https://api.github.com/repos/${req.body.full_name}/contributors`);

        const params = { state: 'open' };
        const pulls_data = await api.get(`/repos/${req.body.full_name}/pulls`, params);
        const user = await User.create({
            full_name: req.body.full_name,
            contributors: contributors_data.data,
            pulls: pulls_data.data
        });

        return res.json(user);
    }

    async index(req, res) {
        const users = await User.findAll({
            attributes: ['full_name', 'contributors', 'pulls'],
        });
        return res.json(users)
    }
}

export default new UserController();