const { Respuestas } = require("../db");
require("dotenv").config();

async function postBD(req, res) {
  try {
    const repuestas = await Respuestas.findAll();
    res.status(200).json(repuestas);
  } catch (error) {
    console.error(
      "Error al obtener las respuestas de la encuesta almacenadas:",
      error
    );
    res.status(500).json({
      error:
        "Ocurrió un error al obtener las respuestas de la encuesta almacenadas",
    });
  }
}

module.exports = {
  postBD,
};
