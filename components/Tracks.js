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
      <Flex flexDirection="column" alignItems="center">
        <Box>
          <ReactPlayer
            mr={{ md: 6, sm: 0 }}
            width="60vw"
            height="100px"
            url="https://soundcloud.com/neom-2/ciccio-fawav"
          />
        </Box>
        <Box mt={10}>
          <ReactPlayer
            width="60vw"
            height="100px"
            url="https://soundcloud.com/altritaliamusic/altritalia"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Tracks;
