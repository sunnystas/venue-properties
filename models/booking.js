'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define(
    'Booking',
    {
      title: DataTypes.STRING,
      propertyHereId: DataTypes.STRING,
      dateStart: DataTypes.DATEONLY,
      dateEnd: DataTypes.DATEONLY
    },
    {
      freezeTableName: true
    }
  );
  Booking.associate = function(models) {
    Booking.belongsTo(models.Property, {
      foreignKey: 'propertyId'
    });
  };
  return Booking;
};
