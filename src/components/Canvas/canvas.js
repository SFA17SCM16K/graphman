import React, { Component } from 'react';
import { Segment, Dropdown, Input, Button } from 'semantic-ui-react'
import {connect} from 'react-redux';
import RequestComponent from '../RequestComponent';
import { addRequest }  from '../../actions/actions';
import {focusComponent } from '../../actions/actions'
import './canvas.css';

class  Canvas extends Component {

  constructor(props){
    super(props);

  }

  addRequest = () => {


    this.props.addRequest({});
  }


  populateRequests = () => {
    return this.props.requestComponents.data.map( ( request, i )   => {
      return <RequestComponent key = {i} data = {request} reqId = {i} />;
    });
  }
  render() {
    return (
      <div className= "canvas">
        <div className="header">
          <Button onClick={this.addRequest} className="req">  Add Request  </Button>
        </div>

        <div className="canvas-items">
          {this.populateRequests()}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  return{
    requestComponents: state.requestComponents
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addRequest : (params) => dispatch(addRequest(params)),
    focusComponent : (params) => dispatch(focusComponent(params))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Canvas);
