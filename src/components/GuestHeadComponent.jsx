import React from "react";
import ProfileComponent from "./ProfileComponent";
import GuestPopUp from './GuestPopUp' ;
const Header = ({
  title = "CLEAR LABEL",
  fontFamily = '"Courier New", Courier, monospace',
  textColor = "#d1d1d1",
  bgColor = "#ffffff",
}) => {
  const styles = {
    headerContainer: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      padding: "20px 24px",
      backgroundColor: bgColor, // INJECTED
      boxSizing: "border-box",
      borderBottom: "1px solid rgba(0,0,0,0.05)",
    },
    text3D: {
      fontFamily: fontFamily, // INJECTED
      fontSize: "22px",
      fontWeight: "bold",
      letterSpacing: "3px",
      color: textColor, // INJECTED
      margin: 0,
      textTransform: "uppercase",
      // Professional Tip: The shadow uses semi-transparent blacks/whites
      // so the 3D effect works regardless of the background color.
      textShadow:
        "1px 1px 0px rgba(255,255,255,0.8), -1px -1px 0px rgba(0,0,0,0.2), 2px 2px 4px rgba(0,0,0,0.1)",
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
        <GuestPopUp />
      </div>
    </header>
  );
};

export default Header;

