import React, { useState, useEffect } from "react";
import UserHeader from "./UserHeaderComponent"; // Updated Import
import PromptInput from "./PromptComponent";
import CameraPortal from "./PictureComponent";

// --- 1. THE 3D HOVER ENGINE (Unchanged)[cite: 4] ---
const Hover3DWrapper = ({ children, onClick, active }) => {
  const [isHovered, setIsHovered] = useState(false);
  const styles = {
    wrapper: {
      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      transform: isHovered || active ? "translateY(-4px) scale(1.01)" : "translateY(0) scale(1)",
      boxShadow: isHovered || active ? "0 15px 30px -12px rgba(0,0,0,0.6), 0 0 10px rgba(239, 235, 193, 0.2)" : "0 4px 6px -1px rgba(0,0,0,0.2)",
      borderRadius: "16px",
      cursor: "pointer",
      width: "100%",
      backgroundColor: active ? "#2a2a2a" : "#1e1e1e",
      border: active ? "1px solid #efebc1" : "1px solid transparent",
      marginBottom: "15px",
    },
  };
  return (
    <div style={styles.wrapper} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={onClick}>
      {children}
    </div>
  );
};

// --- 2. THE REGULAR USER DASHBOARD[cite: 4] ---
const UserDashboard = ({ setCurrentPanel }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedScan, setSelectedScan] = useState(null);
  const [history, setHistory] = useState([]);
  
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/scans/Hashim");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const data = await response.json();
        setHistory(data); // Populate the sidebar with the database results
      } catch (error) {
        console.error("Failed to load history:", error);
      }
    };
    
    fetchHistory();
  }, []);

  const styles = {
    container: { display: "flex", height: "100vh", backgroundColor: "#121212", color: "#efebc1", fontFamily: '"Courier New", Courier, monospace', overflow: "hidden" },
    sidebar: { width: isSidebarOpen ? "300px" : "0px", backgroundColor: "#0d0d0d", borderRight: "1px solid #333", transition: "width 0.3s ease", display: "flex", flexDirection: "column", padding: isSidebarOpen ? "20px" : "0px", overflowY: "auto", position: "relative" },
    mainContent: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 20px", overflowY: "auto", gap: "40px" },
    hamburger: { position: "fixed", left: isSidebarOpen ? "260px" : "20px", top: "20px", zIndex: 100, cursor: "pointer", fontSize: "24px", transition: "left 0.3s ease", backgroundColor: "#1e1e1e", padding: "10px", borderRadius: "12px", border: "1px solid #efebc1" },
  };

  return (
    <div style={styles.container}>
      {/* HAMBURGER TOGGLE */}
      <div style={styles.hamburger} onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        {isSidebarOpen ? "✕" : "☰"}
      </div>

      {/* SIDEBAR (HISTORY) */}
      <div style={styles.sidebar}>
        <h2 style={{ marginBottom: "30px", marginTop: "40px", fontSize: "1.2rem" }}>PREVIOUS CAPTURES</h2>
        {history.map((item) => (
          <Hover3DWrapper key={item._id} active={selectedScan?.id === item.id} onClick={() => setSelectedScan(item)}>
            <div style={{ padding: "15px", fontSize: "0.85rem" }}>
              <div style={{ opacity: 0.6, fontSize: "0.7rem" }}>{new Date(item.createdAt).toLocaleDateString()}</div>
              <div style={{ fontWeight: "bold" }}>{item.productName}</div>
            </div>
          </Hover3DWrapper>
        ))}
      </div>

      {/* MAIN CHAT AREA */}
      <div style={styles.mainContent}>
        <div style={{ width: "100%", maxWidth: "850px" }}>
          <Hover3DWrapper>
             {/* Use the NEW UserHeader here */}
             <UserHeader 
               title="USER PORTAL" 
               setCurrentPanel={setCurrentPanel} 
               username="HASHIM" 
             />
          </Hover3DWrapper>
        </div>

        {/* AI RESPONSE AREA */}
        <div style={{ width: "100%", maxWidth: "850px", flex: 1 }}>
          {selectedScan ? (
            <div style={{ padding: "30px", border: "1px dashed #efebc1", borderRadius: "24px", backgroundColor: "#1e1e1e" }}>
              <h3 style={{ color: "#fff" }}>{selectedScan.productName}</h3>
              <p style={{ lineHeight: "1.6" }}>{selectedScan.aiResult}</p>
              <button onClick={() => setSelectedScan(null)} style={{ background: "none", border: "1px solid #efebc1", color: "#efebc1", padding: "5px 15px", cursor: "pointer", marginTop: "20px" }}>
                Back to New Scan
              </button>
            </div>
          ) : (
            <div style={{ textAlign: "center", opacity: 0.5, marginTop: "100px" }}>
              <p>Scan a product to begin analysis...</p>
            </div>
          )}
        </div>

        {/* INPUT AREA */}
        <div style={{ width: "100%", maxWidth: "850px" }}>
          <CameraPortal />
          <div style={{ marginTop: "20px" }}>
             <Hover3DWrapper>
                <PromptInput placeholder="Ask about an ingredient..." />
             </Hover3DWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;