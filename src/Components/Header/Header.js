import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';




function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <img src="./Images/soccerlive-icon.png" alt=""/>
                <span>Soccerlive</span>
            </div>


            <div className="header__searchbar">
                <SearchIcon className="search__icon"/>
                <input type="text" placeholder="Search"/>
            </div>
            

            <div className="header__notification">
                <NotificationsIcon />
                <div>Notifications</div>
            </div>
             
            
        </div>
    )
}

export default Header


