const { DataTypes } = require('sequelize');
const sequelize = require('../../database/index');
const Aluno = require('../../user_aluno/model/Aluno');

const Professor = sequelize.define('Professor', {
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

Professor.hasMany(Aluno, {
  onDelete: 'cascade',
});
Aluno.belongsTo(Professor);

module.exports = Professor;
