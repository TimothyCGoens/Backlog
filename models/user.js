'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    location: DataTypes.STRING,
    platform: DataTypes.STRING,
    genre: DataTypes.STRING,
    aboutme: DataTypes.TEXT
  }, {});
  Users.associate = function(models) {
    Users.hasMany(models.Logs, {
      as: 'logData',
      foreignKey: 'userId'
    })
  };
  return Users;
};