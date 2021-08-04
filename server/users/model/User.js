const { DataTypes } = require('sequelize');
const sequelize = require('../../database/index');
const Professor = require('../../user_professor/model/Professor');
const Aluno = require('../../user_aluno/model/Aluno');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_nasc: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cargo: {
    type: DataTypes.ENUM,
    values: ['admin', 'professor', 'aluno'],
    allowNull: false,
  },
});

// User.hasOne(Professor, {
//   onDelete: 'cascade',
// });
// Professor.belongsTo(User);

User.hasOne(Professor, {
  onDelete: 'cascade',
});
Professor.belongsTo(User, {
  foreingKey: { cargo: 'professor' },
});

User.hasOne(Aluno, {
  onDelete: 'cascade',
});
Aluno.belongsTo(User);

User.sync({ alter: false, force: false })
  .then(() => console.log('A tabela User foi criada!'))
  .catch((error) => console.log(error));

Aluno.sync({ alter: false, force: false })
  .then(() => console.log('A tabela Aluno foi criada!'))
  .catch((error) => console.log(error));

Professor.sync({ alter: false, force: false })
  .then(() => console.log('A tabela Professor foi criada!'))
  .catch((error) => console.log(error));

module.exports = User;
