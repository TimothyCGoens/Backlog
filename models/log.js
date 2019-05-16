'use strict';
module.exports = (sequelize, DataTypes) => {
  const Logs = sequelize.define('Logs', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    developer: DataTypes.STRING,
    publisher: DataTypes.STRING,
    genre: DataTypes.STRING,
    deck: DataTypes.STRING,
    releasedate: DataTypes.STRING,
    platforms: DataTypes.STRING,
    videos: DataTypes.STRING,
    gb: DataTypes.STRING
  }, {});
  Logs.associate = function(models) {
    Logs.belongsTo(models.Users, {foreignKey: 'users'})
  };
  return Logs;
};