import React from 'react'
import Beer from '../components/beer-item'
import Modal from './modal'
import Spinner from '../components/Spinner'
import ErrorScreen from './error'

import {Switch,Redirect,Route} from 'react-router-dom'
import {connect} from 'react-redux'

export const Middle =(props)=>{
        let beerElement = null
        if(props.beerData !== undefined){
            beerElement = props.beerData.map((i,index)=>{
                return(
                    <Beer 
                    index={index} 
                    key={index}
                    title={i.name}
                    tagline={i.tagline} 
                    />
                )
            })
        }
    return(
        <div className='middle-container'>
        {
        props.error ? //Any errors while fetching the beers is gonna show an ErrorScreen
            <ErrorScreen/> :
        props.appInitialized ? //If not errors are presented and the beers are fetched, show Middle container with the lsit
            <Switch>
                <Route exact path ='/'> {/* The root path is gonna show only the list without the modal */}
                    {beerElement}
                    <Modal active={false}/> 
                </Route>
                <Route path='/beer/:id'> {/* If the path is selected and the ID is valid, show the modal with the beer info related to that Id */}
                    {beerElement}
                    <Modal active={true}/>
                </Route>
                <Route render={() => <Redirect to="/" />} /> {/* Redirecting no match paths */}
            </Switch>: 
            <Spinner/>
        }
        </div>
    )
}

const mapStateToProps = state=>{
    return{
        beerData:state.beerData,
        appInitialized:state.appInitialized,
        error:state.error
    }
}


export default connect(mapStateToProps)(Middle)