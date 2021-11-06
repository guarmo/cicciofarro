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
      <Box>
        <Grid
          templateColumns={{
            md: "repeat(2, 1fr)",
            sm: "repeat(1, 1fr)",
          }}
          gap={6}
        >
          <Box
            cursor="pointer"
            className="content"
            onClick={() =>
              showModal("https://www.youtube.com/watch?v=v8N5GdacBFo&ab_channel=SvenHelbig")
            }
          >
            <div className="content-overlay"></div>
            <Image
              objectFit="cover"
              className="content-image"
              src="/Vision.png"
            />
            <div className="content-details fadeIn-left">
              <h3>Vision - Sven Helbig</h3>
              <p>Immersive Mixing Engineer</p>
            </div>
          </Box>

          <Box
            cursor="pointer"
            className="content"
            onClick={() =>
              showModal("https://www.youtube.com/watch?v=MgS-Lq_pUGk&ab_channel=LudovicoEinaudiVEVO")
            }
          >
            <div className="content-overlay"></div>
            <Image
              objectFit="cover"
              className="content-image"
              src="/Luminous.png"
            />
            <div className="content-details fadeIn-left">
              <h3>Luminous - Ludovico Einaudi</h3>
              <p>Assistant Mastering Engineer</p>
            </div>
          </Box>

          <Box
            cursor="pointer"
            className="content"
            onClick={() =>
              showModal("https://www.youtube.com/watch?v=GVOienO5EMI&ab_channel=Jamila%26TheOtherHeroes-Topic")
            }
          >
            <div className="content-overlay"></div>
            <Image
              objectFit="cover"
              className="content-image"
              src="/Yaba.png"
            />
            <div className="content-details fadeIn-left">
              <h3>YABA يابا</h3>
              <p>Rec Engineer & Mix Assistant</p>
            </div>
          </Box>

          <Box
            cursor="pointer"
            className="content"
            onClick={() =>
              showModal("https://www.youtube.com/watch?v=iMMngdp2Gto")
            }
          >
            <div className="content-overlay"></div>
            <Image
              objectFit="cover"
              className="content-image"
              src="/OcchialiDaVista.png"
            />
            <div className="content-details fadeIn-left">
              <h3>Occhiali da vista - Claudio Melis</h3>
              <p>Rec and Mix Engineer</p>
            </div>
          </Box>

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
              <h3>Saving Serafino - Gin Tonic</h3>
              <p>Rec Engineer</p>
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
              <p>Mixing and Post Producing</p>
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
              <h3>Stanovsky - Greece x Athen (Cover)</h3>
              <p>Rec Engineer</p>
            </div>
          </Box>
        </Grid>
      </Box>
    </Flex>
  );
};

export default Works;
