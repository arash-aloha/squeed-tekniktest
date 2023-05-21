import { NavLink } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  return (
    <nav>
      <ul className="link-container left">
        <li className="link">
          <NavLink to={"/"}>Home</NavLink>
        </li>
      </ul>
      <ul className="link-container right">
        <li className="link">
          <NavLink to={"/users"}>Users</NavLink>
        </li>
        <li className="link">
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li className="link">
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
