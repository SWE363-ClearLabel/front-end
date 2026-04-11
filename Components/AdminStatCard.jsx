import React from "react";

export default function AdminStatCard({ title, value, onClick }) {
    return (
        <div
            onClick={onClick} // clickable if handler exists
            style={{
                padding: "15px",
                backgroundColor: "#f5f5f5",
                borderRadius: "10px",
                minWidth: "180px",
                cursor: onClick ? "pointer" : "default"
            }}
        >
            <h4>{title}</h4>
            <p>{value}</p>
        </div>
    );
}