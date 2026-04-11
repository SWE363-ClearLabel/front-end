
import React from 'react';
import ProfileComponent from './ProfileComponent';
import DashboardPanel_1 from './DashboardPanel_1';
import DashboardPanel_2 from './DashboardPanel_2';
import DashboardPanel_3 from './DashboardPanel_3';





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
          <DashboardPanel_1 />
          <DashboardPanel_2 />
          <DashboardPanel_3 />
        </main>
      </div>
    );
  }
}

export default MainPanelCorporate;

