import React from "react";
import "./videoPlayer.css";
import twitchLogo from "./Twitch.png"
import youtubeLogo from "./youtubeLogo.png"

export function Videoplayer() {
  return (
    <section className="video">
      <iframe
        width="700"
        height="400"
        src="https://www.youtube.com/embed/wOCMcfxpVa8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div className="videoComponent">
        <div className="videoSocial">
          <div className="videoSocial1"> <a href="https://www.twitch.tv/legacysmashhn" target="_blank" ><img className="twitchLogo" src={twitchLogo}/></a> </div>
          <div className="videoSocial2"><a href="https://www.youtube.com/channel/UCZ5HmtsUwim6bubEkSm8veg" target="_blank"><img className="youtubeLogo" src={youtubeLogo} /></a></div>
        </div>
        <div className="videoList">
          <div className="videos">Hello World</div>
          <div className="videos">Hello World</div>
          <div className="videos">Hello World</div>
          <div className="videos">Hello World</div>
          <div className="videos">Hello World</div>
          <div className="videos">Hello World</div>
          <div className="videos">Hello World</div>
          <div className="videos">Hello World</div>
          <div className="videos">Hello World</div>
          <div className="videos">Hello World</div>
        </div>
      </div>
    </section>
  );
}
