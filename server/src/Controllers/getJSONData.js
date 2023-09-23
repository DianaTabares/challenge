const fs = require("fs");
const path = require("path");

function getJSONData(req, res) {
  try {
    const jsonFilePath = path.join(__dirname, "../datos.json");
    const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));

    res.json(jsonData);
  } catch (error) {
    console.error("Error al obtener los datos del archivo JSON:", error);
    res
      .status(500)
      .json({ error: "Error al obtener los datos del archivo JSON" });
  }
}

module.exports = {
  getJSONData,
};
