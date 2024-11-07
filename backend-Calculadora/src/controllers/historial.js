const Historial = require("../models/historial");

const getHistorial = async (_, res) => {
  try {
    console.log("get historial back");
    const historial = await Historial.findAll();
    if (historial) return res.json({ res: historial });
    res.json({ res: [], error: "no se encontro el historial" });
  } catch (error) {
    res.json({ res: [], error });
  }
};
const postHistorial = async (req, res) => {
  try {
    console.log("post historial back");

    const { primerNumero, segundoNumero, resultado, operacion } = req.body;

    if (!primerNumero || !segundoNumero || !resultado || !operacion) {
      return res.json({ res: "datos incompletos" });
    } else {
      const nuevoHistorial = await Historial.create({
        primerNumero,
        segundoNumero,
        resultado,
        operacion,
        id: crypto.randomUUID(),
      });

      return res.status(200).json({
        message: "Historial creado correctamente",
        object: nuevoHistorial,
      });
    }
  } catch (error) {
    res.status(500).json({ message: "no pudimos crear el historial", error });
  }
};

module.exports = { getHistorial, postHistorial };
