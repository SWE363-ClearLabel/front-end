import React, { useState , useEffect } from 'react';

const default6M = [
  { name: 'Xanthan Gum', value: 22 },
  { name: 'Citric Acid', value: 7 },
  { name: 'Pectin', value: -12 },
  { name: 'Satra', value: 11 }
];

const default3M = [
  { name: 'Xanthan Gum', value: 15 },
  { name: 'Citric Acid', value: 10 },
  { name: 'Pectin', value: -5 },
  { name: 'Satra', value: 18 }
];
const default1M = [
  { name: 'Xanthan Gum', value: 5 },
  { name: 'Citric Acid', value: 2 },
  { name: 'Pectin', value: 20 },
  { name: 'Satra', value: 4 }
];

const IngredientTrendTracker = ({ 
  
  // Style Injections
  backgroundColor = "#8b8b8b",
  textColor = "#FFFFFF",
  fontFamily = "monospace",
  accentColor = "#8AD1C2", // Color for the buttons
  negativeColor = "#FCA5A5" // For negative percentages
}) => {
  // Local state to track which duration is selected
  const [activeTab, setActiveTab] = useState('6M');
 
  const [allData, setAllData] = useState({ data6M: [], data3M: [], data1M: [] });
useEffect(() => {
    fetch('http://localhost:5000/dashBoardPanel_1/ingredientsTrend')
      .then(res => res.json())
      .then(json => setAllData(json))
      .catch(err => console.error(err));
  }, []);

  const rawData = allData[`data${activeTab}`] || [];
	const sortedData = [...rawData].sort((a, b) => b.value - a.value);
  // Logic to determine which dataset to display based on the activeTab

  const styles = {
    container: {
      backgroundColor: backgroundColor,
      color: textColor,
      fontFamily: fontFamily,
      padding: '4%',
      borderRadius: '20px',
      width: '100%',
      
      boxSizing: 'border-box'
    },
    buttonRow: {
      display: 'flex',
      width: '100%',
     justifyContent: 'flex-start',
      gap: '10px',
      marginBottom: '30px'
    },
    row: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      padding: '10px 0'
    },
   
button: (isActive) => ({
  flex: 1,
  padding: '12px 5px',
  border: 'none',
  borderRadius: '15px',
  cursor: 'pointer',
  fontFamily: fontFamily,
  fontSize: '0.9rem',
  transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)', 

  
  backgroundColor: isActive ? accentColor : 'rgba(255,255,255,0.1)',
  color: isActive ? '#000' : textColor,
  
 
  transform: isActive ? 'translateY(-4px)' : 'translateY(0)', 
  boxShadow: isActive 
    ? `0 8px 15px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.3)` 
    : 'none',
  
  outline: 'none',
}),
    list: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    },
row: {
    display: 'flex',
    justifyContent: 'space-between', 
    alignItems: 'center',
    width: '100%', 
    padding: '5px 0'
  },
    percentage: (value) => ({
      color: value >= 0 ? accentColor : negativeColor,
      fontWeight: 'bold'
    })
  };

  return (
    <div style={styles.container}>
      {/* Duration Selection Buttons */}
      <div style={styles.buttonRow}>
        {['6M', '3M', '1M'].map((period) => (
          <button 
            key={period}
            style={styles.button(activeTab === period)}
            onClick={() => setActiveTab(period)}
          >
            {period}
          </button>
        ))}
      </div>

      {/* Ingredients List */}
      <div style={styles.list}>
        {sortedData.map((item, index) => (
          <div key={index} style={styles.row}>
            <span>{item.name}</span>
            <span style={styles.percentage(item.value)}>
              {item.value > 0 ? `+${item.value}%` : `${item.value}%`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientTrendTracker;
