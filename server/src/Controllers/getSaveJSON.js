const { Respuestas } = require("../db");
require("dotenv").config();

async function getSaveJSON(req, res) {
  try {
    const {
      id,
      nombreCompleto,
      numeroTelefonico,
      fechaInicio,
      lenguajePreferido,
      comoNoEncontraste,
      subcricion,
    } = req.body;
    const newResponse = await Respuestas.create({
      id,
      nombreCompleto,
      numeroTelefonico,
      fechaInicio,
      lenguajePreferido,
      comoNoEncontraste,
      subcricion,
    });
    res
      .status(200)
      .json({ message: "Respuesta de encuesta guardada con éxito" });
  } catch (error) {
    console.error(
      "Error al guardar la respuesta de la encuesta en la base de datos:",
      error
    );
    res
      .status(500)
      .json({
        error:
          "Ocurrió un error al guardar la respuesta de la encuesta en la base de datos",
      });
  }
}
module.exports = {
  getSaveJSON,
};
