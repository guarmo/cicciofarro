import Head from "next/head";
import { Box } from "@chakra-ui/react";

import Bio from "../components/Bio";
import Works from "../components/Works";
import Tracks from "../components/Tracks";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";

import FullScreenVideo from "../components/FullScreenVideo";

export default function Home() {
  return (
    <Box position="relative">
      <Head>
        <title>Ciccio Farro | Producer & Sound Engineer</title>
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        {/* <meta property="og:url" content="your url" /> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Ciccio Farro | Producer & Sound Engineer"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Ciccio Farro's personal page"
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1596563559916-f248667ba756?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
        />
      </Head>

      <FullScreenVideo />

      <Bio />

      <Works />

      <Tracks />

      <Contacts />

      <Footer />
    </Box>
  );
}
