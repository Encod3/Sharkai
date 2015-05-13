/*
 * This file is for calculations used to verify nodes and calculate routes
 */

var crypto = require("crypto");

var exports = module.exports;

exports.getNodeHash = function(ip_address) {
    var sha256 = crypto.createHash("sha256");
    sha256.update(ip_address, "utf8");
    return sha256.digest("base64");
};

exports.getBinaryFromBase64 = function(base64) {
    return new Buffer(base64, 'base64');
};