var express = require('express');
var router = express.Router();

var authController = require("../controllers/AuthController.js");

router.post('/auth/validate', authController.validate_token, (req, res) => {
    res.status(200).json({ success: true });
});

module.exports = router;