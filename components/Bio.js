import React, { useContext } from "react";
import { Box, Text, Heading, Image, Flex } from "@chakra-ui/react";
import LangContext from "../context/lang/langContext";

const Bio = () => {
  const langContext = useContext(LangContext);

  const { lang } = langContext;

  return (
    /* Biografia */
    <Box>
      <Box className="heading" textAlign="center">
        <Heading className="text" my={20}>
          {lang.lang === "ita" ? "BIOGRAFIA" : "BIOGRAPHY"}
        </Heading>
      </Box>
      <Flex flexDirection="column" justifyContent="center">
        <Flex flexDirection={{ md: "row", sm: "column" }} alignItems="center">
          <Image
            mr={{ md: 6, sm: 0 }}
            mb={{ md: 0, sm: 10 }}
            h="auto"
            w="350px"
            src="/ciccio_bio.jpeg"
          />
          {lang.lang === "ita" ? (
            <Text>
              <span className="highlight">Francesco Farro</span>, (quasi) per
              tutti Ciccio, è un Producer e Sound Engineer, classe 94’.
              L’immensa passione per la musica e nell’esattezza dei vari
              fenomeni sociali/musicali lo porta da un lato a coltivare fin
              dalla prima adolescenza lo studio della musica, del suono e della
              discografia in generale (essendo un avido collezionista) e
              dall’altro ad intraprendere gli studi in Sociologia, appena
              terminato il liceo. La partecipazione assidua a progetti musicali
              di vario genere, l’accumulo seriale di dischi (con conseguente
              curiosità di come venissero fatti) e l’intensità nel produrre
              beats, vincono, negli anni a cavallo tra le superiori e
              l’università, nettamente a discapito degli studi intrapresi. Così,
              a 23 anni Ciccio decide di voltare pagina, ritrovandosi a Berlino
              per poi conseguire il diploma in “Music Production and Sound
              Engineering” presso l’{" "}
              <span className="highlight">Abbey Road Institute</span> di
              Berlino.
              <br></br>
              <br></br>
              Immediatamente dopo gli studi, Ciccio si ritrova ad intraprendere
              diverse Internships e a ricoprire diversi ruoli (Rec assistant,
              Mix asistant) in diversi studi ( Bewake Berlin, Laboratori Testone
              Milan etc.) entrando in contatto con musicisti, produzioni e
              sessions di elevato profilo. Parallelamente da freelancer e in
              veste di Recording/Mixing Engineer e Producer collabora con
              diversi progetti, gruppi e persone (Claudio Melis, Larry Manteca,
              Pierpaolo Bertoli etc.). Non dimentichiamo il progetto{" "}
              <span className="highlight">'Gennà'</span> , rilasciato su
              Dualismo Sound grazie all’amicizia stabilita con Andrea Dellera,
              che sostanzialmente risulta essere un tributo a decadi di dance
              music dove si amalgano diversi generi cari a Ciccio.
            </Text>
          ) : (
            <Text>
              <span className="highlight">Francesco Farro</span>, aka Ciccio, is
              Producer and Sound Engineer, born 94’. The incredible passion for
              music, specifically for the various social/musical phenomenon,
              brought him to pursue on the one hand (since early teenagehood)
              his music, sound, and discography studies (he is an avid
              collector). On the other hand, he's pursued his studies in
              Sociology, right after high school. His participation in many and
              varied musical projects, the serial accumulation of disks (with
              consequent curiosity on how they would be produced) and the
              intense production of beats, makes Ciccio want to pursue his
              musical career rather than his studies. So, at 23 years old he
              moves to Berlin, where he graduates in “Music Production and Sound
              Engineering” at the{" "}
              <span className="highlight">Abbey Road Institute</span>.<br></br>
              <br></br>
              Right after his studies, Ciccio takes on various Internships and
              works as Rec assistant and Mix assistant in different studios (
              Bewake Berlin, Laboratori Testone Milan etc.). This gives him the
              chance to get in touch with high-profile musicians, productions,
              and sessions. At the same time as a freelancer, Recording/Mixing
              Engineer, and Producer he collaborates on various projects,
              groups, and people (Claudio Melis, Larry Manteca, Pierpaolo
              Bertoli etc.). The hit <span className="highlight">'Gennà'</span>,
              released on Dualismo Sound, is a tribute to decades of dance
              music, where different genres that Ciccio loves to get together.
            </Text>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Bio;
