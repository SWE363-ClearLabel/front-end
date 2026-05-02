const express = require("express");

const {
    getDashboard,
    getPositiveClicks,
    getNegativeClicks,
    getClassification,
    getTopIngredients
} = require("../controllers/adminController");

const router = express.Router();

router.get("/dashboard", getDashboard);
router.get("/positive-clicks", getPositiveClicks);
router.get("/negative-clicks", getNegativeClicks);
router.get("/classification", getClassification);
router.get("/top-ingredients", getTopIngredients);

module.exports = router;