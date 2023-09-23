const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "respuestas",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      nombreCompleto: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numeroTelefonico: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fechaInicio: {
        type: DataTypes.DATE,
      },
      lenguajePreferido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      comoNoEncontraste: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subcricion: {
        type: DataTypes.BOOLEAN,
      },
    },
    { timestamps: false }
  );
};
