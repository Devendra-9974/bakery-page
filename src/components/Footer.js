import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <img src="https://img.freepik.com/premium-vector/bakery-logo-design_260747-392.jpg" alt="Bakery Logo"/>
        </div>

        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: info@randombakers.com</p>
          <p>Phone: +91 92609 48342, +91 98893 76318</p>
          <p>Address: Random Bakers, Post Khamaria, Jabalpur, Madhya Pradesh 482005</p>
        </div>

        <div className="footer-info">
          <p>© 2025 Mumma's Bakery. All rights reserved.</p>
          <p>Follow us on social media to stay updated on new arrivals, exclusive offers, and more!</p>
          <p>
            Follow us on:
            <a href="https://www.youtube.com/@pvmummasbakery" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a> | 
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a> | 
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
