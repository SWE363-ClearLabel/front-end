import React from "react";
import State from "./State";
import MainPanelGuest from "./components/MainPanelGuest";
import ProfileComponent from "./components/ProfileComponent";
import AdminProfileModal from "./components/AdminProfileModal";
import AdminStatCard from "./components/AdminStatCard";
import AdminPanel from "./components/AdminPanel";

export default class AdminDisplayer extends State {
    constructor(props) {
        super(props);

        this.state = {
            showProfile: false,
            filter: "user",
            currentView: "dashboard",
            data: {
                user: {
                    savedImages: 12654,
                    positiveClicks: 9854,
                    negativeClicks: 3654,
                    topIngredients: ["Xanthan Gum", "Pectin", "Satra"],
                    summary: [
                        "Registered users saved more scans.",
                        "Higher engagement on detailed pages.",
                        "More consistent usage patterns."
                    ],
                    classification: {
                        safe: 52,
                        moderate: 28,
                        high: 20
                    }
                },
                guest: {
                    savedImages: 4300,
                    positiveClicks: 2100,
                    negativeClicks: 950,
                    topIngredients: ["Citric Acid", "Sodium Benzoate", "Color Additives"],
                    summary: [
                        "Guests interact less frequently.",
                        "Higher drop-off rate after scanning.",
                        "Less engagement with detailed info."
                    ],
                    classification: {
                        safe: 45,
                        moderate: 35,
                        high: 20
                    }
                }
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

    setView(view) {
        this.setState({
            currentView: view
        });
    }

    handleSignOut() {
        if (this.props.setCurrentPanel) {
            this.props.setCurrentPanel(MainPanelGuest);
        }
    }

    renderFilterButtons() {
        return (
            <div style={{ marginTop: "20px" }}>
                <p style={{ marginBottom: "10px", fontWeight: "bold", color: "#333" }}>
                    FILTER USERS
                </p>

                <button
                    onClick={() => this.setFilter("guest")}
                    style={{
                        border: "none",
                        borderRadius: "20px",
                        padding: "9px 18px",
                        backgroundColor: this.state.filter === "guest" ? "#b8b8b8" : "#ececec",
                        color: "#222",
                        cursor: "pointer",
                        fontWeight: "bold"
                    }}
                >
                    GUEST
                </button>

                <button
                    onClick={() => this.setFilter("user")}
                    style={{
                        marginLeft: "10px",
                        border: "none",
                        borderRadius: "20px",
                        padding: "9px 18px",
                        backgroundColor: this.state.filter === "user" ? "#b8b8b8" : "#ececec",
                        color: "#222",
                        cursor: "pointer",
                        fontWeight: "bold"
                    }}
                >
                    USER
                </button>
            </div>
        );
    }

    renderDashboard(currentData) {
        return (
            <>
                {this.renderFilterButtons()}

                <AdminPanel title="USER LOCATION MAP">
                    <div
                        style={{
                            height: "230px",
                            borderRadius: "20px",
                            backgroundColor: "#efefef",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#666",
                            fontSize: "18px"
                        }}
                    >
                        Map placeholder
                    </div>
                </AdminPanel>

                <div
                    style={{
                        display: "flex",
                        gap: "18px",
                        marginTop: "22px",
                        flexWrap: "wrap"
                    }}
                >
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

    renderDetailView(title, totalValue, currentData) {
        return (
            <>
                <button
                    onClick={() => this.setView("dashboard")}
                    style={{
                        marginTop: "20px",
                        marginBottom: "10px",
                        border: "none",
                        borderRadius: "16px",
                        padding: "10px 18px",
                        backgroundColor: "#d9d9d9",
                        cursor: "pointer",
                        fontWeight: "bold"
                    }}
                >
                    BACK
                </button>

                <AdminPanel title={title}>
                    <div
                        style={{
                            fontSize: "42px",
                            fontWeight: "bold",
                            color: "#222"
                        }}
                    >
                        {totalValue}
                    </div>
                </AdminPanel>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "20px"
                    }}
                >
                    <AdminPanel title="TOP INGREDIENTS">
                        <ul style={{ margin: 0, paddingLeft: "20px", color: "#222", lineHeight: "1.9" }}>
                            {currentData.topIngredients.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </AdminPanel>

                    <AdminPanel title="SUMMARY INSIGHTS">
                        <ul style={{ margin: 0, paddingLeft: "20px", color: "#222", lineHeight: "1.9" }}>
                            {currentData.summary.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </AdminPanel>
                </div>

                <AdminPanel title="CLASSIFICATION BREAKDOWN">
                    <div style={{ color: "#222", lineHeight: "2" }}>
                        <p style={{ margin: 0 }}>Safe: {currentData.classification.safe}%</p>
                        <p style={{ margin: 0 }}>Moderate: {currentData.classification.moderate}%</p>
                        <p style={{ margin: 0 }}>High Concern: {currentData.classification.high}%</p>
                    </div>
                </AdminPanel>
            </>
        );
    }

    render() {
        const currentData = this.state.data[this.state.filter];

        return (
            <div
                style={{
                    backgroundColor: "#f4f1eb",
                    minHeight: "100vh",
                    padding: "30px"
                }}
            >
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        fontFamily: "Arial, sans-serif",
                        position: "relative"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <div>
                            <h2 style={{ margin: 0, color: "#222" }}>CLEAR LABEL</h2>
                            <p style={{ margin: "6px 0 0 0", color: "#555" }}>admin dashboard</p>
                        </div>

                        <div
                            onClick={() => this.profileHandler()}
                            style={{ cursor: "pointer" }}
                        >
                            <ProfileComponent
                                username="ADMIN"
                                role="admin dashboard"
                                isLoggedIn={true}
                            />
                        </div>
                    </div>

                    <AdminProfileModal
                        show={this.state.showProfile}
                        onClose={() => this.profileHandler()}
                        onSignOut={() => this.handleSignOut()}
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
            </div>
        );
    }
}