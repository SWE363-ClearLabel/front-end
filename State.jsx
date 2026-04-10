import React from "react";

// abstract class
class State extends React.Component {
    // all the actions for every concrete state will be defined here

    // one action is the clicking of PROFILE icon
    profileHandler() {
        throw new Error("Method 'profileHandler()' must be implemented.");
    }

    render() {
        throw new Error("Method 'render()' must be implemented.");
    }
}

export default State;