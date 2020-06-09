import Sequelize from 'sequelize';
import configDatabase from '../config/database';

import Funcionario from '../app/models/Funcionario';

const models = [Funcionario];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(configDatabase);
        models.map(model => model.init(this.connection));
    }
}

export default new Database();