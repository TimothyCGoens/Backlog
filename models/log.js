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
    gb: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  }, {});
  Logs.associate = function(models) {
    Logs.belongsTo(models.Users, {
      as: 'user',
      foreignKey: 'userId',
      // onDelete: 'CASCADE'
    })
  };
  return Logs;
};