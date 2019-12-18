import React from 'react'
import {NavLink} from 'react-router-dom'

const CloseButton = (props)=>{
    return(
        <div className='close-button-container'>
            <NavLink className='close-button' to='/'>
                <span>Close</span>
                <i className="fas fa-window-close"></i>
            </NavLink>
        </div>
    )
}

export default CloseButton

