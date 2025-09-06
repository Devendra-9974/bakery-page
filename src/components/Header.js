import "./Header.css";
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useUser } from './UserContext'; // Import the custom hook
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Navbar from "./navbar";
const Header = ({ cartItems }) => {
  const { user } = useUser(); // Access user data

  return (
    <header id="Head">
      <div id="block">
      <div  id="header-content"> {/* Main flex container */}
        <div id="logo">
           <a data-aos="fade-down" data-aos-duration="3000" href="#">
          <img
            src="https://img.freepik.com/premium-vector/bakery-logo-design_260747-392.jpg"
            alt="Bakery Logo"
          />
          </a>
          <a data-aos="fade-down" data-aos-duration="3000" href="#">Mumma's Bakery</a>
        </div>
        
      </div>
<Navbar />
</div>
    </header>
    
  );
};

export default Header;
