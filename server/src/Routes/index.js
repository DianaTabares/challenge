const { Router } = require("express");
const router = Router();
const { getJSONData } = require("../Controllers/getJSONData");
const { getSaveJSON } = require("../Controllers/getSaveJSON");
const { postBD } = require("../Controllers/postBD");

router.get("/json", getJSONData);
router.get("/data", getSaveJSON);
router.post("/bd", postBD);

module.exports = router;
