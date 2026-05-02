const flexiablePieChartHandler = (req, res) => {
    try {
        const pieData = [
            { name: 'Health-conscious', value: 45, color: '#A5B4FC' },
            { name: 'allergy-focused', value: 25, color: '#FCA5A5' },
            { name: 'general info', value: 30, color: '#4B5563' },
        ];
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(pieData);
    } catch (error) {
        res.status(500).json({ error: "Failed to compute chart data" });
    }
};

module.exports =  flexiablePieChartHandler ;
