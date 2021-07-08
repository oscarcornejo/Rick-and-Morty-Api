import PropTypes from "prop-types";

import { Link } from "react-router-dom";

// Scss
import "./Navbar.scss";

const Navbar = ({ title = "" }) => {
  return (
    <nav className="navbar">
      <div>
        <Link className="navbar__brand" to="/">
          {title}
        </Link>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
