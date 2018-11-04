import { SET_RESPONSE } from '../actions/actions';


export default(initialData) => (state = {
  data:initialData || []
},action) => {
  switch(action.type){
    case SET_RESPONSE:
      return{
        ...state,
        data:action.payload
      }
    default:
      return state

  }
}
