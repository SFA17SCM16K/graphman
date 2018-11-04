
import { ADD_REQUEST } from '../actions/actions';
import { CHANGE_METHOD } from '../actions/actions';

import { CHANGE_URL } from '../actions/actions';
import { SET_KEY } from '../actions/actions';
import { SET_VALUE } from '../actions/actions';
import { SET_CODE } from '../actions/actions';



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
      case SET_KEY:
      var k = action.payload.key
      var id_ = action.payload.id
      var item_id = action.payload.comp;
      var obj = {
        "key": k,
        "value" : ""
      }


      return{
        ...state,
        data : state.data.map( (item,i) => {

          if(i == item_id){
            if(item.item.request.method == "GET"){
              item.item.request.url.query[id_] = obj
            }else{
              item.item.request.body.urlencoded[id_] = obj
            }
            //item.item.request.body.urlencoded[id_] = obj
          }
          return item;

        })
      }
      case SET_VALUE:
        var value = action.payload.value
        var id_ = action.payload.id
        var item_id = action.payload.comp;


        return{
          ...state,
          data : state.data.map( (item,i) => {

            if(i == item_id){
              if(item.item.request.method == "GET" || item.item.request.method == "DELETE" ){
                item.item.request.url.query[id_].value = value;

              }else{
                item.item.request.body.urlencoded[id_].value = value;

              }
            }
            return item;

          })
        }
      case SET_CODE:
        console.log(action.payload)
        var id1 = action.payload.id;
        return {
          ...state,
          data: state.data.map( (item,i) => {
            if( i == id1){
              item.item.event[0].script.exec[0] = action.payload.code;
            }
            return item;
          })

        }
    default:
      return state;
  }
}
