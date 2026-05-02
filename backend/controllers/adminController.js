const AdminAnalytics = require("../models/AdminAnalytics");

const isValidRoleType = (roleType) => {
    return roleType === "guest" || roleType === "user";
};

const getAnalyticsByRole = async (roleType) => {
    return await AdminAnalytics.findOne({ roleType });
};

const getDashboard = async (req, res) => {
    try {
        const roleType = req.query.roleType || "user";

        if (!isValidRoleType(roleType)) {
            return res.status(400).json({
                message: "roleType must be either guest or user"
            });
        }

        const analytics = await getAnalyticsByRole(roleType);

        if (!analytics) {
            return res.status(404).json({
                message: "Analytics data not found"
            });
        }

        return res.status(200).json({
            roleType: analytics.roleType,
            savedImages: analytics.savedImages,
            positiveClicks: analytics.positiveClicks,
            negativeClicks: analytics.negativeClicks,
            topIngredients: analytics.topIngredients,
            summaryInsights: analytics.summaryInsights,
            classification: analytics.classification
        });
    } catch (error) {
        return res.status(500).json({
            message: "Server error while retrieving dashboard data"
        });
    }
};

const getPositiveClicks = async (req, res) => {
    try {
        const roleType = req.query.roleType || "user";

        if (!isValidRoleType(roleType)) {
            return res.status(400).json({
                message: "roleType must be either guest or user"
            });
        }

        const analytics = await getAnalyticsByRole(roleType);

        if (!analytics) {
            return res.status(404).json({
                message: "Analytics data not found"
            });
        }

        return res.status(200).json({
            roleType: analytics.roleType,
            positiveClicks: analytics.positiveClicks,
            topIngredients: analytics.topIngredients,
            summaryInsights: analytics.summaryInsights,
            classification: analytics.classification
        });
    } catch (error) {
        return res.status(500).json({
            message: "Server error while retrieving positive clicks"
        });
    }
};

const getNegativeClicks = async (req, res) => {
    try {
        const roleType = req.query.roleType || "user";

        if (!isValidRoleType(roleType)) {
            return res.status(400).json({
                message: "roleType must be either guest or user"
            });
        }

        const analytics = await getAnalyticsByRole(roleType);

        if (!analytics) {
            return res.status(404).json({
                message: "Analytics data not found"
            });
        }

        return res.status(200).json({
            roleType: analytics.roleType,
            negativeClicks: analytics.negativeClicks,
            topIngredients: analytics.topIngredients,
            summaryInsights: analytics.summaryInsights,
            classification: analytics.classification
        });
    } catch (error) {
        return res.status(500).json({
            message: "Server error while retrieving negative clicks"
        });
    }
};

const getClassification = async (req, res) => {
    try {
        const roleType = req.query.roleType || "user";

        if (!isValidRoleType(roleType)) {
            return res.status(400).json({
                message: "roleType must be either guest or user"
            });
        }

        const analytics = await getAnalyticsByRole(roleType);

        if (!analytics) {
            return res.status(404).json({
                message: "Analytics data not found"
            });
        }

        return res.status(200).json({
            roleType: analytics.roleType,
            classification: analytics.classification
        });
    } catch (error) {
        return res.status(500).json({
            message: "Server error while retrieving classification data"
        });
    }
};

const getTopIngredients = async (req, res) => {
    try {
        const roleType = req.query.roleType || "user";

        if (!isValidRoleType(roleType)) {
            return res.status(400).json({
                message: "roleType must be either guest or user"
            });
        }

        const analytics = await getAnalyticsByRole(roleType);

        if (!analytics) {
            return res.status(404).json({
                message: "Analytics data not found"
            });
        }

        return res.status(200).json({
            roleType: analytics.roleType,
            topIngredients: analytics.topIngredients
        });
    } catch (error) {
        return res.status(500).json({
            message: "Server error while retrieving top ingredients"
        });
    }
};

module.exports = {
    getDashboard,
    getPositiveClicks,
    getNegativeClicks,
    getClassification,
    getTopIngredients
};