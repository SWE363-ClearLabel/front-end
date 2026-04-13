import React, { useState } from 'react';
import FlexiablePieChart from './FlexiablePieChart';
import FlexiableEngagementChart from './FlexiableEngagementChart';




const DashboardPanel_1 = ({ 
  panelTitle = "AGGREGATED ANONYMOUS INSIGHTS",
  backgroundColor = "#8b8b8b",
  textColor = "#FFFFFF",
  fontFamily  = "monospace",
  pieData = [], 
  barData = [] 
}) => {
  const [hover, setHover] = useState(false);

  const styles = {
    // Parent container is now 100% width of ITS parent
    wrapper: {
      backgroundColor: backgroundColor ,
      color: textColor,
      fontFamily: fontFamily,
      padding: '4%', // Padding is now a ratio of width
      borderRadius: '30px',
      width: '100%', 
      boxSizing: 'border-box',
      boxShadow: hover 
        ? '0 20px 40px rgba(0,0,0,0.4)' 
        : '0 10px 20px rgba(0,0,0,0.2)',
      transform: hover ? 'translateY(-5px)' : 'translateY(0)',
      transition: 'all 0.3s ease-in-out',
    },
    headerSection: {
      width: '100%',
      marginBottom: '5%' // Margin is a ratio
    },
    mainTitle: {
      fontSize: 'clamp(1rem, 2vw, 1.5rem)', // Font size scales with screen
      letterSpacing: '2px',
      margin: '0 0 10px 0',
      textTransform: 'uppercase'
    },
    horizontalLine: {
      height: '1px',
      backgroundColor: textColor,
      opacity: 0.5,
      width: '100%'
    },
    // The Grid defines the RATIO of the children
    contentGrid: {
      display: 'grid',
      // RATIO: Pie takes 1 part, Line is fixed, Bar takes 1.2 parts
      gridTemplateColumns: '1fr 1px 1.2fr', 
      gap: '5%', // Gap scales with width
      width: '100%',
      alignItems: 'center'
    },
    verticalLine: {
      backgroundColor: textColor,
      opacity: 0.3,
      height: '100%',
      minHeight: '200px' // Ensures line exists even if charts are empty
    }
  };

  return (
    <div 
      style={styles.wrapper}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={styles.headerSection}>
        <h1 style={styles.mainTitle}>{panelTitle}</h1>
        <div style={styles.horizontalLine} />
      </div>

      <div style={styles.contentGrid}>
        {/* Left Child: Takes up 1 "fractional unit" */}
        <div style={{ width: '100%' }}>
          <FlexiablePieChart 
            pieData={pieData} 
            textColor={textColor}
            fontFamily={fontFamily}
          />
        </div>

        {/* Middle: The Line */}
        <div style={styles.verticalLine} />

        {/* Right Child: Takes up 1.2 "fractional units" */}
        <div style={{ width: '100%' }}>
          <FlexiableEngagementChart 
            monthData={barData}
            backgroundColor="transparent"
            textColor={textColor}
            fontFamily={fontFamily}
            width="100%" 
            height="300px" // Bar chart height can still be fixed or vh/vw
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPanel_1;
