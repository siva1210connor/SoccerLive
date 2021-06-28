import React from 'react'
import './NavBar.css'

function NavBar() {
    return (
        <div className="navbar__container">
            <div className="nav__menu">
                <a><span>Football</span></a>
                <a><span>Tennis</span></a>
                <a><span>Baseball</span></a>
                <a><span>Hockey</span></a>
                <a><span>handball</span></a>
                <a><span>Cricket</span></a>
                <a><span>Volleyball</span></a>
                <a><span>Table tennis</span></a>
            </div>
        </div>
    )
}

export default NavBar
