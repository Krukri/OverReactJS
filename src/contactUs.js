import "./project.css";
import { Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

const Hero = () => {
  let backgroundContact = {
    display: "flex",
    flexDirection: "column",
    height: "35vh",
    color: "var(--black700)",
    textAlign: "center",
    background: "linear-gradient(#dee2e6, #161a1d)",
    alignItems: "center",
  };

  let contactwrapper = {
    borderRadius: "30px",
    // border: "solid 3px #161a1d",
    width: "100%",
    height: "33vh",
    alignItems: "center",
    verticalAlign: "middle",
    display: "flex",
    flexDirection: "column",
    padding: "1px",

  };
  return (
    <div>
      <div className="contactSection" style={backgroundContact} id="contact-us">
        <div className="container mb-5" style={contactwrapper}>
          <h1 className="contact-title mb-5">Contact us:</h1>
          <div className="container">
            <div className="contact-name"></div>
            <FloatingLabel
              controlId="floatingInput"
              label="Your name:"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Your Name" />
            </FloatingLabel>
          </div>
          <div className="container">
            <FloatingLabel
              controlId="floatingInput"
              label="Your Number:"
              className="mb-3"
            >
              <Form.Control type="number" placeholder="Your Number" />
            </FloatingLabel>
          </div>
          <div className="container ">
            <InputGroup className="mb-3">
              <InputGroup.Text>Tell us about your queries:</InputGroup.Text>
              <Form.Control
                as="textarea"
                aria-label="With textarea"
                className="margin-auto "
              />
            </InputGroup>
          </div>
          <div className="mb-2">
            <Button variant="light" className="btnHome">
              <a href="#nav" className="home">Home</a>
            </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
