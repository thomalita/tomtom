'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Anime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Anime.hasMany(models.Character, {
        as: 'character',
        foreignKey: 'characterId'
      })
    }
  }
  Anime.init({
    details: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Anime',
    tableName: 'animes'
  });
  return Anime;
};