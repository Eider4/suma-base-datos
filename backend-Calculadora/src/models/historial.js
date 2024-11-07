const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Historial = sequelize.define(
  "Historial",
  {
    id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
    },
    primerNumero: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    segundoNumero: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    operacion: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    resultado: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "historial", // Nombre de la tabla en la base de datos
    timestamps: false, // Si quieres evitar columnas 'createdAt' y 'updatedAt'
  }
);

module.exports = Historial;
