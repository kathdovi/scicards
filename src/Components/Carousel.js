import Carousel from "react-bootstrap/Carousel";
import React from "react";
import LeftArm from "../markers/left_arm.png";
import LeftHand from "../markers/left_hand.png";
import LeftLeg from "../markers/left_leg.png";
import LeftFoot from "../markers/left.png";
import Pelvis from "../markers/pelvis.png";
import PelvisBack from "./pelvis_back.png";
import Ribs from "../markers/ribs.png";
import RibsBack from "./ribs_back.png";
import Skull from "../markers/skull.png";
import SkullBack from "./head_back.png";
import FootBack from "./foot_back.png";
import ArmBack from "./arm_back.png";
import HandBack from "./hand_back.png";
import LegBack from "./leg_back.png";
import Flippy, { FrontSide, BackSide } from "react-flippy";


class BoneCarousel extends React.Component {
  render() {
    return (
      <div>
        <Carousel
          style={{
            width: "600px",
            height: "600px",
            margin: "auto",
          }}
        >
          <Carousel.Item>
            <Flippy
              flipOnHover={true} // default false
              flipOnClick={false} // default false
              flipDirection="horizontal" // horizontal or vertical
              ref={r => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
            >
              <FrontSide>
                <img
                  className="d-block w-100"
                  src={LeftArm}
                  alt="Left Arm"
                  style={{ width: "100%", height: "100%" }}
                />
              </FrontSide>
              <BackSide>
                <img
                  className="d-block w-100"
                  src={ArmBack}
                  alt="First slide"
                  style={{ width: "100%", height: "100%" }}
                />
              </BackSide>
            </Flippy>
          </Carousel.Item>
          <Carousel.Item>
          <Flippy
            flipOnHover={true} // default false
            flipOnClick={false} // default false
            flipDirection="horizontal" // horizontal or vertical
            ref={r => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
          // if you pass isFlipped prop component will be controlled component.
          // and other props, which will go to div
          >
            <FrontSide>
              <img
                className="d-block w-100"
                src={LeftHand}
                alt="First slide"
                style={{ width: "100%", height: "100%" }}
              />
            </FrontSide>
            <BackSide>
              <img
                className="d-block w-100"
                src={HandBack}
                alt="First slide"
                style={{ width: "100%", height: "100%" }}
              />
            </BackSide>
          </Flippy>
          </Carousel.Item>
          <Carousel.Item>
            <Flippy
              flipOnHover={true} // default false
              flipOnClick={false} // default false
              flipDirection="horizontal" // horizontal or vertical
              ref={r => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            >
              <FrontSide>
                <img
                  className="d-block w-100"
                  src={LeftLeg}
                  alt="First slide"
                  style={{ width: "100%", height: "100%" }}
                />
              </FrontSide>
              <BackSide>
                <img
                  className="d-block w-100"
                  src={LegBack}
                  alt="First slide"
                  style={{ width: "100%", height: "100%" }}
                />
              </BackSide>
            </Flippy>
          </Carousel.Item>
          <Carousel.Item>
            <Flippy
              flipOnHover={true} // default false
              flipOnClick={false} // default false
              flipDirection="horizontal" // horizontal or vertical
              ref={r => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            >
              <FrontSide>
                <img
                  className="d-block w-100"
                  src={LeftFoot}
                  alt="First slide"
                  style={{ width: "100%", height: "100%" }}
                />
              </FrontSide>
              <BackSide>
                <img
                  className="d-block w-100"
                  src={FootBack}
                  alt="First slide"
                  style={{ width: "100%", height: "100%" }}
                />
              </BackSide>
            </Flippy>
          </Carousel.Item>
          <Carousel.Item>
            <Flippy
              flipOnHover={true} // default false
              flipOnClick={false} // default false
              flipDirection="horizontal" // horizontal or vertical
              ref={r => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            >
              <FrontSide>
                <img
                  className="d-block w-100"
                  src={Pelvis}
                  alt="First slide"
                  style={{ width: "100%", height: "100%" }}
                />
              </FrontSide>
              <BackSide>
                <img
                  className="d-block w-100"
                  src={PelvisBack}
                  alt="First slide"
                  style={{ width: "100%", height: "100%" }}
                />
              </BackSide>
            </Flippy>
          </Carousel.Item>
          <Carousel.Item>
            <Flippy
              flipOnHover={true} // default false
              flipOnClick={false} // default false
              flipDirection="horizontal" // horizontal or vertical
              ref={r => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            >
              <FrontSide>
                <img
                  className="d-block w-100"
                  src={Skull}
                  alt="First slide"
                  style={{ width: "100%", height: "100%" }}
                />
              </FrontSide>
              <BackSide>
                <img
                  className="d-block w-100"
                  src={SkullBack}
                  alt="First slide"
                  style={{ width: "100%", height: "100%" }}
                />
              </BackSide>
            </Flippy>
          </Carousel.Item>
          <Carousel.Item>
            <Flippy
              flipOnHover={true} // default false
              flipOnClick={false} // default false
              flipDirection="horizontal" // horizontal or vertical
              ref={r => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            >
              <FrontSide>
                <img
                  className="d-block w-100"
                  src={Ribs}
                  alt="First slide"
                  style={{ width: "100%", height: "100%" }}
                />
              </FrontSide>
              <BackSide>
                <img
                  className="d-block w-100"
                  src={RibsBack}
                  alt="First slide"
                  style={{ width: "100%", height: "100%" }}
                />
              </BackSide>
            </Flippy>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default BoneCarousel;
