const express = require("express");
const cors = require("cors");
const  flexibleEngagementChartHandler = require('./Company/FlexiableEngagementChartHandler');
const flexiablePieChartHandler = require('./Company/flexiablePieChartHandler');
const ingredientsTrendsHandler = require('./Company/IngredientsTrackers');
const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());
app.get("/dashBoardPanel_1/ingredientsTrend", ingredientsTrendsHandler);
app.get("/dashBoardPanel_1/flexiableEngagementChart", flexibleEngagementChartHandler);
app.get("/dashBoardPanel_1/flexiablePieChart" , flexiablePieChartHandler ) ; 


app.get("/hello", (req, res) => { 
  res.send("hello response"); 
});

app.get("/", (req, res) => { 
  res.send("express server"); 
});

app.listen(3000, () => { 
  console.log("Production-ready server on port 3000"); 
});
