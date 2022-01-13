import React, { useState, Component } from "react";

class Navigation extends Component {
    render() {
        return (
            <nav>
                <div className="black-nav">
                    <div>{this.props.name}</div>
                </div>
            </nav >
        );
    }
}

export default Navigation;