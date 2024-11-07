const { Router } = require("express");
const { getHistorial, postHistorial } = require("../controllers/historial");

const historial = Router();

historial.get("/", getHistorial);
historial.post("/", postHistorial);

module.exports = historial;
