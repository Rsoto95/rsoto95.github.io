import React from "react";
import "./videoPlayer.css";
import twitchLogo from "./Twitch.png";
import youtubeLogo from "./youtubeLogo.png";
import playListLogo from "./playlistLogo.png";
import { connect } from "react-redux";
import { changeVideo } from "../../actions";

function Videoplayer(props) {

  console.log(props)


  let renderVideos = () => {
    return props.video[0].items.map((videoName) => {
      return (
        <div className="videos">
          <img
            key={videoName.snippet.title}
            onClick={() => {
              props.changeVideo(videoName.id.videoId);
            }}
            className="videoImage"
            src={videoName.snippet.thumbnails.high.url}
          />
          <h4>{videoName.snippet.title}</h4>
        </div>
      );
    });
  };

  return (
    <section className="video">
      <iframe
        className="youtubeVideoPlayer"
        width="700"
        height="400"
        src={`https://www.youtube.com/embed/${props.selectedVideo.url}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div className="videoComponent">
        <div className="videoSocial">
          <div className="videoSocial1">
            {" "}
            <a href="https://www.twitch.tv/legacysmashhn" target="_blank">
              <img className="twitchLogo" src={twitchLogo} />
            </a>{" "}
          </div>
          <div className="videoSocial2">
            <a
              href="https://www.youtube.com/channel/UCZ5HmtsUwim6bubEkSm8veg"
              target="_blank"
            >
              <img className="youtubeLogo" src={youtubeLogo} />
              <img className="playlistLogo" src={playListLogo} />
            </a>
          </div>
        </div>
        <div className="videoList">{renderVideos()}</div>
      </div>
    </section>
  );
}


const mapStateToProps = (state) => {
  return { video: state.video, selectedVideo: state.selectedVideo };
};




export default connect(mapStateToProps, { changeVideo })(Videoplayer);
