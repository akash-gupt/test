const { createHash } = require("./util");

exports.deterministicPartitionKey = (event, {
  algorithm = "sha3-512",
  trivialPartitionKey = "0",
  maxPartitionKeyLength = 256
} = {}) => {
  let candidate;

  if (event) {
    const { partitionKey, ...rest } = event;
    const data = JSON.stringify(rest);

    if (partitionKey) {
      candidate = partitionKey;
    } else {
      candidate = createHash(data, algorithm);
    }
  }

  if (candidate) {
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }
    if (candidate.length > maxPartitionKeyLength) {
      candidate = createHash(candidate, algorithm);
    }
  }
  else {
    candidate = trivialPartitionKey;
  }

  return candidate;
};