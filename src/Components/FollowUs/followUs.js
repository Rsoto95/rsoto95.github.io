import React from "react";
import "./followUs.css"
import facebookIcon from "./facebookIcon.png"
import twitchIcon from "./twitchIcon.png"
import twitterIcon from "./twitterIcon.png"
import youtubeIcon from "./youtubeIcon.png"


export function FollowUs(){
    return(
        <section className="follow-us-container">

            <h1>La Mejor Fighting game house en San pedro Sula</h1>
            <div className="follow-us">
            <div className="follow-us-text">
            </div>
            </div>

            <nav className="socialMediaIconContainer">
               <a><img className="socialMediaIcon" src={facebookIcon}/></a> 
               <a><img className="socialMediaIcon youtubeIcon" src={youtubeIcon}/></a> 
               <a><img className="socialMediaIcon" src={twitchIcon}/></a> 
               <a><img className="socialMediaIcon" src={twitterIcon}/></a> 
            </nav>

        </section>
    )
}