const ingredientsTrendsHandler = (req, res) => {
    try {
        const mockData = {
            data6M: [
                { name: 'Xanthan Gum', value: 22 },
                { name: 'Citric Acid', value: 7 },
                { name: 'Pectin', value: -12 },
                { name: 'Satra', value: 11 }
            ],
            data3M: [
                { name: 'Xanthan Gum', value: 15 },
                { name: 'Citric Acid', value: 10 },
                { name: 'Pectin', value: -5 },
                { name: 'Satra', value: 18 }
            ],
            data1M: [
                { name: 'Xanthan Gum', value: 5 },
                { name: 'Citric Acid', value: 2 },
                { name: 'Pectin', value: 20 },
                { name: 'Satra', value: 4 }
            ]
        };
        res.status(200).json(mockData);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = ingredientsTrendsHandler ;
