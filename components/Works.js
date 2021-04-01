import React, { useContext } from "react";
import { Box, Heading, Grid, Image, Flex } from "@chakra-ui/react";

import LangContext from "../context/lang/langContext";

const Works = () => {
  // Context
  const langContext = useContext(LangContext);
  const { lang, showModal } = langContext;

  return (
    <Flex flexDirection="column" justifyContent="center">
      <Box className="heading" my={20} textAlign="center">
        <Heading className="text">
          {lang === "ita" ? "LAVORI" : "WORKS"}
        </Heading>
      </Box>
      <Flex flexDirection="column" justifyContent="center">
        <Grid
          templateColumns={{
            lg: "repeat(3, 1fr)",
            md: "repeat(2, 1fr)",
            sm: "repeat(1, 1fr)",
          }}
          gap={6}
        >
          <Box
            cursor="pointer"
            className="content"
            onClick={() =>
              showModal("https://www.youtube.com/watch?v=SIy2SaTYx3Q")
            }
          >
            <div className="content-overlay"></div>
            <Image
              objectFit="cover"
              className="content-image"
              src="/GinTonic.png"
            />
            <div className="content-details fadeIn-left">
              <h3>SAVING SERAFINO - Gin Tonic</h3>
              <p>Recording Engineeer</p>
            </div>
          </Box>

          <Box
            cursor="pointer"
            className="content"
            onClick={() =>
              showModal("https://www.youtube.com/watch?v=fZJ1nAD9we4")
            }
          >
            <div className="content-overlay"></div>
            <Image
              minH="300px"
              maxH="100%"
              minW="100%"
              objectFit="cover"
              className="content-image"
              src="/Sranovski.png"
            />
            <div className="content-details fadeIn-left">
              <h3>STANOVSKY - Greece x Athen (Cover)</h3>
              <p>Mixing and Post producing</p>
            </div>
          </Box>

          <Box
            cursor="pointer"
            className="content"
            onClick={() =>
              showModal("https://www.youtube.com/watch?v=7g8PniObsc4")
            }
          >
            <div className="content-overlay"></div>
            <Image
              minH="300px"
              maxH="100%"
              minW="100%"
              objectFit="cover"
              className="content-image"
              src="/Bertoli.png"
            />
            <div className="content-details fadeIn-left">
              <h3>Pier Paolo Bertoli - Brucia</h3>
              <p>Recording Engineeer</p>
            </div>
          </Box>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Works;
