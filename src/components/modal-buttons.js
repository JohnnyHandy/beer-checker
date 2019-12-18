import React from 'react'
import {useParams,useHistory,NavLink} from 'react-router-dom'

const Buttons = (props)=>{
    let {id}=useParams();
    let history = useHistory();
    const index = id*1 //id is a string, then we multiply it for 1 to turn into a number
    let isFirstBeer = index === 0 ? true : false; 
    let isLastBeer = index+1 >= props.beerDataLength ? true : false;
    if(id>props.beerDataLength||id < 0){
        history.push('/');
    }

    return(
        <div className='modal-buttons-container'>
            {isFirstBeer ? null :
                <NavLink          //If the first beer is being shown on the modal, this button is not rendered
                to={'/beer/'+(index-1)}  
                className='modal-button'>
                    Previous
                </NavLink>} 
            { isLastBeer ? null :
                <NavLink           //If the last beer is being shown on the modal, this button is not rendered
                to={'/beer/'+(index+1)} 
                className='modal-button'>
                    Next
                </NavLink>}
        </div>
    )
}

export default Buttons