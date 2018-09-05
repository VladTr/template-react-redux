import { combineReducers } from "redux";
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.push(action.payload);
    case 'SAVE_TODO':
      console.log(state.concat(action.payload));
      return state.concat(action.payload);
    default:
      return state;
  }
}
const todoApp = combineReducers({
  todos
})

export default todoApp
