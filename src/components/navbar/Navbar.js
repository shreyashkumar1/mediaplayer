import "./navbar.css";
import {NavLink}  from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <NavLink to="/">Homepage</NavLink>
          <NavLink to="/series">Series</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </div>
    </div>
    
    </div>
  );
};

export default Navbar;
