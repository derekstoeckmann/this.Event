var authService = require('../services/AuthService');

exports.validate_token = function (req, res) {
    authService.Validate(req.body.jwt, function (err, result) {
        if (err)
            res.send(err.message);
        res.send(result);
    })
}

