import { NavLink } from "react-bootstrap";
import "./project.css";
const NavbarSection = () => {
  let navStyle = {
    height: "10rem",
    width: "100%",
    color: "var(--text)",
    display: "flex",
    justifyContent: "space-around",
    fontSize: "1.25rem",
    margin: "auto"
  };
  let ul = {
    listStyle: "none",
    display: "flex",
    gap: "2rem",
  };

  return (
    <navbar>
      <div
        className="container-fluid bg-dark"
        style={navStyle}
        aria-controls="basic-navbar-nav"
        id="nav"
      >
        <h1 className="navname align-items-center margin-auto ">
          <img src="" alt="" />
          <NavLink href="../index.html" className="titleNav">
            <div className="over">Over</div>
            <div>ReactJS</div>
          </NavLink>
        </h1>
        <div className="nav-list">
          <ul style={ul}>
            <li>
              <NavLink href="#nav">Home</NavLink>
            </li>
            <li>
              <NavLink href="#">Profile</NavLink>
            </li>
            <li>
              <NavLink href="#">Settings</NavLink>
            </li>
            <li>
              <NavLink href="#">About Us</NavLink>
            </li>
            <li>
              <NavLink href="#contact-us">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </navbar>
  );
};

export default NavbarSection;
