import React from 'react'


const Footer = ()=>{
    return(
        <div className='footer-container'>
            <div className='dev-mention'>
                <span className='footer-span'>Developed By: </span>
                <a className='footer-link' target="_blank" rel="noopener noreferrer" href='https://github.com/JohnnyHandy' >
                    Johnny Handy
                </a>
            </div>
            <div className='punk-mention'>
                <span className='footer-span'>Powered By: </span>
                <a className='footer-link' target="_blank" rel="noopener noreferrer" href='https://punkapi.com/documentation/v2'>
                    PUNK API
                </a>
            </div> 
        </div>
    )
}

export default Footer