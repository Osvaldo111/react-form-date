import { combineReducers } from "redux";
import componentExm from "./componentExp";
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
  /**COMPONENTS EXM: oneComponent, secondComponent*/
  componentExm,
  form: formReducer,
});

export default rootReducer;
