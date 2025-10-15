const express = require("express");
const router = express.Router();
const sendApplyData = require("../controllers/sendApplyData");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() }); // in-memory

router.post("/", upload.single("resume"), sendApplyData);

module.exports = router;