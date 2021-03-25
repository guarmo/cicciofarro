import React, { useContext } from "react";
import { Container, Box, Flex, Image, Text } from "@chakra-ui/react";

import LangContext from "../context/lang/langContext";

const Header = () => {
  const langContext = useContext(LangContext);

  const { changeLang } = langContext;

  return (
    <Box minH="100vh" className="bg">
      <Box position="relative" background="white" py="14">
        <Container maxW="container.xl">
          <Flex justifyContent="space-between" alignItems="center">
            <Box>
              <h1 className="logo">CICCIO FARRO</h1>
              <Text>Producer & Sound Engineer</Text>
            </Box>
            <Flex>
              <Image
                src="./italy.png"
                alt=""
                width="25px"
                height="25px"
                cursor="pointer"
                onClick={() => changeLang("ita")}
              />
              <Image
                src="./united-states.png"
                alt=""
                width="25px"
                height="25px"
                ml={2}
                cursor="pointer"
                onClick={() => changeLang("eng")}
              />
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
