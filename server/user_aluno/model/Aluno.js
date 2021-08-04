const { DataTypes } = require('sequelize');
const sequelize = require('../../database/index');

const Aluno = sequelize.define('Aluno', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  instrumento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Aluno;
