import { Box, Heading, Link, Grid, Image, Flex } from "@chakra-ui/react";

const What = () => {
  return (
    /* What */
    <Box my={10}>
      <div class="heading">
        <Heading className="text">What</Heading>
      </div>
      <Grid
        templateColumns={{
          lg: "repeat(3, 1fr)",
          md: "repeat(2, 1fr)",
          sm: "repeat(1, 1fr)",
        }}
        gap={6}
      >
        <div className="content">
          <Link href="https://www.youtube.com/watch?v=SIy2SaTYx3Q" isExternal>
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
          </Link>
        </div>

        <div className="content">
          <Link href="https://www.youtube.com/watch?v=fZJ1nAD9we4" isExternal>
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
          </Link>
        </div>

        <div className="content">
          <Link href="https://www.youtube.com/watch?v=7g8PniObsc4" isExternal>
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
          </Link>
        </div>
      </Grid>
    </Box>
  );
};

export default What;
