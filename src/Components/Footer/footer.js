import React from "react";
import "./footer.css";
import legacyLogo from "./legacyLogo.png";
import facebookLogo from "./Facebook_icon_2013.png";
import youtubeLogo from "./youtubeLogoBlack.png";
import twitchIcon from "./twitchIcon.png";
import twitterIcon from "./twitterIcon.png";
import discordIcon from "./discordIcon.png";

export function Footer() {
  return (
    <div>
      <footer>
        <div className="footerSection">
          <div className="firstLine1">
            <img src={legacyLogo} />
          </div>
          <div className="paragraph1">
            <p>Fundado en 2018</p>
          </div>
        </div>

        <div className="footerSection">
          <div className="firstLine1">
            <h2>Contact us</h2>
          </div>
          <div className="paragraph1">
            <p>
              Puedes contactarnos via correo a legacysmashsps@gmail.com{" "}
              <br></br>
              <br></br>

              Tambien puedes contactarnos via cualquiera de nuestras redes sociales
              <div className="topNavigation-2">
        <a href="https://www.facebook.com/LegacySmashHN/" target="_blank">
          <img className="bottomIcon" src={facebookLogo} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCZ5HmtsUwim6bubEkSm8veg"
          target="_blank"
        >
          <img className="bottomIcon" src={youtubeLogo} />
        </a>
        <a href="https://www.twitch.tv/legacysmashhn" target="_blank">
          <img className="bottomIcon" src={twitchIcon} />
        </a>
        <a href="https://twitter.com/LegacySmashHN" target="_blank">
          <img className="bottomIcon" src={twitterIcon} />
        </a>
        <a href="https://discord.gg/ggBzUKzu" target="_blank">
          <img className="bottomIcon" src={discordIcon} />
        </a>

  

      </div>       
            </p>
          </div>
        </div>

        <div className="footerSection">
          <div className="firstLine1">
            <h2>Quieres ir a la Smash House? </h2>
          </div>
          <div className="paragraph1">
            <p>
              <a href="https://goo.gl/maps/fXT8jjsCyWbbFkWv8" target="_blank" className="google-maps-link">
              Visitanos!
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
