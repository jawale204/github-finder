import { Routes, Route, Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";
function NavBar({ title }) {
  return (
    <div className="navbar mb-12 shadow-lg text-neutral-content bg-neutral">
      <div className="container mx-auto">
        <div className="px-2 mx-2 flex-none">
          <FaGithub className="text-3xl inline pr-2" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost bth-sm rounded-btn ">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost bth-sm rounded-btn ">
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

NavBar.defaultProps = {
  title: "Github Finder",
};

NavBar.propTypes = {
  title: PropTypes.string,
};
export default NavBar;
