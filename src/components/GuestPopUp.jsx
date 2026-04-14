import React, { useState, useEffect, useRef } from "react";
import ProfileComponent from "./ProfileComponent";
import AdminDisplayer from '../AdminDisplayer' ;
import MainPanelCorporate from './MainPanelCorporate'
import UserHome from './UserHome' ;

// --- 1. THE CUSTOM HOOK (Unchanged) ---
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

// --- 2. THE UI COMPONENT ---
const GuestPopUp = ({setCurrentPanel}) => {
  const [isOpen, setIsOpen] = useState(false);

  // THE NEW ROUTER STATE: Tracks which screen the popover is showing
  const [viewMode, setViewMode] = useState("default"); // 'default' | 'login'
  // 2. NEW: State to track what the user types
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(""); // Optional: To show bad passwords
  const popoverRef = useRef();

  // Close the menu AND reset the view mode when clicking outside
  useOnClickOutside(popoverRef, () => {
    setIsOpen(false);
    // Reset view back to default after a tiny delay so it doesn't snap while closing
    setTimeout(() => setViewMode("default"), 200);
  });

  const handleLoginSubmit = () => {
    if (username === "admin" && password === "admin") {
      setErrorMsg(""); // Clear errors
      setIsOpen(false); // Optional: Close the menu on success

      // FIRE THE TRIGGER passed from the parent!
      if (setCurrentPanel) {
        setCurrentPanel(() => AdminDisplayer );
      }
    } else 
    {
	    if (username === "company" && password === "company") {
      setErrorMsg(""); // Clear errors
      setIsOpen(false); // Optional: Close the menu on success

      // FIRE THE TRIGGER passed from the parent!
      if (setCurrentPanel) {
        setCurrentPanel(() => MainPanelCorporate);
      }
    }else   {	
	if (username === "user" && password === "user" ) {

	setErrorMsg("");
		setIsOpen(false);
		if (setCurrentPanel){
			setCurrentPanel( () => UserHome ) ;
		}
	}
	    else{
      setErrorMsg("Invalid credentials.");
	    }	
    }	
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
      backgroundColor: "#8c8c8c",
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
    },
    // NEW: Styles for the input fields
    inputField: {
      width: "100%",
      padding: "12px",
      marginBottom: "12px",
      backgroundColor: "#6b6b6b", // Darker inset
      color: "#ffffff",
      border: "1px solid #5c5c5c",
      borderRadius: "8px",
      fontFamily: '"Courier New", Courier, monospace',
      fontSize: "14px",
      boxSizing: "border-box",
      outline: "none", // Removes the ugly blue web-browser outline
      boxShadow: "inset 0 2px 4px rgba(0,0,0,0.2)",
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
    // NEW: Action container for back + submit buttons
    buttonRow: {
      display: "flex",
      width: "100%",
      gap: "10px",
      marginTop: "5px",
    },
    buttonSecondary: {
      flex: 1,
      padding: "14px",
      backgroundColor: "transparent",
      color: "#e0e0e0",
      border: "1px solid #5c5c5c",
      borderRadius: "12px",
      fontFamily: '"Courier New", Courier, monospace',
      fontSize: "13px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.wrapper} ref={popoverRef}>
      <div style={styles.trigger} onClick={() => setIsOpen(!isOpen)}>
        <ProfileComponent />
      </div>

      {isOpen && (
        <div style={styles.dropdownCard}>
          {/* We keep the profile ring at the top for both views */}
          <div style={styles.profileRing}>
            <ProfileComponent />
          </div>

          {/* INTERNAL ROUTER LOGIC */}
          {viewMode === "default" ? (
            // --- VIEW 1: GUEST OVERVIEW ---
            <>
              <div style={styles.greetingText}>HI , GUEST</div>
              <button
                style={styles.buttonMain}
                onClick={() => setViewMode("login")} // Triggers the view swap
              >
                SIGN IN
              </button>
            </>
          ) : (
            // --- VIEW 2: LOGIN FORM ---
            <div style={{ width: "100%" }}>
              {/* Show an error if they type the wrong thing */}
              {errorMsg && (
                <div
                  style={{
                    color: "#ff6b6b",
                    fontSize: "12px",
                    marginBottom: "10px",
                    textAlign: "center",
                  }}
                >
                  {errorMsg}
                </div>
              )}

              <input
                type="text"
                placeholder="USERNAME"
                style={styles.inputField}
                value={username} // Bind to state
                onChange={(e) => setUsername(e.target.value)} // Update state on type
              />
              <input
                type="password"
                placeholder="PASSWORD"
                style={styles.inputField}
                onChange={(e) => setPassword(e.target.value)} // Update state on type
                value={password}
              />

              <div style={styles.buttonRow}>
                <button
                  style={styles.buttonSecondary}
                  onClick={() => {
                    setViewMode("default");
                    setErrorMsg(""); // Clear errors if they click back
                    setUsername(""); // Clear inputs
                    setPassword("");
                  }} // Navigates back
                >
                  BACK
                </button>
                <button
                  style={{ ...styles.buttonMain, flex: 2 }}
                  onClick={handleLoginSubmit}
                >
                  LOGIN
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GuestPopUp;

