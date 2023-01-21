const crypto = require("crypto");

const createHash = (data, algorithm = "sha3-512") =>
  crypto.createHash(algorithm).update(data).digest("hex");

module.exports = {
  createHash
}