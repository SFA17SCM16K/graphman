
import { ADD_REQUEST } from '../actions/actions';
import { CHANGE_METHOD } from '../actions/actions';

import { CHANGE_URL } from '../actions/actions';


export default (initialData) => (state = {
  loading: false,
  error: false,
  data: initialData || [],
}, action) => {
  switch (action.type) {
    case ADD_REQUEST:
      return {
        ...state,
        loading:false,
        error:false,
        data: [...state.data,action.payload]
      }
     case CHANGE_METHOD:
      const id  = action.payload.id;
      return {
        ...state,
        loading:false,
        error:false,
        data : state.data.map( ( item, i) => (
          i == id ?  action.payload : item
        ))
      }
      case CHANGE_URL:
       const va = action.payload.id;
       return {
         ...state,
         loading:false,
         error:false,
         data : state.data.map( ( item, i) => (
           i == va ?  action.payload : item
         ))
       }
    default:
      return state;
  }
}
