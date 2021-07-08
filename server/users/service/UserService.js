const User = require('../model/User');

class UserService {

  async createUser(user) {
    await User.create(user);
  }

  async getAllUsers() {
    return await User.findAll({ raw: true });
  }

  async getUserById(id) {
    return await User.findByPk(id, { raw: true });
  }

  async updateUser(id, body) {
    await User.update(body, { where: { id: id } });
  }

  async deleteUser(id) {
    await User.destroy({ where: { id: id } });
  }
}

module.exports = new UserService();
