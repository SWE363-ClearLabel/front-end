
import React from 'react';
import ProfileComponent from './ProfileComponent';
import DashboardPanel_1 from './DashboardPanel_1';
import DashboardPanel_2 from './DashboardPanel_2';
import DashboardPanel_3 from './DashboardPanel_3';

// adding styles and THEME -> passed down 
// 1. THEME DEFINITION
const THEME = {
  backgroundColor: "#2e2b2bff",
  textColor: "#FFFFFF",
  fontFamily: "monospace",
  accentColor: [0, 255, 255],
  gold: "#FFD700"
};

// 2. STYLES OBJECT (Now defined so the render can see it)
const styles = {
  container: {
    width: '100vw',
    minHeight: '100vh',
    backgroundColor: '#1a1a1a', 
    color: THEME.textColor,
    fontFamily: THEME.fontFamily,
    padding: '2rem',
    boxSizing: 'border-box'
  },
  header: {
    marginBottom: '2rem',
    borderBottom: `1px solid ${THEME.backgroundColor}`
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem'
  },
  branding: {
    textAlign: 'right'
  },
  goldText: {
    color: THEME.gold,
    margin: 0,
    fontSize: '1.8rem',
    letterSpacing: '2px'
  },
  premium: {
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    verticalAlign: 'middle',
    border: `1px solid ${THEME.gold}`,
    padding: '2px 6px',
    borderRadius: '4px',
    marginLeft: '10px'
  },
  subtitle: {
    margin: 0,
    opacity: 0.6,
    fontSize: '0.7rem'
  },
  marketHeader: {
    fontSize: '1.2rem',
    fontWeight: 'normal',
    letterSpacing: '4px',
    marginTop: '1rem',
    opacity: 0.9
  },
  panelsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  topRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem'
  },
  bottomRow: {
    width: '100%',
    height: '600px', // Ensures Dashboard 3 has space to render the 3D map
    position: 'relative'
  }
};



class MainPanelCorporate extends React.Component {
  constructor(props) {
    super(props);
    // Initializing state - notice how we keep the 
    // data structure clean for the children.
    this.state = {
      portalTitle: "CLEAR LABEL",
      subtitle: "CORPORATE INSIGHTS PORTAL",
      marketHeader: "SAUDI MARKET INTELLIGENCE"
    };
  }
// <profileComponent username="Cooperate Entity" role="Market Data" isLoggedIn="true" />   these three are injected !! 


  render() {
    return (
      <div style={styles.container}>
        {/* --- HEADER SECTION --- */}
        <header style={styles.header}>
          <div style={styles.topBar}>
                <ProfileComponent 
          username = "Cooperate Entity" 
          role = "Market Data" 
          isLoggedIn = "true"
              />
            <div style={styles.branding}>
              <h1 style={styles.goldText}>{this.state.portalTitle} <span style={styles.premium}>premium</span></h1>
              <p style={styles.subtitle}>{this.state.subtitle}</p>
            </div>
          </div>
          <h2 style={styles.marketHeader}>{this.state.marketHeader}</h2>
        </header>

        {/* --- MAIN CONTENT (PANELS) --- */}
        <main style={styles.panelsContainer}>
        
<div style={styles.topRow}>
            {/* INJECTING THEME INTO CHILDREN */}
            <DashboardPanel_1 
              backgroundColor={THEME.backgroundColor}
              textColor={THEME.textColor}
              fontFamily={THEME.fontFamily}
            />
            <DashboardPanel_2 
              backgroundColor={THEME.backgroundColor}
              textColor={THEME.textColor}
              fontFamily={THEME.fontFamily}
            />
          </div>

          <div style={styles.bottomRow}>
            <DashboardPanel_3 
              backgroundColor={THEME.backgroundColor}
              textColor={THEME.textColor}
              fontFamily={THEME.fontFamily}
	    />
          </div>
	</main>
      </div>
    );
  }
}

export default MainPanelCorporate;

