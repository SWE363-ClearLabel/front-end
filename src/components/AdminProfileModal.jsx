import React from "react";

export default function AdminProfileModal({ show, onClose, onSignOut }) {
    if (!show) return null;

    return (
        <div
            style={{
                position: "absolute",
                top: "70px",
                right: "0",
                backgroundColor: "#2f2a2a",
                color: "#ffffff",
                padding: "18px",
                borderRadius: "22px",
                minWidth: "220px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                zIndex: 10,
                textAlign: "center"
            }}
        >
            <div
                style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    backgroundColor: "#d9d9d9",
                    margin: "0 auto 12px auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#222",
                    fontWeight: "bold"
                }}
            >
                A
            </div>

            <p style={{ margin: "0 0 14px 0", fontSize: "15px" }}>admin dashboard</p>

            <button
                onClick={onSignOut}
                style={{
                    border: "none",
                    borderRadius: "10px",
                    padding: "10px 18px",
                    backgroundColor: "#d9d9d9",
                    color: "#222",
                    cursor: "pointer",
                    fontWeight: "bold"
                }}
            >
                SIGN OUT
            </button>

            <button
                onClick={onClose}
                style={{
                    marginLeft: "10px",
                    border: "none",
                    borderRadius: "10px",
                    padding: "10px 18px",
                    backgroundColor: "#bdbdbd",
                    color: "#222",
                    cursor: "pointer"
                }}
            >
                CLOSE
            </button>
        </div>
    );
}