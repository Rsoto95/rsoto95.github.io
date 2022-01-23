import React from "react";
import './header.css'
import wallPaper from './wallpaper.jpg'
import legacyLogo from './legacyLogo.png'
import facebookLogo from './Facebook_icon_2013.png'
import youtubeLogo from './youtubeLogoBlack.png'
import twitchIcon from './twitchIcon.png'
import twitterIcon from './twitterIcon.png'
import discordIcon from './discordIcon.png'


export function Header(){
    return(
        <header>
            
            <div className="wallPaper"></div>
            <img src={legacyLogo} className="legacyLogo"/>
            <nav className="topNavigation">
                <a href="https://www.facebook.com/LegacySmashHN/" target="_blank"><img className='topIcon' src={facebookLogo}/></a>
                <a href="https://www.youtube.com/channel/UCZ5HmtsUwim6bubEkSm8veg" target="_blank"><img className='topIcon' src={youtubeLogo}/></a>
                <a href="https://www.twitch.tv/legacysmashhn" target="_blank"><img className='topIcon' src={twitchIcon}/></a>
                <a href="https://twitter.com/LegacySmashHN" target="_blank"><img className='topIcon' src={twitterIcon}/></a>
                <a href="https://discord.gg/yXqyPW9qxc" target="_blank"><img className='topIcon' src={discordIcon}/></a>
            </nav>
            <nav className="navigation">
                <div className="navigationContainer">
                <div className="navigationText" >Home</div>
                <div className="navigationText">About us</div>
                <div className="navigationText">Videos</div>
                <div className="navigationText">Contact us</div>
                </div>
            </nav>

        </header>
    )
}