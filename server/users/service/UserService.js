const bcrypt = require('bcrypt');
const User = require('../model/User');

class UserService {
  async createUser(user) {
    try {
      const saltRounds = 10;
      user.senha = await bcrypt.hash(user.senha, saltRounds);
      await User.create(user);
    } catch (error) {
      let erro = new Error();
      // throw error;
    }
  }

  async getAllUsers() {
    return User.findAll({
      raw: true,
      attributes:
    {
      exclude:
        ['password', 'createdAt', 'updatedAt'],
    },
    });
  }

  async getUserById(id) {
    return User.findByPk(id, {
      raw: true,
      attributes:
    {
      exclude:
        ['password', 'createdAt', 'updatedAt'],
    },
    });
  }

  async updateUser(id, reqUserId, reqUserRole, body) {
    const user = await User.findByPk(id);
    const isAdmin = reqUserRole === 'admin';
    const isUpdateUser = reqUserId == id;
    
    if (isAdmin || isUpdateUser) {
      if (!isAdmin && body.cargo) {
        throw new Error('Você não tem permissão para atualizar seu papel');
      }
      await user.update(body);
    } else {
      throw new Error('Você não tem permissão para atualizar esse usuário');
    }
  }

  async deleteUser(id, reqUserId) {
    const user = await User.findByPk(id);
    if (id == reqUserId) {
      throw new Error('Você não pode se deletar!');
    }
    await user.destroy();
  }

  async getCurrentUser(id) {
    return User.findByPk(id,
      {
        attributes: {
          exclude:
        ['password', 'createdAt', 'updatedAt'],
        },
      });
  }
}

module.exports = new UserService();
