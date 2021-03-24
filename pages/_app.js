import {
  ChakraProvider,
  Container,
  Box,
  Heading,
  Flex,
  Text,
} from "@chakra-ui/react";
import "../styles/globals.css";
import Test from "../components/Test";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      {/* Header */}
      <Flex justifyContent="flex-end">
        <Flex
          className="pattern"
          w="50%"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          pl={4}
        >
          {/* <Heading as="h1" size="4xl">
            ciccio farro
          </Heading>
          <Text>Music Producer & Collector</Text> */}
          <Test />
        </Flex>
        <Box minH="100vh" className="bg"></Box>
      </Flex>
      <Container maxW="container.xl">
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
