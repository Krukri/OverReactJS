import "./project.css";
import Carousel from "react-bootstrap/Carousel";
import VsCode from "../src/img/vscode.png";
import sublime from "../src/img/sublime.png";
import phycharm from "../src/img/phycharm.png";
const Hero = () => {
  let backgroundhero = {
    background: "var(--red-900)",
    height: "90vh",
    color: "var(--text)",
    // eslint-disable-next-line no-dupe-keys
    background: "linear-gradient(#161a1d, #dee2e6)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div>
      <div className="heroSection" style={backgroundhero} id="hero">
        <h1 className="mb-5"> Some IDEs for ReactJS</h1>
        <div className="carousel-container mb-5">
          <Carousel className="carousel carousel-dark">
            <Carousel.Item>
              <img className="images" src={VsCode} alt="VS Code" fluid />
              <Carousel.Caption>
                <h3 className="carousel-title">VS CODE</h3>
                {/* <p>
                  React is a popular JavaScript library developed by Facebook
                  for building user interfaces. The Visual Studio Code editor
                  supports React.js IntelliSense and code navigation out of the
                  box
                </p> */}
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="images" src={sublime} alt="Sublime Text" />

              <Carousel.Caption>
                <h3 className="carousel-title-sub">Sublime Text</h3>
                {/* <p>
                  The tool is fast, integrated with multiple tools, and supports
                  React, React Native, and all web programming languages.
                  Sublime Text provides great plugin support to enhance the
                  capabilities of the editor.
                </p> */}
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="images" src={phycharm} alt="PyCharm" />

              <Carousel.Caption>
                <h3 className="carousel-title">PyCharm</h3>
                {/* <p>
                  PyCharm integrates with React providing assistance in
                  configuring, editing, linting, running, debugging, and
                  maintaining your applications.
                </p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Hero;
