const mongoose = require("mongoose");

const IngredientScanSchema = new mongoose.Schema({
  // Who did the scan? 
  username: { 
    type: String, 
    required: true 
  },
  // product name
  productName: {
    type: String,
    required : true
  },
  // The simplified text returned by the AI
  aiResult: { 
    type: String, 
    required: true 
  },
  // When the scan happened
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model("IngredientScan", IngredientScanSchema);