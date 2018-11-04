import fetch from 'isomorphic-fetch';


export const ADD_REQUEST = 'add_request';
export const FOCUS_COMPONENT = 'focused_component';
export const CHANGE_METHOD = 'change_method'
export const CHANGE_URL = 'change_url'
export const SET_KEY = 'set_key'
export const SET_VALUE = 'set_value'
export const SET_RESPONSE = 'set_response'
export const SET_CODE = 'set_code'




export function addRequest(params) {
  return {
    type: ADD_REQUEST,
    payload: params
  }
}

export function focusComponent(params) {
  return {
    type: FOCUS_COMPONENT,
    payload: params
  }
}

export function changeMethod(params) {
  return {
    type: CHANGE_METHOD,
    payload: params
  }
}

export function changeUrl(params) {
  return {
    type: CHANGE_URL,
    payload: params
  }
}

export function setKey(params) {
  return {
    type: SET_KEY,
    payload: params
  }
}
export function setValue(params) {
  return {
    type: SET_VALUE,
    payload: params
  }
}

export function hitApi(method, url, params={}) {
    var url = new URL(url)


    var p = params.reduce(function(result, currentObject) {
    for(var key in currentObject) {
        if (currentObject.hasOwnProperty(key)) {
            result[key] = currentObject[key];
        }
    }
    return result;
    }, {});


    url.search = new URLSearchParams(p);

    const fetchData = () => fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());


    return fetchData();

}

export function setResponse(params) {
  return {
    type: SET_RESPONSE,
    payload : params
  }
}

export function setCode(params){
  return{
    type: SET_CODE,
    payload :  params
  }
}
