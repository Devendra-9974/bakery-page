// Navbar.js
import React, { useEffect } from "react";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useUser } from './UserContext';
import { Link } from 'react-router-dom';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = ({ cartItems }) => {
  const { user } = useUser();
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <header>

      <nav>
     
        <a href="/HomePage" data-aos="fade-down" data-aos-duration="1500" >
          Home
        </a>
       

        <a href="#best-sellers" data-aos="fade-down" data-aos-duration="2500" >
          Best Sellers
        </a>
        <a href="#fearec" data-aos="fade-down" data-aos-duration="3000" >
          Featured Recipes
        </a>
        <div id="top">
          <div id="cart">
            <Link to="/cart" className="button">
              <span className="icon">
                <ShoppingCartOutlinedIcon />
              </span>
              <span className="text">Cart </span>
              {/* ({cartItems.length}) */}
            </Link>
          </div>
          <div id="account">
            {/* Display the user's name and profile picture if logged in */}
            {user.name ? (
              <Link to="/profile" className="profile-info">
                <img
                  src={user.profilePic || "/default-profile.jpg"}
                  alt="Profile"
                  className="profile-image"
                />
                <span>{user.name}</span>
              </Link>
            ) : (
              <Link to="/profile" className="button">
                <span className="icon">
                  <PersonOutlineOutlinedIcon />
                </span>
                <span className="text">Account</span>
              </Link>
            )}
          </div>

        </div>
      </nav>

    </header>
  );
};

export default Navbar;
