import React, { useState, useEffect, useRef } from "react";
import ProfileComponent from "./ProfileComponent"; // Your original icon component

// --- 1. THE CUSTOM HOOK (The Engine) ---
// This safely detects clicks outside of the specified referenced element.
const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      // If we click inside the ref (our popover), do nothing
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      // Otherwise, fire the handler (which will close the menu)
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // CLEANUP: Prevent memory leaks when component unmounts
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

// --- 2. THE UI COMPONENT (The View) ---
const GuestPopUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(); // Attaches to our container to track clicks

  // Bind the hook: "If they click outside my ref, close me."
  useOnClickOutside(popoverRef, () => setIsOpen(false));

  const styles = {
    wrapper: {
      position: "relative", // Crucial so the popover anchors to this exact spot
      display: "inline-block",
    },
    trigger: {
      cursor: "pointer",
    },
    dropdownCard: {
      position: "absolute",
      top: "65px", // Drops it right below the header icon
      right: "0", // Aligns to the right edge
      width: "240px",
      backgroundColor: "#8c8c8c", // The smooth grey from your image
      borderRadius: "24px",
      padding: "30px 20px",
      // The 3D Pop-out Effect
      boxShadow:
        "0px 15px 40px rgba(0,0,0,0.6), inset 0px 2px 4px rgba(255,255,255,0.1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      zIndex: 1000,
    },
    profileRing: {
      width: "70px",
      height: "70px",
      borderRadius: "50%",
      transform: "scale(1.2)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#7a7a7a",
      marginBottom: "15px",
      pointerEvents: "none",
    },
    greetingText: {
      fontFamily: '"Courier New", Courier, monospace',
      fontSize: "16px",
      color: "#ffffff",
      letterSpacing: "1.5px",
      marginBottom: "20px",
    },
    signInButton: {
      width: "100%",
      padding: "14px",
      backgroundColor: "#6b6b6b", // Darker inset grey
      color: "#ffffff",
      border: "none",
      borderRadius: "12px",
      fontFamily: '"Courier New", Courier, monospace',
      fontSize: "15px",
      fontWeight: "bold",
      letterSpacing: "1px",
      cursor: "pointer",
      // 3D Button Effect: shadow below, light inset on top
      boxShadow:
        "0 4px 6px rgba(0,0,0,0.2), inset 0 2px 5px rgba(255,255,255,0.1)",
      transition: "background-color 0.2s ease",
    },
  };

  return (
    // We attach the 'ref' here. Anything clicked outside this div triggers the close function.
    <div style={styles.wrapper} ref={popoverRef}>
      {/* 1. THE TRIGGER (Your original component) */}
      <div style={styles.trigger} onClick={() => setIsOpen(!isOpen)}>
        <ProfileComponent />
      </div>

      {/* 2. THE 3D POPOVER MENU */}
      {isOpen && (
        <div style={styles.dropdownCard}>
          <div style={styles.profileRing}>
            {/* Generic Dark User Icon */}
            <ProfileComponent />
          </div>

          <div style={styles.greetingText}>HI , GUEST</div>

          <button
            style={styles.signInButton}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#5c5c5c")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#6b6b6b")}
          >
            SIGN IN
          </button>
        </div>
      )}
    </div>
  );
};

export default GuestPopUp;

