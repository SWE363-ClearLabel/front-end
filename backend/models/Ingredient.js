const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
  jargon: [String],
  location: String,
  userGuest: String,
  monthYear: String
});

module.exports = mongoose.model('Ingredient', IngredientSchema);
