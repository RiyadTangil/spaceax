import React from 'react';
import "./HeroVideo.css"
import video from "../../image/video.mp4"
const HeroVideo = () => {
    return (
        <div class="hero-video-container ">
            <video
            loop="true"
            muted="true"
            autoplay="true"
            preload="auto"
            >
                <source src={video} type="video/mp4"/>
                Your video does not support  the video tag
            </video>
            <div class="caption ">
                <h1>SMALLSAT RIDESHARE  </h1>
                <h1>PROGRAM </h1>
            </div>
        </div>
    );
};

export default HeroVideo;