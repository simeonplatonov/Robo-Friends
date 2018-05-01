import {CHANGE_SEARCH_FIELD} from "./constant.js";

const inital_state = {
  searchField : ""
}
const search_robots =(state=inital_state,action={})=> {
  switch(action.type){
    case CHANGE_SEARCH_FIELD:
      return Object.assign({},state,{searchField:action.payload});
    default:
      return state;
  }
}
export default search_robots;
