const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("calculadora", "eider", "12345678", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});
const Conexion_BD = () => {
  sequelize
    .sync()
    .then(() => console.log("conectando a la base de datos y sincronizando"))
    .catch((err) => console.log("error al conectar a la base de datos: ", err));
};

module.exports = { Conexion_BD, sequelize };
