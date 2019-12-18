import React,{useState,useEffect} from 'react'

import Spinner from '../components/Spinner'


const ModalBeer = (props)=>{
    const [loaded,setLoaded]=useState(false)
    useEffect(()=>{
        setLoaded(false)
    },[props.details])
    return(
        <>   
            <div className='beer-modal-title' >
                {props.details.name}
            </div>
            <div className='beer-modal-image'>
                {loaded ? null : <Spinner/>} {/*If the image is not loaded, a spinner is shown*/}
                <img 
                onLoad={()=>setLoaded(true)} 
                style={loaded ? {display:'flex'} : {display:'none'}}
                className='image-class'
                alt='img' 
                src={props.details.image}/>
            </div>
            <div className='beer-modal-tagline'>
                {props.details.tagline}
            </div>
            <div className='beer-modal-description'>
                {props.details.description}
            </div>
        </>
    )
}


export default ModalBeer