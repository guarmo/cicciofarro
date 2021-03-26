import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import ReactPlayer from "react-player";

const FullScreenVideo = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      className="fullScreenVideo"
    >
      <ReactPlayer url="https://www.youtube.com/watch?v=SIy2SaTYx3Q" />
    </Flex>
  );
};

export default FullScreenVideo;
