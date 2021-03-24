import { Box, Text, Heading, Image, Flex } from "@chakra-ui/react";

const Bio = () => {
  return (
    /* Biografia */
    <Flex minH="100vh" flexDirection="column" justifyContent="center" my={10}>
      <div class="heading">
        <Heading className="text">Biografia</Heading>
      </div>
      <Flex flexDirection={{ md: "row", sm: "column" }} alignItems="center">
        <Image mr="20px" h="350px" w="350px" src="/ciccio_bio.jpeg" />
        <Text>
          Francesco Farro, (quasi) per tutti Ciccio, è un Producer e Sound
          Engineer, classe 94’. L’immensa passione per la musica e
          nell’esattezza dei vari fenomeni sociali/musicali lo porta da un lato
          a coltivare fin dalla prima adolescenza lo studio della musica, del
          suono e della discografia in generale (essendo un avido collezionista)
          e dall’altro ad intraprendere gli studi in Sociologia, appena
          terminato il liceo. La partecipazione assidua a progetti musicali di
          vario genere, l’accumulo seriale di dischi (con conseguente curiosità
          di come venissero fatti) e l’intensità nel produrre beats, vincono,
          negli anni a cavallo tra le superiori e l’università, nettamente a
          discapito degli studi intrapresi. Così, a 23 anni Ciccio decide di
          voltare pagina, ritrovandosi a Berlino per poi conseguire il diploma
          in “Music Production and Sound Engineering” presso l’Abbey Road
          Institute di Berlino. Immediatamente dopo gli studi, Ciccio si ritrova
          ad intraprendere diverse Internships e a ricoprire diversi ruoli (Rec
          assistant, Mix asistant) in diversi studi (Bewake Berlin, Laboratori
          Testone Milan etc.) entrando in contatto con musicisti, produzioni e
          sessions di elevato profilo. Parallelamente da freelancer e in veste
          di Recording/Mixing Engineer e Producer collabora con diversi
          progetti, gruppi e persone (Claudio Melis, Larry Manteca, Pierpaolo
          Bertoli etc.). Non dimentichiamo il progetto ‘Gennà’, rilasciato su
          Dualismo Sound grazie all’amicizia stabilita con Andrea Dellera, che
          sostanzialmente risulta essere un tributo a decadi di dance music dove
          si amalgano diversi generi cari a Ciccio.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Bio;
