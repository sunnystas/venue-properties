'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define(
    'Booking',
    {
      title: DataTypes.STRING,
      dateStart: DataTypes.DATE,
      dateEnd: DataTypes.DATE
    },
    {
      freezeTableName: true
    }
  );
  Booking.associate = function(models) {
    Booking.belongsTo(models.Property);
  };
  return Booking;
};
