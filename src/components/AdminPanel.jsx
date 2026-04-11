import React from "react";

export default function AdminPanel({ title, children }) {
    return (
        <div
            style={{
                marginTop: "22px",
                padding: "24px",
                backgroundColor: "#d6d6d6",
                borderRadius: "28px",
                boxShadow: "0 8px 18px rgba(0,0,0,0.12)"
            }}
        >
            <h3
                style={{
                    marginTop: 0,
                    marginBottom: "14px",
                    fontSize: "18px",
                    color: "#333"
                }}
            >
                {title}
            </h3>

            {children}
        </div>
    );
}