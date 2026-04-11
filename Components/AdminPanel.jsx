import React from "react";

export default function AdminPanel({ title, children }) {
    return (
        <div
            style={{
                marginTop: "20px",
                padding: "20px",
                backgroundColor: "#dddddd",
                borderRadius: "10px"
            }}
        >
            <h3>{title}</h3>
            {children} {/* dynamic content */}
        </div>
    );
}