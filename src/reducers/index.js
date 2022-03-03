import { combineReducers } from "redux";
import data from "../YoutubeApi/youtube.json";
import { getAuth } from "@firebase/auth";



const selectedyoutubeReducer = (oldVideo = { url: data[0].items[0].id.videoId }, action) => {
  if (action.type === "CHANGE_VIDEO") {
    return action.payload;
  }
  return oldVideo;
};

const youtubeReducer = () => {
  return data;
};


const selectedLoginReducer = (inicialState="none",action)=>{
  if(action.type==="CHANGE_LOGIN" && inicialState!=="flex"){
    return "flex";
  }
  return "none"
}

const selectedSignUpReducer = (inicialState="none",action)=>{
  if(action.type==="CHANGE_SIGNUP" && inicialState!=="flex"){
    return "flex";
  }
  return "none"
}

const selectedIsLogin = (inicialState=null,action)=>{
  if(action.type==="CHANGE_ISLOGIN"){
    return 
  }
}

const loginReducer=()=>{
  return 'flex'
}



export default combineReducers({
  video: youtubeReducer,
  login:loginReducer,
  selectedVideo: selectedyoutubeReducer,
  selectedLogin: selectedLoginReducer,
  selectedSignup: selectedSignUpReducer
});

