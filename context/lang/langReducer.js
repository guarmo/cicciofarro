import { CHANGE_LANG } from "../types";

export default (state, action) => {
  switch (action.type) {
    case CHANGE_LANG:
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
};
