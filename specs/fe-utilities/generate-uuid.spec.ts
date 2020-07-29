import {
  generateUUID,
  uuidRegex,
} from '@terminus/fe-utilities';

const nodeCrypto = require('crypto');
(window.crypto as any) = {
  getRandomValues: buffer => nodeCrypto.randomFillSync(buffer),
};

describe(`uuid`, function() {
  const testUUIDGenerator = function(generator: () => string, iterations = 1, done: jest.DoneCallback): Promise<void> {
    const uuidStore: Record<string, string> = {};
    let i;
    let newUuid;

    for (i = 0; i < iterations; i++) {
      newUuid = generator();

      // Test Validity
      if (!uuidRegex.test(newUuid)) {
        done.fail(new Error(`Not a valid UUID: ${newUuid}`));
      }

      // Test Collision
      if (uuidStore[newUuid]) {
        done.fail(new Error(`Collision on ${newUuid}`));
      }
      uuidStore[newUuid] = newUuid;
    }

    return Promise.resolve();
  };

  test(`should create UUIDs that do not collide`, function(done) {
    testUUIDGenerator(generateUUID, 100, done).then(() => {
      done();
    });
  });
});
