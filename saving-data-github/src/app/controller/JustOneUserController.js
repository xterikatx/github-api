import User from '../model/User';

class JustOneUserController {
    async index(req, res) {
        const users = await User.findOne({
            where: { id: req.params.id },
            attributes: ['full_name', 'description', 'contributors', 'pulls'],
        });

        return res.json(users)
    }
}

export default new JustOneUserController();