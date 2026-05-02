import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react' ; 
/*


formate of input data 
data: [
      { name: 'Health-conscious', value: 40, color: '#A5B4FC' },
      { name: 'allergy-focused', value: 30, color: '#FCA5A5' },
      { name: 'general info', value: 30, color: '#4B5563' },
    ] 

*/
const DEFAULT_PIE_DATA = [
  { name: 'Health-conscious', value: 40, color: '#A5B4FC' },
  { name: 'allergy-focused', value: 30, color: '#FCA5A5' },
  { name: 'general info', value: 30, color: '#4B5563' },
];

function FlexiablePieChart({ 
    data = [], // Default value if prop is missing
    backgroundColor = "#8b8b8b", 
    textColor = "#FFFFFF",
    fontFamily = "monospace" 
}) {

	const [chartData, setChartData] = useState([]);

useEffect(() => {
    fetch('http://localhost:3000/dashBoardPanel_1/flexiablePieChart')
        .then(async res => {
            const text = await res.text(); // Get raw text first
            try {
                return JSON.parse(text); // Try to parse it
            } catch (err) {
                console.error("Server returned HTML instead of JSON:", text);
                throw new Error("Invalid JSON response");
            }
        })
        .then(data => setChartData(data))
        .catch(err => console.error("Fetch error:", err));
}, []);

     const config = {
    title: "USER PROFILE DISTRIBUTION",
    panelBg: "#8b8b8b",      // Background of the whole card
    textColor: "#FFFFFF",    // Color of all text
    chartInnerColor: "#000", // The color of the center hole
    data: chartData ,          // you need to inject this ..
  };
    
  const styles = {
    container: {
      backgroundColor: config.panelBg,
      padding: '2rem',
      borderRadius: '30px',
      // '100%' width makes it resizable to the parent container
      width: '100%', 
      maxWidth: '450px', // Prevents it from getting too huge on ultra-wide screens
      boxSizing: 'border-box',
      color: config.textColor,
      fontFamily: 'monospace',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    header: {
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '20px',
      fontSize: 'clamp(14px, 4vw, 18px)', // Fluid font size for mobile/desktop
      textAlign: 'center'
    },
    chartWrapper: {
      width: '100%',
      aspectRatio: '1 / 1', // Keeps it a perfect square so the circle doesn't warp
      position: 'relative',
      maxWidth: '300px'     // Limits chart size on desktop
    },
    blackCenter: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '40%', // Relative size so it scales with the chart
      height: '40%',
      backgroundColor: config.chartInnerColor,
      borderRadius: '50%'
    },
    footer: {
      marginTop: '30px',
      alignSelf: 'flex-start',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      width: '100%'
    },
    legendItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>{config.title}</h2>

      <div style={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="90%"
              paddingAngle={4}
              dataKey="value"
              stroke={config.panelBg} // Match stroke to BG for "cut-out" look
              strokeWidth={3}
            >
              {config.data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div style={styles.blackCenter} />
      </div>

      <div style={styles.footer}>
        {chartData.map((item, index) => (
          <div key={index} style={styles.legendItem}>
            <div style={{
              width: '14px', 
              height: '14px', 
              borderRadius: '50%', 
              backgroundColor: item.color 
            }} />
            <span style={{ fontSize: '1rem' }}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};



export default FlexiablePieChart ;
