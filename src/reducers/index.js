import { combineReducers } from 'redux';
import requestComponents from './requestComponents'
import focusedComponent from './focusedComponent';

export default combineReducers({
  requestComponents : requestComponents(''),
  focusedComponent : focusedComponent('')

});
