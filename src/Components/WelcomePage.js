import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import demo from "./demo.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./WelcomePage.css";

class WelcomePage extends React.Component {
    render() {
        return (
          <Container>
            <Row>
              <Col xs={6}>
                <img src={demo} style={{ width: "100%" }} />
              </Col>
              <Col>
                <Row>
                  <Col className="gray-box">
                    STUDENTS LOVE LEARNING WITH SCICARDS
                  </Col>
                </Row>
                <Row>
                  <Col className="dark-box">Benefits</Col>
                  <Col className="light-box" />
                </Row>
                <Row>
                  <Col className="dark-box secondary">
                    SciCards provides teachers with an interactive tool
                    to help learn more about anatomy. SciCards can be
                    used with most devices, and allow for quick portable
                    lessons.
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row style={{ marginTop: "50px" }}>
              <Col className="dark-box alt">
                <Link style={{ color: "white" }} to="/bonecards">
                  VIEW DEMO
                </Link>
              </Col>
              <Col className="light-box alt">DO THAT</Col>
              <Col className="dark-box alt">DO THOSE</Col>
            </Row>
          </Container>
        );
    }
};

export default WelcomePage;