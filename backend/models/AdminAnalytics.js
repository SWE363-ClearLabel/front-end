const mongoose = require("mongoose");

const adminAnalyticsSchema = new mongoose.Schema(
    {
        roleType: {
            type: String,
            enum: ["guest", "user"],
            required: true,
            unique: true
        },
        savedImages: {
            type: Number,
            required: true,
            default: 0
        },
        positiveClicks: {
            type: Number,
            required: true,
            default: 0
        },
        negativeClicks: {
            type: Number,
            required: true,
            default: 0
        },
        topIngredients: {
            type: [String],
            default: []
        },
        summaryInsights: {
            type: [String],
            default: []
        },
        classification: {
            safe: {
                type: Number,
                default: 0
            },
            moderate: {
                type: Number,
                default: 0
            },
            high: {
                type: Number,
                default: 0
            }
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("AdminAnalytics", adminAnalyticsSchema);