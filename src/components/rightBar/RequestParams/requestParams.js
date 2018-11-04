import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Segment,Input, Button } from 'semantic-ui-react'
import { setKey } from '../../../actions/actions'
import { setValue } from '../../../actions/actions'
import { hitApi } from '../../../actions/actions'
import { setResponse } from '../../../actions/actions'





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
          "comp" : data.id

        }
        this.props.setKey(data);
      }else{
        console.log(this)
        var data = {
          "id" : data.ip,
          "value": data.value,
          "comp" : data.id

      }
      this.props.setValue(data);
    }
  }

  callAPI = () => {
    console.log("api");
    const {method, url,id} = this.props.focusReq.data;
    const m = methods[method-1].text;
    const u = url;
    const params = this.props.focusReq.data.values;

    hitApi(m,u,params).then( (op) => this.props.setResponse(op));

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
                />
              <Input
                  label='Value'
                  val='0'
                  ip='0'
                  id= {id}
                  placeholder='Your value'
                  className="req-param"
                  onChange = { this.paramChange}
                />
                <Input
                    label='Key'
                    ip='1'
                    id= {id}
                    placeholder='Your Key'
                    className="req-param"
                    onChange = { this.paramChange}
                  />
                <Input
                    label='Value'
                    placeholder='Your value'
                    val='1'
                    ip='1'
                    id= {id}
                    className="req-param"
                    onChange = { this.paramChange}
                  />
                  <Input
                      label='Key'
                      ip='2'
                      id= {id}
                      placeholder='Your Key'
                      className="req-param"
                      onChange = { this.paramChange}
                    />
                  <Input
                      label='Value'
                      placeholder='Your value'
                      val='2'
                      ip='2'
                      id= {id}
                      className="req-param"
                      onChange = { this.paramChange}
                    />

                  <Button className="hit" onClick={this.callAPI}> Hit API </Button>
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
    setValue : (params) => dispatch(setValue(params)),
    setResponse: (params) => dispatch(setResponse(params))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(RequestParams);
