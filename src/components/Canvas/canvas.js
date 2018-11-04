import React, { Component } from 'react';
import { Button, Modal, Image,Header } from 'semantic-ui-react'
import {connect} from 'react-redux';
import RequestComponent from '../RequestComponent';
import { addRequest }  from '../../actions/actions';
import {focusComponent } from '../../actions/actions';
import { cloudApi } from '../../actions/actions';
import ReactJson from 'react-json-view'

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

  constructor(props){
    super(props);
    this.state = {
      "open" : false
    }
    this.model ={
      "items" : "",
      "scripts" : "",
      "requests" : "",
      "tests": "",
      "obj" : {}
    }
  }
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
    cloudApi({"postman" : this.data}).then( (data) => {
      if(data.success == false){
        this.setState({open:true});

      }else{

        this.model.items = data.result.items;
        this.model.scripts = data.result.scripts;
        this.model.requests = data.result.requests;
        this.model.tests = data.result.tests;
        this.model.obj = data.result;

        this.setState({open:true});
      }
    });
  }

  deleteFlow = () => {
    localStorage.clear();
    window.location.reload(false);

  }

  addRequest = () => {


    this.props.addRequest({});
  }

  closeModel = () => {
    this.setState({open:false});
  }
  populateRequests = () => {
    return this.props.requestComponents.data.map( ( request, i )   => {
      return <RequestComponent key = {i} data = {request} reqId = {i} />;
    });
  }
  render() {
    return (


        <div className= "canvas">
          <div className="img-holder">
            <Image src= {require('../../logo.png')}  size='small'/>

          </div>

          <Modal open={this.state.open}>
            <Modal.Header>Run Details</Modal.Header>
            <Modal.Content>

              <Modal.Description>
                <Header>Select Workflow Summary Details</Header>
                <Header> Script Details  : Success:{ this.model.scripts.total}   Failed: {this.model.scripts.failed} </Header>
                <Header> Item Details    : Success:{ this.model.items.total}     Failed: {this.model.items.failed}</Header>
                <Header> Request Details : Success:{ this.model.requests.total}  Failed: {this.model.requests.failed}</Header>
                <Header> Test Details    : Success:{ this.model.tests.total}     Failed: {this.model.tests.failed} </Header>
              </Modal.Description>
              <Modal.Description>
                <Header>Entire Summary Object</Header>
                <ReactJson src={this.model.obj} />
              </Modal.Description>


            </Modal.Content>
            <Button onClick={this.closeModel}> Close Test Results</Button>
          </Modal>
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
