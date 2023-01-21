const crypto = require("crypto");
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("should return the partitionKey if it is present in the event", () => {
    const event = { partitionKey: "test-partition-key" };
    expect(deterministicPartitionKey(event)).toBe("test-partition-key");
  });

  it("should return a deterministic hash of the event if no partitionKey is present", () => {
    const event = { test: "data" };
    const data = JSON.stringify(event);
    const hash = crypto.createHash("sha3-512").update(data).digest("hex");
    expect(deterministicPartitionKey(event)).toBe(hash);
  });

  it("should return '0' if no event is passed", () => {
    expect(deterministicPartitionKey()).toBe("0");
  });

  it("should return a deterministic hash if partitionKey is more than 256 characters", () => {
    const event = { partitionKey: "a".repeat(300) };
    const partitionKey = "a".repeat(300);
    const hash = crypto.createHash("sha3-512").update(partitionKey).digest("hex");
    expect(deterministicPartitionKey(event)).toBe(hash);
  });
});
