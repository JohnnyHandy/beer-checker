import React from 'react'
import {NavLink} from 'react-router-dom'

const upperContent = (props)=>{
    return(
        <>
        <div className='title-element'>
            <NavLink className='title-element-link' to='/'>Beer Checker <i className="fas fa-beer"></i></NavLink>
        </div>
        <div className='subtitle-element'>
            Your next beer taste is here!
        </div>
        </>
    )
}

export default upperContent