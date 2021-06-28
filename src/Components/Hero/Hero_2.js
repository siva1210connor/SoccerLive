import React from 'react'
import ReactPlayer from 'react-player'
import './Hero_2.css'


function hero_2() {

  
    
    return (
        <div className="hero_2">
            <div className="content-1">
                <div className="liver">
                    <img src="./Images/liverpool.png" alt="" />
                    <span>Liverpool</span>
                </div>
                <div className="vs">
                    vs
                </div>
                <div className="man">
                    <img src="./Images/man.png" alt="" />
                    <div>Manchester united</div>
                </div>

            </div>
            <div className="video">
               <ReactPlayer width='480px' height='240px' controls url="https://www.youtube.com/watch?v=7Exob0iDI4w"/>
            </div>
            <div className="content-2">

            </div>
        </div>
    )
}

export default hero_2
