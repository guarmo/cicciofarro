import { useContext, useState, useRef, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import ReactPlayer from "react-player";

import LangContext from "../context/lang/langContext";

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
      <div ref={node}>
        <ReactPlayer url={modalURL} />
      </div>
    </Flex>
  );
};

export default FullScreenVideo;
