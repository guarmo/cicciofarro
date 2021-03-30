import React, { useContext } from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import ReactPlayer from "react-player";

import LangContext from "../context/lang/langContext";

const Tracks = () => {
  const langContext = useContext(LangContext);
  const { lang } = langContext;

  return (
    <Box>
      <Box className="heading" textAlign="center">
        <Heading className="text" my={20}>
          {lang === "ita" ? "TRACCE" : "TRACKS"}
        </Heading>
      </Box>
      {/* <Flex border="2px solid red" alignItems="center"> */}
      <Box ml="50%" transform="translateX(-50%)">
        <ReactPlayer
          height="100px"
          url="https://soundcloud.com/neom-2/ciccio-fawav"
        />
      </Box>
      <Box mt={10} ml="50%" transform="translateX(-50%)">
        <ReactPlayer
          height="100px"
          url="https://soundcloud.com/altritaliamusic/altritalia"
        />
      </Box>
      {/* </Flex> */}
    </Box>
  );
};

export default Tracks;
