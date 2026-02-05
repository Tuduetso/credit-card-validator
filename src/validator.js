function isAValidCreditCard(cardNumber) {
  let sum = 0;
  const length = cardNumber.length;
  const parity = length % 2;

  // loop backwards through digits of the card
  for (let i = length - 1; i >= 0; i--) {
    const currentDigit = parseInt(cardNumber[i], 10);

    if ((i + 1) % 2 === parity) {
      sum += currentDigit;
    } else if (currentDigit > 4) {
      sum += 2 * currentDigit - 9;
    } else {
      sum += 2 * currentDigit;
    }
  }

  return sum % 10 === 0;
}

module.exports = { isAValidCreditCard };
