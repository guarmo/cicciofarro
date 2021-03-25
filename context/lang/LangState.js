import React, { useReducer } from "react";
import LangContext from "./langContext";
import langReducer from "./langReducer";

import { CHANGE_LANG } from "../types";

const LangState = (props) => {
  const initialState = {
    lang: "ita",
  };

  const [state, dispatch] = useReducer(langReducer, initialState);

  //   Change language
  const changeLang = (lang) => {
    dispatch({
      type: CHANGE_LANG,
      payload: lang,
    });
  };

  return (
    <LangContext.Provider
      value={{
        lang: state,
        changeLang,
      }}
    >
      {props.children}
    </LangContext.Provider>
  );
};

export default LangState;
