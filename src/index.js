const express = require('express');
const path = require('path');
const { isAValidCreditCard } = require('./validator');

const app = express();
const PORT = 3000;

// Serve the UI
app.use(express.static(path.join(__dirname, '../public')));

// GET /validate?cardNumber=xxxx
app.get('/validate', (req, res) => {
  const { cardNumber } = req.query;

  if (!cardNumber || !/^\d+$/.test(cardNumber)) {
    return res.status(400).json({
      valid: false,
      message: 'Please enter a numeric credit card number '
    });
  }

  const valid = isAValidCreditCard(cardNumber);
  res.json({ cardNumber, valid });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
