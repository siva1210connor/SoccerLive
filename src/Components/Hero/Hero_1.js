import React from 'react'
import './Hero_1.css'
import HomeIcon from '@material-ui/icons/Home';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Hero_1() {
    return (
        <div>
            <div className="hero_1">
            <HomeIcon/>
            <ArrowForwardIosIcon className="arrow" />
            <a>England</a>
            <ArrowForwardIosIcon className="arrow" />
            <a>Premier League</a>
            <ArrowForwardIosIcon className="arrow" />
            <a>Liverpool vs Manchester</a>
            <ArrowForwardIosIcon className="arrow" />
            <a>Hightlights</a>
        </div>
        </div>
    )
}

export default Hero_1
