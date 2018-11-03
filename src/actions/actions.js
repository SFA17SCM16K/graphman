import fetch from 'isomorphic-fetch';


export const ADD_REQUEST = 'add_request';
export const FOCUS_COMPONENT = 'focused_component';
export const CHANGE_METHOD = 'change_method'
export const CHANGE_URL = 'change_url'
export const SET_KEY = 'set_key'
export const SET_VALUE = 'set_value'



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

export function hitApi(method, url, params) {

    const fetchData = fetch(url, {
      method: method, body: JSON.stringify(params), // data can be `string` or {object}!
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
