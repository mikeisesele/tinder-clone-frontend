import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import './Header.css'


// install both material ui core and material ui icons

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>

            <img 
            src="https://www.seekpng.com/png/full/55-558244_tinder-icon-logo-png-transparent-logo-tinder.png" 
            className="header__logo"
            alt="header"/>
            

        <IconButton>
            <ForumIcon className="header__icon" />
        </IconButton>
        </div>
    )
}

export default Header
