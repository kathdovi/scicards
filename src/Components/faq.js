import React from "react";
import "./WelcomePage.css";
import Container from "react-bootstrap/Container";

class faq extends React.Component {
    render() {
        const styles = {
            borderRadius: "50%",
            height: "150px",
            marginBottom: "10px"
        };

        const pstyle = {
            textAlign: "center",
            fontSize: '17px',
        };

        return (
          <div>
            <Container>
              <div className="gray-box faq">OUR CONCEPT</div>
              <p style={{ fontSize: "20px", textAlign: "left" }}>
                SciCards is a free educational service that utilizes AR
                technology to bring concepts from science to life. A
                student needs just a cell phone or laptop webcam and a
                series of SciCards to start learning about components of
                anatomy, physiology, and more. Our introductory set of
                SciCards is an in-depth dive into the bones that make up
                the human body. With 11 different SciCards, a student
                will be able to examine bone structures on their cell
                phone or laptop webcam and test their knowledge.
              </p>
            <div className="light-box faq" style={{marginBottom: "25px"}}>FUTURE APPLICATIONS</div>
              <p style={{ fontSize: "20px", textAlign: "left" }}>
                In the future, SciCards hopes to develop tools to help
                students learn even more about anatomy. SciCards also
                hopes to expand into other areas, allowing students to
                explore science in a more hands on way — without bulky
                diagrams.
              </p>
            </Container>
          </div>
        );
    }
};

export default (faq);