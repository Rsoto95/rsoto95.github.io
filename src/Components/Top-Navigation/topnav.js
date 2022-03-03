import React, { useEffect, useState } from "react";
import facebookLogo from "./Facebook_icon_2013.png";
import youtubeLogo from "./youtubeLogoBlack.png";
import twitchIcon from "./twitchIcon.png";
import twitterIcon from "./twitterIcon.png";
import discordIcon from "./discordIcon.png";
import loginIcon from "./Login.png";
import { connect } from "react-redux";
import { changeLogin } from "../../actions/index";
import { getAuth, signOut, onAuthStateChanged } from "@firebase/auth";

function Topnav(props) {
  const [username, setUsername] = useState("LOGIN/REGISTER");

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsername(auth.currentUser.email);
      } else {
        setUsername("LOGIN/REGISTER");
      }
    });
  }, [getAuth()]);

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <nav className="topNav">
      <div className="topNavigation">
        <img src={loginIcon} className="logout-icon" onClick={logout} />
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

        <div
        className="login-container"
        onClick={() => {
          if (getAuth().currentUser == null) {
            props.changeLogin("flex");
          }
        }}
      >
        <img className="loginIcon topIcon" src={loginIcon} />
        <div className="loginText">{username}</div>
      </div>

      </div>

     
    </nav>
  );
}

const mapStateToProps = (state) => {
  return { login: state.login, selectedLogin: state.selectedLogin };
};

export default connect(mapStateToProps, { changeLogin })(Topnav);
