import React from "react";

export default function AdminStatCard({ title, value, onClick }) {
    return (
        <div
            onClick={onClick}
            style={{
                backgroundColor: "#e4e4e4",
                borderRadius: "20px",
                padding: "18px",
                minWidth: "180px",
                flex: "1",
                boxShadow: "0 6px 14px rgba(0,0,0,0.12)",
                cursor: onClick ? "pointer" : "default",
                textAlign: "center"
            }}
        >
            <h4
                style={{
                    margin: "0 0 10px 0",
                    fontSize: "14px",
                    color: "#444"
                }}
            >
                {title}
            </h4>

            <p
                style={{
                    margin: 0,
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: "#222"
                }}
            >
                {value}
            </p>
        </div>
    );
}