const express = require("express");
const router = express.Router();
const getMeetings = require("../controllers/getMeetings");

router.get("/", getMeetings);

module.exports = router;