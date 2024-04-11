// Import necessary libraries
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Define the Navbar component
const Navbar = () => {

  // State variables for managing UI elements and user data
  const [click, setClick] = useState(false); // Tracks menu click state for responsiveness
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks login status
  const [username, setUsername] = useState(""); // Stores username if logged in
  const [email, setEmail] = useState(""); // Stores email (might not be used)
  const [showDropdown, setShowDropdown] = useState(false); // Tracks dropdown menu visibility (potential future use)

  // Function to handle menu button click - toggles menu visibility
  const handleClick = () => setClick(!click);

  // Function to handle user logout - removes session storage and reloads page
  const handleLogout = () => {
    sessionStorage.removeItem("auth-token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("phone");
    localStorage.removeItem("doctorData"); // Remove doctor data from local storage (potential future use)
    setIsLoggedIn(false);
    // setUsername(""); // Optional: Reset username on logout

    // Clear review forms from local storage (potential future use)
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("reviewFormData_")) {
        localStorage.removeItem(key);
      }
    }
    setEmail(''); // Reset email state (might not be used)
    window.location.reload();
  };

  // Function to handle potential future dropdown menu (currently unused)
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // useEffect hook to check for stored login information on component mount
  useEffect(() => {
    const storedEmail = sessionStorage.getItem("email");
    if (storedEmail) {
      setIsLoggedIn(true);
      setUsername(storedEmail);
    }
  }, []); // Empty dependency array ensures this runs only once on component mount

  // Return the JSX for the Navbar component
  return (
    <nav>
      <div className="nav__logo">
        {/* Link to home page with logo and icon */}
        <Link to="/">
          StayHealthy <i style={{ color: '#2190FF' }} className="fa fa-user-md"></i>
        </Link>
        <span>.</span>
      </div>

      {/* Hamburger menu icon for mobile responsiveness */}
      <div className="nav__icon" onClick={handleClick}>
        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
      </div>

      {/* Navigation links */}
      <ul className={click ? 'nav__links active' : 'nav__links'}>
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/search/doctors">Appointments</Link>
        </li>
        <li className="link">
          <Link to="/healthblog">Health Blog</Link>
        </li>
        <li className="link">
          <Link to="/reviews">Reviews</Link>
        </li>

        {/* Conditional rendering of login/logout based on user status */}
        {isLoggedIn ? (
          <>
            <li className="link">
              {/* Welcome message with username (first part of email) */}
              Welcome, {username.split("@")[0]}
            </li>
            <li className="link">
              <button className="btn2" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="link">
              <Link to="/signup">
                {/* Sign Up button */}
                <button className="btn1">Sign Up</button>
              </Link>
            </li>
            <li className="link">
              <Link to="/login">
                {/* Login button */}
                <button className="btn1">Login</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
