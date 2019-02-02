import Carousel from "react-bootstrap/Carousel";
import React from "react";
import LeftArm from "../markers/left_arm.png";
import RightArm from "../markers/right_arm.png";
import LeftHand from "../markers/left_hand.png";
import RightHand from "../markers/right_hand.png";
import LeftLeg from "../markers/left_leg.png";
import RightLeg from "../markers/right_leg.png";
import LeftFoot from "../markers/left.png";
import RightFoot from "../markers/right.png";
import Pelvis from "../markers/pelvis.png";
import Ribs from "../markers/ribs.png";
import Skull from "../markers/skull.png";
import Back from "./back.png";
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
                  src={Back}
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
                  src={RightArm}
                  alt="First slide"
                  style={{ width: "100%", height: "100%" }}
                />
              </FrontSide>
              <BackSide>
                <img
                  className="d-block w-100"
                  src={Back}
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
                src={Back}
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
                  src={RightHand}
                  alt="First slide"
                  style={{ width: "100%", height: "100%" }}
                />
              </FrontSide>
              <BackSide>
                <img
                  className="d-block w-100"
                  src={Back}
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
                  src={Back}
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
                  src={RightLeg}
                  alt="First slide"
                  style={{ width: "100%", height: "100%" }}
                />
              </FrontSide>
              <BackSide>
                <img
                  className="d-block w-100"
                  src={Back}
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
                  src={Back}
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
                  src={RightFoot}
                  alt="First slide"
                  style={{ width: "100%", height: "100%" }}
                />
              </FrontSide>
              <BackSide>
                <img
                  className="d-block w-100"
                  src={Back}
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
                  src={Back}
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
                  src={Back}
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
                  src={Back}
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
