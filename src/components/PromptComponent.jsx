import React, { useState } from "react";

const PromptInput = () => {
  const [inputText, setInputText] = useState("");

  const styles = {
    wrapper: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#282a2c", // Dark gray pill background
      borderRadius: "30px",
      padding: "8px 12px 8px 20px",
      width: "100%",
      maxWidth: "800px",
      boxSizing: "border-box",
    },
    plusButton: {
      background: "none",
      border: "none",
      color: "#c4c7c5",
      fontSize: "28px",
      fontWeight: "300",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 8px 0 0",
      lineHeight: "1",
    },
    inputField: {
      flex: 1,
      backgroundColor: "transparent",
      border: "none",
      color: "#e3e3e3",
      fontSize: "16px",
      outline: "none",
      padding: "0 12px",
      fontFamily: "inherit",
    },
    rightControls: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    micButton: {
      background: "none",
      border: "none",
      color: "#c4c7c5",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "4px",
    },
    voiceButton: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      backgroundColor: "#3c3e40", // Lighter gray for the button
      border: "none",
      borderRadius: "20px",
      color: "#e3e3e3",
      padding: "8px 16px",
      fontSize: "14px",
      fontWeight: "500",
      cursor: "pointer",
      transition: "background-color 0.2s ease",
    },
  };

  return (
    <div style={styles.wrapper}>
      {/* 1. Left Plus Button */}
      <button style={styles.plusButton}>+</button>

      {/* 2. Main Text Input */}
      <input
        style={styles.inputField}
        type="text"
        placeholder="Ask anything"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      {/* 3. Right Side Controls */}
      <div style={styles.rightControls}>
        {/* Microphone Icon */}
        <button style={styles.micButton} title="Use Microphone">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.39-.9.88 0 2.76-2.34 5.12-5.01 5.12-2.66 0-5.01-2.36-5.01-5.12 0-.49-.41-.88-.9-.88-.49 0-.88.39-.88.88 0 3.16 2.45 5.8 5.53 6.22V21c0 .55.45 1 1 1s1-.45 1-1v-2.9c3.08-.42 5.53-3.06 5.53-6.22 0-.49-.39-.88-.88-.88z" />
          </svg>
        </button>

        {/* Voice Mode Button with Soundwave Icon */}
        <button style={styles.voiceButton}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <rect x="7" y="9" width="2" height="6" rx="1" />
            <rect x="11" y="4" width="2" height="16" rx="1" />
            <rect x="15" y="7" width="2" height="10" rx="1" />
          </svg>
          Voice
        </button>
      </div>
    </div>
  );
};

export default PromptInput;

