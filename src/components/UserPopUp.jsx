import React, { useState, useEffect, useRef } from "react";
import ProfileComponent from "./ProfileComponent";
import MainPanelGuest from "./MainPanelGuest"; // Import the guest display

// --- 1. THE CUSTOM HOOK (Unchanged from GuestPopUp.jsx) ---
const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

// --- 2. THE UI COMPONENT (Adapted for Logged-In User) ---
const UserPopUp = ({ setCurrentPanel, username = "USER" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef();

  // Close the menu when clicking outside
  useOnClickOutside(popoverRef, () => {
    setIsOpen(false);
  });

  const handleSignOut = () => {
    setIsOpen(false); // Close the menu on success

    // FIRE THE TRIGGER to return to the Guest Display!
    if (setCurrentPanel) {
      setCurrentPanel(() => MainPanelGuest);
    }
  };

  const styles = {
    wrapper: { position: "relative", display: "inline-block" },
    trigger: { cursor: "pointer" },
    dropdownCard: {
      position: "absolute",
      top: "65px",
      right: "0",
      width: "240px",
      backgroundColor: "#8c8c8c", // Reused styling from GuestPopUp.jsx
      borderRadius: "24px",
      padding: "30px 20px",
      boxShadow:
        "0px 15px 40px rgba(0,0,0,0.6), inset 0px 2px 4px rgba(255,255,255,0.1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      zIndex: 1000,
    },
    profileRing: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "15px",
      transform: "scale(1.5)",
      pointerEvents: "none",
    },
    greetingText: {
      fontFamily: '"Courier New", Courier, monospace',
      fontSize: "16px",
      color: "#ffffff",
      letterSpacing: "1.5px",
      marginBottom: "20px",
      textAlign: "center",
      fontWeight: "bold",
    },
    buttonMain: {
      width: "100%",
      padding: "14px",
      backgroundColor: "#5c5c5c",
      color: "#ffffff",
      border: "none",
      borderRadius: "12px",
      fontFamily: '"Courier New", Courier, monospace',
      fontSize: "15px",
      fontWeight: "bold",
      letterSpacing: "1px",
      cursor: "pointer",
      boxShadow:
        "0 4px 6px rgba(0,0,0,0.2), inset 0 2px 5px rgba(255,255,255,0.1)",
      transition: "background-color 0.2s ease",
    },
  };

  return (
    <div style={styles.wrapper} ref={popoverRef}>
      {/* Clickable Profile Trigger */}
      <div style={styles.trigger} onClick={() => setIsOpen(!isOpen)}>
        <ProfileComponent />
      </div>

      {isOpen && (
        <div style={styles.dropdownCard}>
          {/* We keep the profile ring at the top */}
          <div style={styles.profileRing}>
            <ProfileComponent />
          </div>

          {/* New User View Logic */}
          <div style={{ width: "100%" }}>
            {/* Display "Hello {username}" using monospace font and spacing from GuestPopUp.jsx */}
            <div style={styles.greetingText}>HELLO, {username}</div>

            {/* Singular Sign Out Button, using buttonMain styling from GuestPopUp.jsx */}
            <button
              style={styles.buttonMain}
              onClick={handleSignOut}
            >
              SIGN OUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPopUp;