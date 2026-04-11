import React from "react";
import State from "./State";
import AdminProfileModal from "./Components/AdminProfileModal";
import AdminStatCard from "./Components/AdminStatCard";
import AdminPanel from "./Components/AdminPanel";

export default class AdminDisplayer extends State {
    constructor(props) {
        super(props);

        // main admin state
        this.state = {
            showProfile: false,
            filter: "all",
            currentView: "dashboard",

            // mock data for filters
            data: {
                all: {
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
                },
                online: {
                    savedImages: 8450,
                    positiveClicks: 6210,
                    negativeClicks: 2100,
                    topIngredients: ["Pectin", "Citric Acid", "Xanthan Gum"],
                    summary: [
                        "Online users saved more scans.",
                        "Positive clicks dominate.",
                        "Moderate ingredients reviewed often."
                    ],
                    classification: {
                        safe: 48,
                        moderate: 32,
                        high: 20
                    }
                }
            }
        };
    }

    // toggle profile modal
    profileHandler() {
        this.setState({
            showProfile: !this.state.showProfile
        });
    }

    // switch filter
    setFilter(filter) {
        this.setState({
            filter: filter
        });
    }

    // change view (dashboard / detail)
    setView(view) {
        this.setState({
            currentView: view
        });
    }

    // main dashboard UI
    renderDashboard(currentData) {
        return (
            <>
                <div style={{ marginTop: "20px" }}>
                    <p>FILTER USERS</p>
                    <button onClick={() => this.setFilter("online")}>ONLINE</button>
                    <button onClick={() => this.setFilter("all")} style={{ marginLeft: "10px" }}>
                        ALL
                    </button>
                </div>

                <AdminPanel title="USER LOCATION MAP">
                    <p>Map placeholder</p>
                </AdminPanel>

                <div style={{ display: "flex", gap: "20px", marginTop: "20px", flexWrap: "wrap" }}>
                    <AdminStatCard title="SAVED IMAGES" value={currentData.savedImages} />

                    <AdminStatCard
                        title="POSITIVE CLICKS"
                        value={currentData.positiveClicks}
                        onClick={() => this.setView("positive")}
                    />

                    <AdminStatCard
                        title="NEGATIVE CLICKS"
                        value={currentData.negativeClicks}
                        onClick={() => this.setView("negative")}
                    />
                </div>
            </>
        );
    }

    // detail view for positive / negative clicks
    renderDetailView(title, totalValue, currentData) {
        return (
            <>
                <button
                    onClick={() => this.setView("dashboard")}
                    style={{ marginTop: "20px", marginBottom: "20px" }}
                >
                    BACK
                </button>

                <AdminPanel title={title}>
                    <h2>{totalValue}</h2>
                </AdminPanel>

                <AdminPanel title="TOP INGREDIENTS">
                    <ul>
                        {currentData.topIngredients.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </AdminPanel>

                <AdminPanel title="SUMMARY INSIGHTS">
                    <ul>
                        {currentData.summary.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </AdminPanel>

                <AdminPanel title="CLASSIFICATION BREAKDOWN">
                    <p>Safe: {currentData.classification.safe}%</p>
                    <p>Moderate: {currentData.classification.moderate}%</p>
                    <p>High Concern: {currentData.classification.high}%</p>
                </AdminPanel>
            </>
        );
    }

    render() {
        const currentData = this.state.data[this.state.filter];

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

                <AdminProfileModal
                    show={this.state.showProfile}
                    onClose={() => this.profileHandler()}
                    onSignOut={() => alert("Signed out")}
                />

                {this.state.currentView === "dashboard" &&
                    this.renderDashboard(currentData)}

                {this.state.currentView === "positive" &&
                    this.renderDetailView(
                        "TOTAL POSITIVE CLICKS (LAST 60 DAYS)",
                        currentData.positiveClicks,
                        currentData
                    )}

                {this.state.currentView === "negative" &&
                    this.renderDetailView(
                        "TOTAL NEGATIVE CLICKS (LAST 60 DAYS)",
                        currentData.negativeClicks,
                        currentData
                    )}
            </div>
        );
    }
}