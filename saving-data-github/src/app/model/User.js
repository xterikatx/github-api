import Sequelize, { Model } from 'sequelize';

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                full_name: Sequelize.STRING,
                description: Sequelize.STRING,
                contributors: Sequelize.JSON,
                pulls: Sequelize.JSON,
            },
            {
                sequelize
            }
        );
    }
}

export default User;