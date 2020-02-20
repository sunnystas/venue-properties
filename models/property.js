'use strict';
module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define(
    'Property',
    {
      title: DataTypes.STRING,
      propertyHereId: DataTypes.STRING,
      lat: DataTypes.FLOAT,
      lng: DataTypes.FLOAT,
      address: DataTypes.STRING,
      href: DataTypes.TEXT
    },
    {
      freezeTableName: true
    }
  );
  Property.associate = function(models) {
    Property.hasMany(models.Booking, {
      foreignKey: 'propertyId'
    });
  };
  return Property;
};
