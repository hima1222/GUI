import React from 'react';
import { Link } from "react-router-dom";
import logoIcon from '../assets/logo.png';
import searchIcon from '../assets/search_icon.svg';
import premiumIcon from '../assets/premium_img.svg';
import profileIcon from '../assets/profile_icon.svg';


const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navlinks1">
          <li>
            <Link to="/Home">
              <img src={logoIcon} alt="SoulScribbles" className="logo_img" />
            </Link>
          </li>
          <li>
            <Link to="/Write" className="write">
              Write
            </Link>
          </li>
          <li>
            <Link to="/Calender" className="calender">
              Calender
            </Link>
          </li>
        </ul>
      </nav>

      <div className="search_box">
        <form className="search_form">
          <button type="submit" className="search_button">
            <img src={searchIcon} alt="search icon" className="search_img" />
          </button>
          <input type="text" placeholder="Search..." className="searchbar" />
        </form>
      </div>

      <div className="navlinks2">
        <ul className="nav_links2">
          <li>
            <button className="premium" type="button">
              <span className="premium_span">
                <img src={premiumIcon} alt="Premium" className="premium_img" />
              </span>
              Try Premium
            </button>
          </li>
          <li>
            <Link to="/Settings">
              Settings
            </Link>
          </li>
          <li>
            <Link to="/Profile">
              <img src={profileIcon} alt="Profile Info" className="profile_img" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
