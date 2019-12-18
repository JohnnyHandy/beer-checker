import React from 'react'
import Upper from './upper'
import Middle from './middle'
import Footer from './footer'

const Main = (props)=>{
    return(
        <div className='main-container'>
            <Upper/>
            <Middle/>
            <Footer/>
        </div>
    )
}

export default Main