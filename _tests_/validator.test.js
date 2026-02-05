const { isAValidCreditCard } = require('../src/validator');

test('49927398716 is valid', () => {
  expect(isAValidCreditCard('49927398716')).toBe(true);
});

test('49927398717 is invalid', () => {
  expect(isAValidCreditCard('49927398717')).toBe(false);
});

test('234567812345678 is invalid', () => {
  expect(isAValidCreditCard('234567812345678')).toBe(false);
});
test('1234567812345670 is valid', () => {
  expect(isAValidCreditCard('121234567812345670')).toBe(true);
});
test('2222405343248877 is valid', () => {
  expect(isAValidCreditCard('2222405343248877')).toBe(true);
});
test('2222990905257051 is valid', () => {
  expect(isAValidCreditCard('2222990905257051')).toBe(true);
});
