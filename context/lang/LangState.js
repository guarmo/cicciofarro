import React, { useReducer } from "react";
import langContext from "./langContext";
import langReducer from "./langReducer";

import { CHANGE_LANG, SHOW_MODAL, HIDE_MODAL } from "../types";

const LangState = (props) => {
  const initialState = {
    lang: "ita",
    modal: false,
    modalURL: null,
  };

  const [state, dispatch] = useReducer(langReducer, initialState);

  //   Change language
  const changeLang = (lang) => {
    dispatch({
      type: CHANGE_LANG,
      payload: lang,
    });
  };

  //   Show modal
  const showModal = (url) => {
    dispatch({
      type: SHOW_MODAL,
      payload: url,
    });
  };

  //   Hide modal
  const hideModal = () => {
    dispatch({
      type: HIDE_MODAL,
    });
  };

  return (
    <langContext.Provider
      value={{
        lang: state.lang,
        modal: state.modal,
        modalURL: state.modalURL,
        changeLang,
        showModal,
        hideModal,
      }}
    >
      {props.children}
    </langContext.Provider>
  );
};

export default LangState;
