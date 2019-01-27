import React, { Component } from "react";

class Footer extends Component {
  render() {
    const date = new Date();

    return (
      <footer className="container-fluid">
        <div className="row">
          <p style={{ margin: "auto" }}>
            Copy right © {date.getFullYear()} by NgoDat. All rights reserved
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
