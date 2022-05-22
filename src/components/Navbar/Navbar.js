import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { NavContext } from "../../context/navContext";

const Navbar = () => {
  const ctx = useContext(NavContext);

  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-light"
        style={{ padding: "20", backgroundColor: ctx.color }}
      >
        <Link class="navbar-brand" to="/">
          अपराधी
        </Link>

        <button
          class="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse d-lg-flex justify-content-end"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to="/poems">
                कविता
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/shayaris">
                शायरी
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/user/home">
                कहानी
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/user/home">
                साहित्य
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/aboutMe">
                जिवन परिचय
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
