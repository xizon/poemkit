'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.NODE_ENV = 'test';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});


//---

function sum(a, b) {
  return a + b;
}

test('1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3);
});