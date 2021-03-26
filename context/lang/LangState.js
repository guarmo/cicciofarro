import React, { useReducer } from "react";
import LangContext from "./langContext";
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
    alert(url);
    dispatch({
      type: SHOW_MODAL,
      payload: url,
    });
  };

  //   Hide modal
  const hideModal = (url) => {
    alert(url);
    dispatch({
      type: HIDE_MODAL,
    });
  };

  return (
    <LangContext.Provider
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
    </LangContext.Provider>
  );
};

export default LangState;
