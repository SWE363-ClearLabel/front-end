// generateData.js
export const generateSaudiUserData = (count = 1000) => {
  const points = [];
  for (let i = 0; i < count; i++) {
    // Saudi Lat/Long bounds approx: 
    // Lat: 16 to 32, Long: 34 to 55
    const lat = 16 + Math.random() * (32 - 16);
    const lng = 34 + Math.random() * (55 - 34);
    points.push([lng, lat]);
  }
  return points;
};

export const userData1K = generateSaudiUserData(1000);