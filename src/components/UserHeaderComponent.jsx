import React from "react";
import UserPopUp from "./UserPopUp"; // Import the user-specific popup

const UserHeader = ({
  title = "CLEAR LABEL",
  fontFamily = '"Courier New", Courier, monospace',
  textColor = "#efebc1", // Matches the dashboard text color[cite: 4]
  bgColor = "transparent", // Transparent to blend with the dashboard[cite: 4]
  setCurrentPanel = () => {},
  username = "USER"
}) => {
  const styles = {
    headerContainer: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      padding: "20px 24px",
      backgroundColor: bgColor,
      boxSizing: "border-box",
      // Subtler border for the dark dashboard theme
      borderBottom: "1px solid rgba(239, 235, 193, 0.1)", 
    },
    text3D: {
      fontFamily: fontFamily,
      fontSize: "22px",
      fontWeight: "bold",
      letterSpacing: "3px",
      color: textColor,
      margin: 0,
      textTransform: "uppercase",
      // Reusing the professional 3D shadow from GuestHeader
      textShadow:
        "1px 1px 0px rgba(255,255,255,0.1), -1px -1px 0px rgba(0,0,0,0.5), 2px 2px 4px rgba(0,0,0,0.3)",
    },
    profileWrapper: {
      position: "absolute",
      right: "24px",
      top: "50%",
      transform: "translateY(-50%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  return (
    <header style={styles.headerContainer}>
      <h1 style={styles.text3D}>{title}</h1>
      <div style={styles.profileWrapper}>
        {/* Now responsible for the UserPopUp */}
        <UserPopUp 
          setCurrentPanel={setCurrentPanel} 
          username={username} 
        />
      </div>
    </header>
  );
};

export default UserHeader;