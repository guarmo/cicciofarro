import { useContext, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import ReactPlayer from "react-player";

import LangContext from "../context/lang/langContext";

const FullScreenVideo = () => {
  // Context
  const langContext = useContext(LangContext);
  const { lang, changeLang, modal, modalURL, showModal } = langContext;
  return (
    // Close on click outside
    // https://stackoverflow.com/questions/32553158/detect-click-outside-react-component

    <Flex
      alignItems="center"
      justifyContent="center"
      className="fullScreenVideo"
      display={modal ? "flex" : "none"}
    >
      <ReactPlayer url={modalURL} />
    </Flex>
  );
};

export default FullScreenVideo;
