import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Segment,Input, Button } from 'semantic-ui-react'
import { setKey } from '../../../actions/actions'
import { setValue } from '../../../actions/actions'


import './requestParams.css';

const methods = [
  { key : 1, text : "GET" , value: 1},
  { key : 2, text : "POST", value: 2 },
  { key : 3, text : "DELETE", value: 3},
  { key : 4, text: "PUT", value: 4}
];




class RequestParams extends Component {

  paramChange = (e,data) => {
      console.log(data);
      if(data.label === 'Key'){

        console.log(this)
        var data = {
          "id" : data.ip,
          "key": data.value,

        }
        this.props.setKey(data);
      }else{
        console.log(this)
        var data = {
          "id" : data.ip,
          "value": data.value,

      }
      this.props.setValue(data);
    }
  }
  render() {
    const {method, url,id} = this.props.focusReq.data;
    if(method  && url != undefined ){
      return(

        <div className="req-params">



          <Segment placeholder className="well">
            <h1 className="header-h1"> Request Params: {url} By {methods[method-1].text} </h1>
            <div className= "params">
              <Input
                  label='Key'
                  ip='0'
                  id= {id}
                  placeholder='Your Key'
                  className="req-param"
                  onChange = { this.paramChange}
                  defaultValue  = { url}
                />
              <Input
                  label='Value'
                  val='0'
                  id= {id}
                  placeholder='Your value'
                  className="req-param"
                  onChange = { this.paramChange}
                  defaultValue  = { url}
                />
                <Input
                    label='Key'
                    ip='1'
                    id= {id}
                    placeholder='Your Key'
                    className="req-param"
                    onChange = { this.paramChange}
                    defaultValue  = { url}
                  />
                <Input
                    label='Value'
                    placeholder='Your value'
                    val='1'
                    id= {id}
                    className="req-param"
                    onChange = { this.paramChange}
                    defaultValue  = { url}
                  />
                  <Input
                      label='Key'
                      ip='2'
                      id= {id}
                      placeholder='Your Key'
                      className="req-param"
                      onChange = { this.paramChange}
                      defaultValue  = { url}
                    />
                  <Input
                      label='Value'
                      placeholder='Your value'
                      val='2'
                      id= {id}
                      className="req-param"
                      onChange = { this.paramChange}
                      defaultValue  = { url}
                    />

                  <Button className="hit"> Hit API </Button>
            </div>



          </Segment>
        </div>

      )
    }else{
      return(
        <div className="req-params">
            <Segment placeholder className="well">

              Please Select a Request
            </Segment>
        </div>
      )
    }

  }
}

const mapStateToProps = ( state) => {
  return {
    focusReq : state.focusedComponent
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setKey : (params) => dispatch(setKey(params)),
    setValue : (params) => dispatch(setValue(params))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(RequestParams);
