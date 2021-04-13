import React, { useContext } from "react";
import { Container, Box, Flex, Text, Button } from "@chakra-ui/react";

import LangContext from "../context/lang/langContext";

const Header = () => {
  const langContext = useContext(LangContext);

  const { changeLang, lang } = langContext;

  return (
    <Box minH="100vh" className="bg">
      <Box position="relative" background="white" py="10">
        <Container maxW="container.xl">
          <Flex justifyContent="space-between" alignItems="center">
            <Box>
              <h1 className="logo">CICCIO FARRO</h1>
              <Text>Producer & Sound Engineer</Text>
            </Box>
            <Flex>
              <Button
                variant="link"
                size="xs"
                textDecoration={lang === "ita" ? "underline" : "none"}
                onClick={() => changeLang("ita")}
              >
                ITA
              </Button>
              <Button
                ml={1}
                variant="link"
                size="xs"
                textDecoration={lang === "eng" ? "underline" : "none"}
                onClick={() => changeLang("eng")}
              >
                ENG
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
