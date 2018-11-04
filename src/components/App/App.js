import React, { Component } from 'react';
import RequestComponent from '../RequestComponent';
import { Menu } from 'semantic-ui-react'
import Canvas from '../Canvas'
import RightBar from '../rightBar';
import {connect} from 'react-redux';
import './App.css';



class App extends Component {
  state = {}



  render() {

    const { activeItem } = this.state


    return (
      <div className="App">
        <div className= "content-area">
          <Canvas />
          <RightBar />
        </div>


      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    requestComponents : state.requestComponents.data
  }
}
export default connect(mapStateToProps)(App);
