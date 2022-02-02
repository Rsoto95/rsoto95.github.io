import React from "react";
import facebookLogo from "./Facebook_icon_2013.png";
import youtubeLogo from "./youtubeLogoBlack.png";
import twitchIcon from "./twitchIcon.png";
import twitterIcon from "./twitterIcon.png";
import discordIcon from "./discordIcon.png";
import loginIcon from "./Login.png";
import { Link } from "react-router-dom";

export function Topnav() {
  return (
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

      <Link to="/login" className="login-container">
        <img className="loginIcon topIcon" src={loginIcon} />
        <span className="loginText">Login/Register</span>
      </Link>
    </nav>
  );
}
