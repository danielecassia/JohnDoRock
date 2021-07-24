const { DataTypes } = require('sequelize');
const sequelize = require('../../database/index');

const User = sequelize.define('Users', {
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

User.sync({ alter: false, force: false })
  .then(() => console.log('A tabela Users foi criada!'))
  .catch((error) => console.log(error));

module.exports = User;
