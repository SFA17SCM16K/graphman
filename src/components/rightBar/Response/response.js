import React, { Component } from 'react';
import { Segment,Input, Button } from 'semantic-ui-react'
import {connect} from 'react-redux';
import ReactJson from 'react-json-view'

import './response.css'

class Response extends Component{
  render(){
    const res = this.props.response.data.length !=0 ? this.props.response.data :   { "Waiting" : "For Response"};
    console.log(res);


    return(
      <div className="req-params">
        <Segment placeholder className="well">
          <h1 className="header-h1"> Response </h1>
          <div className= "params">
              <ReactJson src={res} />

          </div>



        </Segment>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    response: state.apiResponse
  }
}

export default connect(mapStateToProps)(Response);
