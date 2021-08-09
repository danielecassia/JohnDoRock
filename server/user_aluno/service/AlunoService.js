// const bcrypt = require('bcrypt');
// const PermissionError = require('../../errors/PermissionError');
// const QueryError = require('../../errors/QueryError');
// const Aluno = require('../model/Aluno');

// class AlunoService {
//   async createAluno(aluno) {
//     const saltRounds = 10;
//     aluno.senha = await bcrypt.hash(aluno.senha, saltRounds);
//     await Aluno.create(aluno);
//   }

  // async getAllUsers() {
  //   return await User.findAll({
  //     raw: true,
  //     attributes:
  //   {
  //     exclude:
  //       ['senha', 'createdAt', 'updatedAt'],
  //   },
  //   });
  // }

  // async getUserById(id) {
  //   const user = await User.findByPk(id, {
  //     raw: true,
  //     attributes:
  //   {
  //     exclude:
  //       ['senha', 'createdAt', 'updatedAt'],
  //   },
  //   });
  //   if(!user){
  //     throw new QueryError(`Não foi encontrado um usuário com o ID: ${id}`);
  //   }
  //   return user;
  // }

  // async getProfessores() {
  //   return await User.findAll({
  //     raw: true,
  //     where: {
  //       cargo: 'professor',
  //     },
  //     attributes: {
  //     exclude:
  //       ['senha', 'createdAt', 'updatedAt'],
  //   },
  //   });
  // }

  // async getUltimosAlunos() {
  //   return await User.findAll({
  //     raw: true,
  //     where: {
  //       cargo: 'aluno',
  //     },
  //     limit: 5,
  //     order: [
  //       ['id', 'DESC'],
  //     ],
  //     attributes: {
  //     exclude:
  //       ['senha', 'createdAt', 'updatedAt'],
  //   },
  //   });
  // }
  
  // async updateUser(id, reqUserId, reqUserRole, body) {
  //   const user = await User.findByPk(id);
  //   if(!user){
  //     throw new QueryError(`Não foi encontrado um usuário com o ID: ${id}`);
  //   }
  //   const isAdmin = reqUserRole === 'admin';
  //   const isUpdateUser = reqUserId == id;
    
  //   if (isAdmin || isUpdateUser) {
  //     if (!isAdmin && body.cargo) {
  //       throw new PermissionError(
  //         'Você não tem permissão para atualizar seu papel');
  //     }
  //     await user.update(body);
  //   } else {
  //     throw new PermissionError(
  //       'Você não tem permissão para atualizar esse usuário');
  //   }
  // }

  // async deleteUser(id, reqUserId) {
  //   const user = await User.findByPk(id);
  //   if(!user){
  //     throw new QueryError(`Não foi encontrado um usuário com o ID: ${id}`);
  //   }
  //   if (id == reqUserId) {
  //     throw new PermissionError(
  //       'Você não pode se deletar!');
  //   }
  //   await user.destroy();
  // }

  // async getCurrentUser(id) {
  //   const user = await User.findByPk(id,
  //     {
  //       attributes: { 
  //         exclude:
  //       ['senha', 'createdAt', 'updatedAt'],
  //       },
  //     });
  //     if(!user) {
  //       throw new QueryError(`Não foi encontrado um usuário com o ID: ${id}`);
  //     }
  //     return user;
  // }
// }

// module.exports = new AlunoService();
