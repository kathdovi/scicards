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
              <h1 style={{ marginBottom: "25px" }}>
                {" "}
                Frequently Asked Questions{" "}
              </h1>
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
              <div
                className="light-box faq"
                style={{ marginBottom: "25px" }}
              >
                FUTURE APPLICATIONS
              </div>
              <p style={{ fontSize: "20px", textAlign: "left" }}>
                In the future, SciCards hopes to develop tools to help
                students learn even more about anatomy. SciCards also
                hopes to expand into other areas, allowing students to
                explore science in a more hands on way — without bulky
                diagrams.
              </p>
              <div className="gray-box faq">WHY ANATOMY?</div>
              <p style={{ fontSize: "20px", textAlign: "left" }}>
                The United States is projected to experience a shortage
                of doctors in the near future, and SciCards believes
                that making more accessible learning study tools will
                give more students the chance to pursue careers in the
                medical field. However, SciCards hopes to expand beyond
                just anatomy though, and move onto cell biology, botany,
                and other heavily visual science topics.
              </p>
              <div
                className="light-box faq"
                style={{ marginBottom: "25px" }}
              >
                WHAT IS AR?
              </div>
              <p style={{ fontSize: "20px", textAlign: "left" }}>
                AR, or Augmented Reality is when technology is used to
                overlay digital images over the real world. This allows
                you to explore visual topics in a more interactive and
                immersive format.
              </p>
              <div className="gray-box faq">
                HOW CAN I USE SCICARDS?
              </div>
              <p style={{ fontSize: "20px", textAlign: "left" }}>
                SciCards can be used almost anywhere. All you need to
                use SciCards are two devices, one with a camera. This
                means that you can take SciCards wherever you want,
                allowing students to explore without hard to find
                equipment. We hope that SciCards will be used at home
                and in classrooms alike.
              </p>
            </Container>
          </div>
        );
    }
};

export default (faq);