import React from "react";
import "./followUs.css"
import facebookIcon from "./facebookIcon.png"
import twitchIcon from "./twitchIcon.png"
import twitterIcon from "./twitterIcon.png"
import youtubeIcon from "./youtubeIcon.png"


export function FollowUs(){
    return(
        <section className="follow-us-container">

            <h1>La Fighting game house en San pedro Sula</h1>
            <div className="follow-us">
            <div className="follow-us-text">
            </div>
            </div>

            <nav className="socialMediaIconContainer">
               <a href="https://www.facebook.com/LegacySmashHN/" target="_blank" ><img className="socialMediaIcon" src={facebookIcon} /></a> 
               <a href="https://www.youtube.com/channel/UCZ5HmtsUwim6bubEkSm8veg" target="_blank" ><img className="socialMediaIcon youtubeIcon" src={youtubeIcon}/></a> 
               <a href="https://www.twitch.tv/legacysmashhn" target="_blank" ><img className="socialMediaIcon" src={twitchIcon} /></a> 
               <a href="https://twitter.com/LegacySmashHN" target="_blank" ><img className="socialMediaIcon" src={twitterIcon}/></a> 
            </nav>

        </section>
    )
}