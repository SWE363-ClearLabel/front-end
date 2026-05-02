require('dotenv').config();
const mongoose = require("mongoose");
const IngredientScan = require("../models/IngredientScan");

const seedScans = async () => {
  try {
    // 1. Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB...");

    // 2. Clear out any old test data
    await IngredientScan.deleteMany({});
    console.log("Cleared old scans...");

    // 3. The Dummy Data
    const dummyScans = [
      {
        username: "Hashim",
        productName: "Oat Milk Ingredients",
        aiResult: "Mostly water and oats. Contains added sunflower oil for texture, and dipotassium phosphate as an acidity regulator. No major allergens found."
      },
      {
        username: "Hashim",
        productName: "Protein Bar",
        aiResult: "High processed sugar content. Main protein source is whey isolate. Flag: Contains soy lecithin and artificial sweeteners (sucralose)."
      }
    ];

    // 4. Insert into the database
    await IngredientScan.insertMany(dummyScans);
    console.log("Dummy scans successfully injected!");

    // 5. Disconnect
    mongoose.connection.close();
    process.exit(0);

  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedScans();