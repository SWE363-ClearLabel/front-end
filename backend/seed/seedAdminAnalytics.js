const dotenv = require("dotenv");

const connectDB = require("../config/db");
const AdminAnalytics = require("../models/AdminAnalytics");

dotenv.config();

const seedData = async () => {
    try {
        await connectDB();

        await AdminAnalytics.deleteMany();

        await AdminAnalytics.insertMany([
            {
                roleType: "user",
                savedImages: 12654,
                positiveClicks: 9854,
                negativeClicks: 3654,
                topIngredients: ["Xanthan Gum", "Pectin", "Satra"],
                summaryInsights: [
                    "Registered users saved more scans.",
                    "Higher engagement on detailed pages.",
                    "More consistent usage patterns."
                ],
                classification: {
                    safe: 52,
                    moderate: 28,
                    high: 20
                }
            },
            {
                roleType: "guest",
                savedImages: 4300,
                positiveClicks: 2100,
                negativeClicks: 950,
                topIngredients: ["Citric Acid", "Sodium Benzoate", "Color Additives"],
                summaryInsights: [
                    "Guests interact less frequently.",
                    "Higher drop-off rate after scanning.",
                    "Less engagement with detailed info."
                ],
                classification: {
                    safe: 45,
                    moderate: 35,
                    high: 20
                }
            }
        ]);

        console.log("Admin analytics data seeded");
        process.exit();
    } catch (error) {
        console.error("Seeding failed:", error.message);
        process.exit(1);
    }
};

seedData();