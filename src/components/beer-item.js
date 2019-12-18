import React from 'react'
import {NavLink} from 'react-router-dom'

const Beer = (props)=>{
    return(       
        <div className='beer-item-container'>
            <NavLink className='beer-item-link' to={'/beer/'+props.index}>
                <div className='beer-item-title'>{props.title}</div>
                <div className='beer-item-tagline'>{props.tagline}</div>
            </NavLink>
        </div>
    )
}
export default Beer