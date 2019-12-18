import * as actionTypes from './actionTypes'
import Axios from 'axios'


export const fetchStart = ()=>{
    return async(dispatch)=>{
        Axios.get('https://api.punkapi.com/v2/beers')
        .then((response)=>{
        dispatch(fetchSuccess(response.data)) //Load beers on state in case of success
        }).catch((error)=>{
        fetchFail(error) //In case of mistake, send the error to the state for it to be analysed
        })
    }
}

export const fetchSuccess = (payload)=>{
    return{
        type:actionTypes.FETCH_SUCCESS,
        payload:payload
    }
}
export const fetchFail = (error)=>{
    return{
        type:actionTypes.FETCH_FAIL,
        payload:error
    }
}


