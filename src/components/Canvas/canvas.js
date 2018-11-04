import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import {connect} from 'react-redux';
import RequestComponent from '../RequestComponent';
import { addRequest }  from '../../actions/actions';
import {focusComponent } from '../../actions/actions';
import {cloudApi } from '../../actions/actions';

import { ArcherContainer } from 'react-archer';

import './canvas.css';



function exportToJson(objectData: SomeObject) {
    let filename = "export.json";
    let contentType = "application/json;charset=utf-8;";
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      var blob = new Blob([decodeURIComponent(encodeURI(JSON.stringify(objectData)))], { type: contentType });
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      var a = document.createElement('a');
      a.download = filename;
      a.href = 'data:' + contentType + ',' + encodeURIComponent(JSON.stringify(objectData));
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }



class  Canvas extends Component {


  handleItemClick = (e, { name }) => {

    this.setState({ activeItem: name });
    this.data = {
      "info": {
    		"_postman_id": "f0300e2d-da9f-4f18-ba71-e919a5f0f50f",
    		"name": "foolbus",
    		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
    	},
      "item":[]
    };

    this.props.requestComponents.data.map( (request,i) => {
      this.data.item.push(request.item);
      return 0;
    });
    exportToJson(this.data);
  }

  cloudApi = (e, { name }) => {

    this.setState({ activeItem: name });
    this.data = {
      "info": {
    		"_postman_id": "f0300e2d-da9f-4f18-ba71-e919a5f0f50f",
    		"name": "foolbus",
    		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
    	},
      "item":[]
    };

    this.props.requestComponents.data.map( (request,i) => {
      this.data.item.push(request.item);
      return 0;
    });
    cloudApi({"postman" : this.data}).then( (data) => console.log(data));
  }

  deleteFlow = () => {
    localStorage.clear();
    window.location.reload(false);

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
            <Button onClick={this.handleItemClick} className="req">  Export the Workflow  </Button>
            <Button onClick={this.deleteFlow} className="req">  Delete the WorkFlow  </Button>
            <Button size="big" onClick={this.cloudApi} className="req-big"> Run this workflow in our Cloud API  </Button>

          </div>
          <ArcherContainer strokeColor="#353b48" >
          <div className="canvas-items">
            {this.populateRequests()}
          </div>
          </ArcherContainer>
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
    focusComponent : (params) => dispatch(focusComponent(params)),

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Canvas);
