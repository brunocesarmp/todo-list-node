const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    console.log("GET Index")
    res.send("Hello TODO API version 1.0")
})

module.exports = router;