import Head from "next/head";
import { Text, Link } from "@chakra-ui/react";

import Bio from "../components/Bio";
import What from "../components/What";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      {/* <Box minH="100vh" className="bg">
        <Heading color="white" m="auto">
          Ciccio Farro
        </Heading>
      </Box> */}

      <Bio />

      <What />

      <Contacts />

      <Footer />
    </>
  );
}
