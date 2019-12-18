import * as actionTypes from './actionTypes'
import {updateObject} from './utility'

const initialState = {
    appInitialized:false,
    beerData:[],
    error:false
}
const loadBeers = (state,action)=>{
    return updateObject(state,{appInitialized:true,beerData:action.payload})
}
const fetchFail = (state,action)=>{
    return updateObject(state,{error:action.payload})
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        default:return state;
        case actionTypes.FETCH_SUCCESS:return loadBeers(state,action);
        case actionTypes.FETCH_FAIL:return fetchFail(state,action);
    }            
}
export default reducer