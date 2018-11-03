

import { FOCUS_COMPONENT } from '../actions/actions';

import { SET_VALUE } from '../actions/actions';
import { SET_KEY } from '../actions/actions';




export default (initialData) => (state = {

  data: initialData || [],
}, action) => {
  switch (action.type) {
    case FOCUS_COMPONENT:
      return {
        ...state,

        data: action.payload
      };
    case SET_KEY:
      const k = action.payload.key
      const id = action.payload.id
      var obj = {}

      obj[k] = ""
      return{
        ...state,
        values: state.data.values[id] = obj
      }
    case SET_VALUE:
      const value = action.payload.value
      let i_k = action.payload.id
      console.log(value)
      return {
        ...state,
        values : state.data.values.map( (item, i ) => {
          if(i == i_k)item[Object.keys(item)[0]] = value
        })
      }
    default:
      return state;
  }
}
