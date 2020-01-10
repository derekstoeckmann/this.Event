var authService = require('../Services/AuthService');

exports.validate_token = function (req, res) {
    let validate = authService.Validate(req.body.jwt, function (err, result) {
        if (err)
            res.send(err.message);
        res.send(result);
    })
}