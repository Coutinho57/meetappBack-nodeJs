import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';
import Meetup from '../app/models/Meetup';
import Subscriptions from '../app/models/Subscriptions';

import databaseConfig from '../config/database';

const models = [User, File, Meetup, Subscriptions];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
