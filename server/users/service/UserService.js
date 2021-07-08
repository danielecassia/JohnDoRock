const User = require('../model/User');

class UserService {
  async updateUser(id, body){
    await User.update (body, {where: {id: id}});
  }

  async deleteUser(id){
    await User.destroy({where: {id:id}});
  }
}

module.exports = new UserService();
