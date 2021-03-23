import {
  ChakraProvider,
  Container,
  Box,
  Heading,
  Flex,
} from "@chakra-ui/react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      {/* Header */}
      <Box minH="100vh" className="bg">
        <Container maxW="container.xl">
          <Flex
            h="100vh"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Navbar />
          </Flex>
          {/* <Heading color="white" m="auto">
            Ciccio Farro
          </Heading> */}
        </Container>
      </Box>
      <Container maxW="container.xl">
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
