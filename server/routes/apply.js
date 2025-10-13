const express = require("express");
const router = express.Router();
const sendApplyData = require("../controllers/sendApplyData");

router.post("/", sendApplyData);

module.exports = router;