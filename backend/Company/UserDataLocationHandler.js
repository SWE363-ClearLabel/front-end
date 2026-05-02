const userDataLocationHandler = (req, res) => {
    try {
        const count = parseInt(req.query.count) || 1000;
        const points = [];

        for (let i = 0; i < count; i++) {
            const lat = 16 + Math.random() * (32 - 16);
            const lng = 34 + Math.random() * (55 - 34);
            points.push([lng, lat]);
        }

        res.status(200).json(points);
    } catch (error) {
        res.status(500).json({ error: "Data generation failed" });
    }
};

module.exports = userDataLocationHandler ; 
