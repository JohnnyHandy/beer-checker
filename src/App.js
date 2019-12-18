import React from 'react';
import {connect} from 'react-redux'
import * as actions from './store/index'
import './styles/styles.css';
import Main from './containers/main'


class App extends React.Component{
  
  componentDidMount(){
    if(this.props.appInitialized === false){
      this.props.fetchStart()
    }
  }

  render(){
    return (
      <div className="App">
        <Main/>
      </div>
    );
  }
  }

const mapStateToProps = state =>{
  return{
    appInitialized:state.appInitialized
  }
}
const mapDispatchToProps = dispatch=>{
  return{
    fetchStart:()=>dispatch(actions.fetchStart())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
