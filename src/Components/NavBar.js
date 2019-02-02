import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Carousel from "./Carousel";
import logo from "./white-logo.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
        <div>
          <Navbar variant="light" style={{ backgroundColor: "#ff4800" }}>
              <Link to="/">
                    <img src={logo} style={{ height: "50px", paddingRight: "30px", paddingLeft: "20px", margin: "10px" }}></img>
              </Link>
            <Nav className="mr-auto">
                <Link style={{ color: "white", paddingRight: "20px"}} to="/bonecards">
                    CARDS
                </Link>
                    <Link style={{ color: "white", paddingRight: "20px" }} to="/bonecards">
                        FAQ
                </Link>
                    <Link style={{ color: "white", paddingRight: "20px" }} to="/team">
                        ABOUT US
                </Link>
            </Nav>
          </Navbar>
        </div>
    );
  }
}

export default withRouter(NavBar);
