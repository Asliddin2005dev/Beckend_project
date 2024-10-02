const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Tickettype = sequelize.define("Tickettype", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Tickettype.associate = (models) => {
    Tickettype.hasMany(models.Ticket, {
      foreignKey: "ticket_type",
      as: "ticket",
    });
  }

  return Tickettype;
};
