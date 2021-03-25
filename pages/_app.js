import { ChakraProvider, Container } from "@chakra-ui/react";
import "../styles/globals.css";

import Header from "../components/Header";

import LangState from "../context/lang/LangState";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <LangState>
        <Header />
        <Container maxW="container.xl">
          <Component {...pageProps} />
        </Container>
      </LangState>
    </ChakraProvider>
  );
}

export default MyApp;
