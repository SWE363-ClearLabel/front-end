import React from "react";

export default function AdminProfileModal({ show, onClose, onSignOut }) {
    // hide modal if not active
    if (!show) return null;

    return (
        <div
            style={{
                marginTop: "10px",
                padding: "15px",
                backgroundColor: "#f0f0f0",
                borderRadius: "10px"
            }}
        >
            <p>Admin Profile</p>
            <button onClick={onSignOut}>SIGN OUT</button>
            <button onClick={onClose} style={{ marginLeft: "10px" }}>CLOSE</button>
        </div>
    );
}