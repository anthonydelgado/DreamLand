'use strict';
module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define('Event', {
    dates: DataTypes.DATEONLY,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Event.belongsTo(models.User);
      }
    }
  });
  return Event;
};