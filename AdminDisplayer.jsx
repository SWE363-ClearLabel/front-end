import React from "react";
import State from "./State";

export default class AdminDisplayer extends State {
    constructor(props) {
        super(props);

        this.state = {
            showProfile: false,
            filter: "all",
            savedImages: 12654,
            positiveClicks: 9854,
            negativeClicks: 3654,
            topIngredients: ["Xanthan Gum", "Pectin", "Satra"],
            summary: [
                "Most users marked stabilizers as safe.",
                "Some flagged synthetic additives.",
                "Saved scans increased."
            ],
            classification: {
                safe: 52,
                moderate: 28,
                high: 20
            }
        };
    }

    profileHandler() {
        this.setState({
            showProfile: !this.state.showProfile
        });
    }

    setFilter(filter) {
        this.setState({
            filter: filter
        });
    }

    render() {
        return (
            <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <h2>CLEAR LABEL</h2>
                        <p>admin dashboard</p>
                    </div>

                    <button onClick={() => this.profileHandler()}>
                        PROFILE
                    </button>
                </div>

                {this.state.showProfile && (
                    <div
                        style={{
                            marginTop: "10px",
                            padding: "15px",
                            backgroundColor: "#f0f0f0",
                            borderRadius: "10px"
                        }}
                    >
                        <p>Admin Profile</p>
                        <button onClick={() => alert("Signed out")}>SIGN OUT</button>
                    </div>
                )}

                <div style={{ marginTop: "20px" }}>
                    <p>FILTER USERS</p>
                    <button onClick={() => this.setFilter("online")}>ONLINE</button>
                    <button onClick={() => this.setFilter("all")} style={{ marginLeft: "10px" }}>
                        ALL
                    </button>
                </div>

                <div
                    style={{
                        marginTop: "20px",
                        padding: "20px",
                        backgroundColor: "#dddddd",
                        borderRadius: "10px"
                    }}
                >
                    <h3>USER LOCATION MAP</h3>
                    <p>Map placeholder</p>
                </div>

                <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
                    <div style={{ padding: "15px", backgroundColor: "#f5f5f5", borderRadius: "10px" }}>
                        <h4>SAVED IMAGES</h4>
                        <p>{this.state.savedImages}</p>
                    </div>

                    <div style={{ padding: "15px", backgroundColor: "#f5f5f5", borderRadius: "10px" }}>
                        <h4>POSITIVE CLICKS</h4>
                        <p>{this.state.positiveClicks}</p>
                    </div>

                    <div style={{ padding: "15px", backgroundColor: "#f5f5f5", borderRadius: "10px" }}>
                        <h4>NEGATIVE CLICKS</h4>
                        <p>{this.state.negativeClicks}</p>
                    </div>
                </div>

                <div style={{ marginTop: "20px" }}>
                    <h3>TOP INGREDIENTS</h3>
                    <ul>
                        {this.state.topIngredients.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div style={{ marginTop: "20px" }}>
                    <h3>SUMMARY INSIGHTS</h3>
                    <ul>
                        {this.state.summary.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div style={{ marginTop: "20px" }}>
                    <h3>CLASSIFICATION BREAKDOWN</h3>
                    <p>Safe: {this.state.classification.safe}%</p>
                    <p>Moderate: {this.state.classification.moderate}%</p>
                    <p>High Concern: {this.state.classification.high}%</p>
                </div>
            </div>
        );
    }
}