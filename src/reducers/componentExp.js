import { ACTION } from "../constants/ActionTypes";

const init = {
  param: 0
};

export default function(state = init, action) {
  switch (action.type) {
    case ACTION:
      return { ...state, param: action.param };
    default:
      return { ...state };
  }
}
