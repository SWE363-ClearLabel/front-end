import React from 'react';
// Import the child you already made
import IngredientTrendTracker from './IngredientTrendTracker'; 


const DashboardPanel_2 = ({ 
  title = "Analyze Ingredient preference Trends",
  backgroundColor = "#554f4fff", 
  textColor = "#FFFFFF",
  fontFamily = "monospace"
}) => {

  const styles = {
    // The 3D Container Panel
    panel: {
      backgroundColor: backgroundColor,
      color: textColor,
      fontFamily: fontFamily,
      padding: '2.5rem',
      borderRadius: '35px',
      // Dynamic width to fill the "Parent-Parent"
      width: '100%', 
      boxSizing: 'border-box',
      // 3D Shadow effect
      boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.4), -2px -2px 10px rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      display: 'flex',
      flexDirection: 'column'
    },
    headerSection: {
      marginBottom: '2rem'
    },
    titleText: {
      fontSize: '1rem', 
      fontWeight: 'normal', 
      margin: 0,
      textTransform: 'none' // Matches "Analyze Ingredient..." casing
    },
    line: {
      height: '1px',
      backgroundColor: textColor,
      opacity: 0.3,
      marginTop: '10px',
      width: '100%'
    }
  };

  return (
    <div style={styles.panel}>
      {/* 1. Header with Underline */}
      <div style={styles.headerSection}>
        <h2 style={styles.titleText}>{title}</h2>
        <div style={styles.line} />
      </div>

      {/* 2. Calling the Child Component Directly */}
      <IngredientTrendTracker />
      
    </div>
  );
};

export default DashboardPanel_2;