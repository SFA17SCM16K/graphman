import { combineReducers } from 'redux';
import requestComponents from './requestComponents'
import focusedComponent from './focusedComponent';
import apiResponse from './apiResponse';

export default combineReducers({
  requestComponents : requestComponents(''),
  focusedComponent : focusedComponent(''),
  apiResponse : apiResponse('')

});
