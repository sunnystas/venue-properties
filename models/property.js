'use strict';
module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define(
    'Property',
    {
      title: DataTypes.STRING,
      lat: DataTypes.FLOAT,
      lng: DataTypes.FLOAT,
      address: DataTypes.STRING,
      href: DataTypes.STRING
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
