import { combineReducers } from "redux";
import data from "../YoutubeApi/youtube.json";

const selectedyoutubeReducer = (oldVideo = { url: data[0].items[0].id.videoId }, action) => {
  if (action.type === "CHANGE_VIDEO") {
    return action.payload;
  }
  return oldVideo;
};

const youtubeReducer = () => {
  return data;
};

export default combineReducers({
  video: youtubeReducer,
  selectedVideo: selectedyoutubeReducer,
});
