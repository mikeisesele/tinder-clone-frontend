import React from 'react'
import './SwipeButtons.css'
import ReplyIcon from "@material-ui/icons/Reply"
import CloseIcon from "@material-ui/icons/Close"
import StarRateIcon from "@material-ui/icons/StarRate"
import FavouriteIcon from "@material-ui/icons/Favorite"
import FlashOnIcon from "@material-ui/icons/FlashOn"
import IconButton from "@material-ui/core/IconButton"

function SwipeButtons() {
    return (
        <div className = "SwipeButtons">
            <IconButton className = "swipeButtons__repeat">
                <ReplyIcon fontSize="large" />
            </IconButton>
            <IconButton className = "swipeButtons__left">
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className = "swipeButtons__star">
                <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className = "swipeButtons__right">
                <FavouriteIcon fontSize="large" />
            </IconButton>
            <IconButton className = "swipeButtons__lightning">
                <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeButtons