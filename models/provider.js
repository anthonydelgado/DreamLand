'use strict';
module.exports = function(sequelize, DataTypes) {
  var Provider = sequelize.define('Provider', {
    providerId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Provider.hasMany(models.Review);
      }
    }
  });
  return Provider;
};