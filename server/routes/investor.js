const express = require("express");
const router = express.Router();
const sendInvestor = require("../controllers/sendInvestor");

router.post("/", sendInvestor);

module.exports = router;