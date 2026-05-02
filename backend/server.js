require("dotenv").config();

const express = require("express");
const cors = require("cors");
const  userDataLocationHandler  = require('./Company/UserDataLocationHandler');
const flexibleEngagementChartHandler =
  require("./Company/FlexiableEngagementChartHandler");

const flexiablePieChartHandler =
  require("./Company/flexiablePieChartHandler");

const ingredientsTrendsHandler =
  require("./Company/IngredientsTrackers");

const IngredientScan = require("./models/IngredientScan");

const connectDB = require("./config/db");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://clearlabel-delta.vercel.app"
  ],
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

const startServer = async () => {
  const isProd = process.env.NODE_ENV === "production";

  try {
    const uri = process.env.MONGO_URI;

    if (!uri) {
      throw new Error("MONGO_URI is missing in .env");
    }

    await connectDB();
    console.log("MongoDB connected");

  } catch (err) {
    console.error("MongoDB connection failed:", err.message);

    if (isProd) {
      console.error("Stopping server (production requires DB)");
      process.exit(1);
    }

    console.warn("Continuing in DEV mode without database");
  }

  // ===== ROUTES =====

  app.get("/dashBoardPanel_1/ingredientsTrend", ingredientsTrendsHandler);
app.get("/dashBoardPanel_3/userDataLocation", userDataLocationHandler);
  app.get(
    "/dashBoardPanel_1/flexiableEngagementChart",
    flexibleEngagementChartHandler
  );

  app.get(
    "/dashBoardPanel_1/flexiablePieChart",
    flexiablePieChartHandler
  );

  app.use("/api/admin", adminRoutes);

  app.get("/", (req, res) => {
    res.status(200).json({
      message: "Backend running (dev-safe mode)"
    });
  });

  app.get("/api/scans/:username", async (req, res) => {
    try {
      // 1. Find all scans for this user
      // 2. Sort by 'createdAt' descending (-1) so the newest is at the top
      const userScans = await IngredientScan.find({ username: req.params.username }).sort({ createdAt: -1 });
      
      // 3. Send the array of data back to React
      res.json(userScans);
    } catch (error) {
      console.error("Database fetch error:", error);
      res.status(500).json({ error: "Failed to fetch history" });
    }
  });

  app.use((req, res) => {
    res.status(404).json({
      message: "Route not found"
    });
  });

  app.use((err, req, res, next) => {
    console.error("Unhandled error:", err);
    res.status(500).json({
      message: "Internal Server Error"
    });
  });

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
