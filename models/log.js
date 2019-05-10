'use strict';
module.exports = (sequelize, DataTypes) => {
  const Log = sequelize.define('Log', {
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
  Log.associate = function(models) {
    // associations can be defined here
  };
  return Log;
};