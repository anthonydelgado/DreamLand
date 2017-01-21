'use strict';
module.exports = function(sequelize, DataTypes) {
  var Provider = sequelize.define('Provider', {
    providerId: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Provider;
};