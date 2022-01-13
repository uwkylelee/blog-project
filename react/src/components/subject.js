import React, { useState, Component } from "react";

class Subject extends Component {
  render() {
    return (
      <header>
        <div className="list">
          <h3>{this.props.name}<span>👍</span>1</h3>
          <p>{this.props.sub}</p>
          <hr />
        </div>
      </header>
    );
  }
}

export default Subject;