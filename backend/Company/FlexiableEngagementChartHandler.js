const defaultData = [
    { month: 1, value: 20 }, { month: 2, value: 35 }, { month: 3, value: 45 },
    { month: 4, value: 60 }, { month: 5, value: 55 }, { month: 6, value: 80 },
    { month: 7, value: 95 }, { month: 8, value: 70 }, { month: 9, value: 85 },
    { month: 10, value: 110 }, { month: 11, value: 100 }, { month: 12, value: 120 }
];

const flexiableEngagementChartHandler = (req, res) => {
    try {
        if (defaultData.length < 2) {
            return res.json({ growthValue: 0, monthData: defaultData });
        }

        const current = defaultData[defaultData.length - 1].value;
        const previous = defaultData[defaultData.length - 2].value;
        
        const growthValue = ((current - previous) / previous) * 100;

	console.log("Server has send to flexiableEngagementChart...");
        res.status(200).json({
            growthValue: Math.round(growthValue),
            monthData: defaultData
        });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = flexiableEngagementChartHandler;
