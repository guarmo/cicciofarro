import { CHANGE_LANG, SHOW_MODAL, HIDE_MODAL } from "../types";

const langReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_LANG:
      return {
        ...state,
        lang: action.payload,
      };
    case SHOW_MODAL:
      return {
        ...state,
        modal: true,
        modalURL: action.payload,
      };
    case HIDE_MODAL:
      return {
        ...state,
        modal: false,
        modalURL: null,
      };
    default:
      return state;
  }
};

export default langReducer;
