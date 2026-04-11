import React from "react";
import AdminDisplayer from "./AdminDisplayer";
import UserDisplayer from "./UserDisplayer";
import QuestDisplayer from "./QuestDisplayer";
import CompanyDisplayer from "./CompanyDisplayer";

export default class Context extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentRole: "admin"
        };
    }

    changeRole(role) {
        this.setState({ currentRole: role });
    }

    renderCurrentState() {
        switch (this.state.currentRole) {
            case "admin":
                return <AdminDisplayer />;
            case "user":
                return <UserDisplayer />;
            case "guest":
                return <QuestDisplayer />;
            case "company":
                return <CompanyDisplayer />;
            default:
                return <div>No role selected</div>;
        }
    }

    render() {
        return (
            <div>
                <div style={{ marginBottom: "20px" }}>
                    <button onClick={() => this.changeRole("guest")}>Guest</button>
                    <button onClick={() => this.changeRole("user")} style={{ marginLeft: "10px" }}>User</button>
                    <button onClick={() => this.changeRole("admin")} style={{ marginLeft: "10px" }}>Admin</button>
                    <button onClick={() => this.changeRole("company")} style={{ marginLeft: "10px" }}>Company</button>
                </div>

                {this.renderCurrentState()}
            </div>
        );
    }
}