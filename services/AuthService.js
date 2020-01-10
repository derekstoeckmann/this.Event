global.fetch = require('node-fetch');
var jwt = require('jsonwebtoken');
var jwkToPem = require('jwk-to-pem');
var request = require("request");
global.navigator = () => null;
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const poolData = {
    UserPoolId: "us-east-2_YoEWTP0N0",
    ClientId: "608f4cem4v7ao4dgmm30p5jq8q"
};

exports.Validate = function (token, callback) {
    request({
        url: `https://cognito-idp.us-east-2.amazonaws.com/us-east-2_YoEWTP0N0/.well-known/jwks.json`,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            pems = {};
            var keys = body['keys'];
            for (var i = 0; i < keys.length; i++) {
                var key_id = keys[i].kid;
                var modulus = keys[i].n;
                var exponent = keys[i].e;
                var key_type = keys[i].kty;
                var jwk = { kty: key_type, n: modulus, e: exponent };
                var pem = jwkToPem(jwk);
                pems[key_id] = pem;
            }
            var decodedJwt = jwt.decode(token, { complete: true });
            if (!decodedJwt) {
                console.log("Not a valid JWT token");
                callback(new Error('Not a valid JWT token'));
            }
            var kid = decodedJwt.header.kid;
            var pem = pems[kid];
            if (!pem) {
                console.log('Invalid token');
                callback(new Error('Invalid token'));
            }
            jwt.verify(token, pem, function (err, payload) {
                if (err) {
                    console.log("Invalid Token.");
                    callback(new Error('Invalid token'));
                } else {
                    console.log("Valid Token.");
                    callback(null, "Valid token");
                }
            });
        } else {
            console.log("Error! Unable to download JWKs");
            callback(error);
        }
    });
}