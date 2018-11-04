import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Segment,Input, Button } from 'semantic-ui-react'
import "../../../../node_modules/codemirror/lib/codemirror.css";
import { setCode } from '../../../actions/actions'

import './testScript.css'
require('codemirror/mode/javascript/javascript');

var CodeMirror = require('react-codemirror');

class TestingScript extends Component {
  constructor(props){
    super(props);
    this.data = {
      code : "",
      id : this.props.focusReq.data.id
    }
  }

  updateCode = (newCode) => {
    this.data.code = newCode;
    this.data.id = this.props.focusReq.data.id
    this.props.setCode(this.data);

 }
  render() {
    const {method, url,id} = this.props.focusReq.data;

    var options = {
			lineNumbers: true,
      mode:'javascript'
		};
    return(
      <div className="testing-params">
        <Segment placeholder className="well">
          <h1 className="testing-h1"> Test Scripts: </h1>
          <div className= "params">

              <CodeMirror value={this.data.code} onChange={this.updateCode} options={options} />
          </div>



        </Segment>
      </div>
    )
  }
}
const mapStateToProps = ( state) => {
  return {
    focusReq : state.focusedComponent
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setCode : (params) => dispatch(setCode(params))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TestingScript)
