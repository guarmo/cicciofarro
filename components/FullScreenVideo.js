import { useContext, useState, useRef, useEffect } from "react";
import { Flex, Box, Icon } from "@chakra-ui/react";
import ReactPlayer from "react-player";

import LangContext from "../context/lang/langContext";

import { AiOutlineCloseSquare, AiOutlineClose } from "react-icons/ai";

const FullScreenVideo = () => {
  // Context
  const langContext = useContext(LangContext);
  const { modal, modalURL, hideModal } = langContext;

  const node = useRef();

  const [open, setOpen] = useState(true);

  const handleClickOutside = (e) => {
    setOpen(true);
    hideModal();
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      className="fullScreenVideo"
      display={modal ? "flex" : "none"}
    >
      <Box position="absolute" ref={node}>
        <Box
          className="close-icon"
          color="white"
          position="relative"
          top={0}
          right={0}
        >
          <Icon cursor="pointer" w={8} h={8} as={AiOutlineCloseSquare} />
        </Box>
        <ReactPlayer width="80vw" height="80vh" url={modalURL} controls />
      </Box>
    </Flex>
  );
};

export default FullScreenVideo;
