import React,{useRef,useEffect} from 'react'
import {useParams,useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import Buttons from '../components/modal-buttons'
import Content from '../components/beer-modal'
import CloseButton from '../components/close-button'



export const Modal = (props)=>{
    const {id}=useParams()
    const history = useHistory()
    const node = useRef();
    useEffect(() => {
            document.addEventListener("mousedown", handleClick)
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id]);
    const handleClick = e => { //This is to close the modal when there is a click outside the main-modal window
            if (node.current.contains(e.target)) {
                return;
              }
                history.push('/')
    };
    let details = {}
    if(props.beerData) {
        for(let i = 0;i<props.beerData.length;i++){
            if(i === id*1){ //id is a string, we multiply it for 1 to turn it into a number
                details.name= props.beerData[id].name
                details.image= props.beerData[id].image_url
                details.tagline = props.beerData[id].tagline
                details.description = props.beerData[id].description
                break
            }else{
                details.name='Name'
                details.image='Image'
                details.tagline='Tagline'
                details.description='Description'
            }
        }       
    }
   
    let modalClass = props.active ? "modal display-block" : "modal display-none";
    return(
        <div className={modalClass} >
            <div className='modal-main' ref={node}>
                <CloseButton/>
                <Content details={details}/>               
                <Buttons 
                 beerDataLength={props.beerData.length}/>
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        beerData:state.beerData
    }
}


export default connect(mapStateToProps)(Modal)