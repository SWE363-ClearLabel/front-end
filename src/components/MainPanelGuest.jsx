import React, { useState } from "react";
import Header from "./GuestHeadComponent";
import PromptInput from "./PromptComponent";
import CameraPortal from "./PictureComponent";

// --- 1. THE 3D HOVER ENGINE (Reusable Wrapper) ---
const Hover3DWrapper = ({ children, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    wrapper: {
      // Smooth, spring-like transition
      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      // The 3D Lift: Moves up, scales slightly, and adds a deep shadow
      transform: isHovered
        ? "translateY(-8px) scale(1.02)"
        : "translateY(0) scale(1)",
      boxShadow: isHovered
        ? "0 25px 50px -12px rgba(0,0,0,0.5), 0 0 15px rgba(255, 215, 0, 0.1)" // Golden subtle glow
        : "0 10px 15px -3px rgba(0,0,0,0.1)",
      borderRadius: "24px", // Keeps the corners smooth
      cursor: onClick ? "pointer" : "default", // Only show pointer if it's clickable
      width: "100%",
      // We add a subtle background so the shadow has something solid to cast from
      backgroundColor: "#1e1e1e",
      
    },
  };

  return (
    <div
      style={styles.wrapper}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

// --- 2. THE MAIN PANEL ---
const ShowcasePanel = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const styles = {
    panelContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "50px", // THE REQUIREMENT: "Spaces between them"
      padding: "60px 20px",
      backgroundColor: "#121212", // Deep corporate dark background
      minHeight: "100vh",
	WebkitUserSelect : 'none' ,
	    MozUserSelect : 'none' ,
	    userSelect : 'none' , 
	    boxSizing: "border-box",
    },
    rowBounds: {
      width: "100%",
      maxWidth: "850px", // Keeps everything neatly aligned in the center
    },
    cameraLauncherPanel: {
      padding: "40px",
      textAlign: "center",
      color: "#efebc1",
      fontFamily: '"Courier New", Courier, monospace',
      border: "1px dashed #efebc1",
      borderRadius: "24px",
    },
  };

  return (
    <div style={styles.panelContainer}>
      {/* 1. THE HEADER */}
      <div style={{ ...styles.rowBounds, position: 'relative', zIndex: 50 }}>
        <Hover3DWrapper>
          <Header title="CLEAR LABEL" />
        </Hover3DWrapper>
      </div>

      {/* 3. THE CAMERA LAUNCHER */}
      <div style={styles.rowBounds}>
        <CameraPortal />
      </div>
      {/* 2. THE PROMPT INPUT */}
      <div style={styles.rowBounds}>
        <Hover3DWrapper>
          <PromptInput />
        </Hover3DWrapper>
      </div>

      {/* THE ACTUAL OVERLAY (Only renders if launched) */}
      {isCameraOpen && <CameraPortal onClose={() => setIsCameraOpen(false)} />}
    </div>
  );
};

export default ShowcasePanel;

