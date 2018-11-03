import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Segment, Dropdown, Input } from 'semantic-ui-react'
import './requestComponent.css';

import { changeUrl} from '../../actions/actions.js';
import { changeMethod} from '../../actions/actions.js';
import { focusComponent} from '../../actions/actions.js';




const methods = [
  { key : 1, text : "GET" , value: 1},
  { key : 2, text : "POST", value: 2 },
  { key : 3, text : "DELETE", value: 3},
  { key : 4, text: "PUT", value: 4}
];


class RequestComponent extends Component{

  constructor(props){
    super(props);

    this.data = {
      "id": this.props.reqId,
      "method" : '',
      "url" : '',
      "values" : []
    }
    this.state = {
      "color" : ""
    }
  }

  handleChange = (e, data) => {
    const { value } = data;


    this.data.method = value;
    this.props.changeMethod(this.data);
  }

  urlChange = (e,data) => {
    const { value } = data;
    this.data.url = value;

    this.props.changeUrl(this.data);

  }

  handleClick = (e,data) => {
    this.props.focusComponent(this.props.data);

  }


  render() {

    const method = this.props.data.method;
    const url = this.props.data.url || this.data.url

    if(this.props.focusReq.data.id == this.props.data.id){
      this.color = "red"
    }else{
      this.color=""
    }


    return (

        <Segment color={this.color} raised className="request-root" onClick = {this.handleClick}>
          <Dropdown
            options={methods}
            defaultValue = {method}
            selection
            className="request-drop"
            onChange={ this.handleChange }
          />

          <Input
            label='http://'
            placeholder='enter your API url'
            className="request-url"
            onChange = { this.urlChange}
            defaultValue  = { url}
          />
        </Segment>

    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    changeUrl : (params) => dispatch(changeUrl(params)),
    changeMethod : (params) => dispatch(changeMethod(params)),
    focusComponent: (params) => dispatch(focusComponent(params))
  }
}

const mapStateToProps  = (state) => {
  return{
    focusReq  : state.focusedComponent
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (RequestComponent);