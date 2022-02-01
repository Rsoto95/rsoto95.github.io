import React from "react";
import { useState, useEffect } from "react";
import "./header.css";
import wallPaper from "./wallpaper.jpg";
import legacyLogo from "./legacyLogo.png";
import facebookLogo from "./Facebook_icon_2013.png";
import youtubeLogo from "./youtubeLogoBlack.png";
import twitchIcon from "./twitchIcon.png";
import twitterIcon from "./twitterIcon.png";
import discordIcon from "./discordIcon.png";
import hamburgerIcon from "./hamburgerIcon.png";
import loginIcon from "./Login.png"
import { Link } from "react-router-dom";

 function Header() {
 
  let navigation = () => {
    return (
      <div className="navigationContainer">
        <Link to="/" className="navigationText" onClick={()=>{setHamburger('hamburger')}} >Home</Link>
        <Link to='/about-us'className="navigationText" onClick={()=>{setHamburger('hamburger')}} >About us</Link>
        <Link to='/videos' className="navigationText" onClick={()=>{setHamburger('hamburger')}} >Videos</Link>
        <Link to='/contact-us' className="navigationText" onClick={()=>{setHamburger('hamburger')}}>Contact us</Link>
      </div>
    );
  };

   const [hamburger, setHamburger] = useState("hamburger");




  return (
    <header>
      <img className="wallPaper" src={wallPaper} />
      <img src={legacyLogo} className="legacyLogo" />
      <nav className="topNav">
        <div className="topNavigation">
        <a href="https://www.facebook.com/LegacySmashHN/" target="_blank">
          <img className="topIcon" src={facebookLogo} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCZ5HmtsUwim6bubEkSm8veg"
          target="_blank"
        >
          <img className="topIcon" src={youtubeLogo} />
        </a>
        <a href="https://www.twitch.tv/legacysmashhn" target="_blank">
          <img className="topIcon" src={twitchIcon} />
        </a>
        <a href="https://twitter.com/LegacySmashHN" target="_blank">
          <img className="topIcon" src={twitterIcon} />
        </a>
        <a href="https://discord.gg/ggBzUKzu" target="_blank">
          <img className="topIcon" src={discordIcon} />
        </a>
        
      </div>

        <Link to="/login" className="login-container" >
          <img className="loginIcon topIcon" src={loginIcon} />
          <span className="loginText">Login/Register</span>
        </Link>

              </nav>
      <nav className="navigation">{navigation()}</nav>
      <div className="hamburger-container">
        <img
          id="hamburger"
          onClick={() => {
            switch (hamburger) {
              case "hamburger":
                 setHamburger("hamburger-visible");
                break;
                ;
              case "hamburger-visible":
                 setHamburger('hamburger');
                break;

              default:
                  setHamburger('hamburger')
                break;
            }
          }}

          src={hamburgerIcon}
        />
        <nav className={hamburger}>{navigation()}</nav>
      </div>
    </header>
  );
}

 export default Header;