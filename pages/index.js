import Head from "next/head";
import { Text, Link, Box } from "@chakra-ui/react";

import Bio from "../components/Bio";
import Works from "../components/Works";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";

import FullScreenVideo from "../components/FullScreenVideo";

export default function Home() {
  return (
    <Box position="relative">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <FullScreenVideo /> */}

      <Bio />

      <Works />

      <Contacts />

      <Footer />
    </Box>
  );
}
