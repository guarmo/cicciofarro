import Head from "next/head";
import {
  Box,
  Text,
  Heading,
  Link,
  Grid,
  Image,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Icon,
  Flex,
  Button,
} from "@chakra-ui/react";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineMail,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { RiSoundcloudLine } from "react-icons/ri";

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
      {/* Biografia */}
      <Box my={10}>
        <Heading>Biografia</Heading>
        <Flex flexDirection={{ md: "row", sm: "column" }} alignItems="center">
          <Image mr="20px" h="400px" w="auto" src="/ciccio_bio.jpeg" />
          <Text>
            Francesco Farro, (quasi) per tutti Ciccio, è un Producer e Sound
            Engineer, classe 94’. L’immensa passione per la musica e
            nell’esattezza dei vari fenomeni sociali/musicali lo porta da un
            lato a coltivare fin dalla prima adolescenza lo studio della musica,
            del suono e della discografia in generale (essendo un avido
            collezionista) e dall’altro ad intraprendere gli studi in
            Sociologia, appena terminato il liceo. La partecipazione assidua a
            progetti musicali di vario genere, l’accumulo seriale di dischi (con
            conseguente curiosità di come venissero fatti) e l’intensità nel
            produrre beats, vincono, negli anni a cavallo tra le superiori e
            l’università, nettamente a discapito degli studi intrapresi. Così, a
            23 anni Ciccio decide di voltare pagina, ritrovandosi a Berlino per
            poi conseguire il diploma in “Music Production and Sound
            Engineering” presso l’Abbey Road Institute di Berlino.
            Immediatamente dopo gli studi, Ciccio si ritrova ad intraprendere
            diverse Internships e a ricoprire diversi ruoli (Rec assistant, Mix
            asistant) in diversi studi (Bewake Berlin, Laboratori Testone Milan
            etc.) entrando in contatto con musicisti, produzioni e sessions di
            elevato profilo. Parallelamente da freelancer e in veste di
            Recording/Mixing Engineer e Producer collabora con diversi progetti,
            gruppi e persone (Claudio Melis, Larry Manteca, Pierpaolo Bertoli
            etc.). Non dimentichiamo il progetto ‘Gennà’, rilasciato su Dualismo
            Sound grazie all’amicizia stabilita con Andrea Dellera, che
            sostanzialmente risulta essere un tributo a decadi di dance music
            dove si amalgano diversi generi cari a Ciccio.
          </Text>
        </Flex>
      </Box>

      {/* What */}
      <Box my={10}>
        <Heading>What</Heading>
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

      {/* Contacts */}
      <Box my={10}>
        <Heading>Contacts</Heading>
        <form>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input type="name" />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </FormControl>

          <FormControl id="message" isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Enter a message here..." />
          </FormControl>

          <Button>Send</Button>
        </form>

        <Link href="https://www.instagram.com/cicciofarro/" isExternal>
          <Icon w="50px" h="50px" as={AiOutlineInstagram} />
        </Link>
        <Link
          href="https://www.facebook.com/Ciccio-Fà-nk-333175224140553 "
          isExternal
        >
          <Icon w="50px" h="50px" as={AiOutlineFacebook} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/francesco-farro-b4b04b79/ "
          isExternal
        >
          <Icon w="50px" h="50px" as={AiOutlineLinkedin} />
        </Link>
        <Link href="https://www.instagram.com/cicciofarro/" isExternal>
          <Icon w="50px" h="50px" as={AiOutlineMail} />
        </Link>
        <Link href="https://soundcloud.com/neom-2" isExternal>
          <Icon w="50px" h="50px" as={RiSoundcloudLine} />
        </Link>
      </Box>

      {/* Footer */}
      <footer>
        <Text>
          <Link href="https://armandoguarino.dev" isExternal>
            2021 &#169; Armando Guarino
          </Link>
        </Text>
      </footer>
    </>
  );
}
