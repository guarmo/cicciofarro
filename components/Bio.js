import React, { useContext } from "react";
import { Box, Text, Heading, Image, Flex, Link } from "@chakra-ui/react";

import LangContext from "../context/lang/langContext";

const Bio = () => {
  const langContext = useContext(LangContext);

  const { lang } = langContext;

  return (
    /* Biografia */
    <Flex flexDirection="column" justifyContent="center">
      <Box className="heading" my={20} textAlign="center">
        <Heading className="text">
          {lang === "ita" ? "BIOGRAFIA" : "BIOGRAPHY"}
        </Heading>
      </Box>
      <Flex flexDirection="column" justifyContent="center" textAlign="center">
        <Flex flexDirection={{ md: "row", base: "column" }} alignItems="center">
          <Image
            mr={{ md: 6, sm: 0 }}
            mb={{ md: 0, sm: 10 }}
            w="450px"
            h="auto"
            src="https://res.cloudinary.com/dqqhf85vd/image/upload/v1641631347/ciccio-bio_niz29l.jpg"
            mb={{ md: "0", base: "4" }}
          />
          {lang === "ita" ? (
            <Text>
              <Link
                fontWeight="800"
                href="https://www.instagram.com/cicciofarro/"
                target="_blank"
              >
                Francesco Farro
              </Link>
              , (quasi) per tutti Ciccio. Producer, Sound Engineer(Mix and
              Mastering) ed avido collezionista. Tutto è cominciato quando suo
              fratello gli ha regalato per il suo quindicesimo compleanno una
              coppia di Technics sl 1210. Da quel momento,lo studio della
              musica, la partecipazione assidua a progetti musicali, l’accumulo
              seriale di dischi (con conseguente curiosità di come venissero
              fatti) e l’intensità nel produrre beats gli hanno permesso di
              conseguire all’età di 24 anni il diploma in “Music Production and
              Sound Engineering” presso l’{" "}
              <Link
                fontWeight="800"
                href="https://abbeyroadinstitute.de"
                target="_blank"
              >
                Abbey Road Institute Berlin
              </Link>
              . Immediatamentedopo gli studi, Ciccio si è ritrovato in diversi
              studi d’Europa a ricoprire diversi ruoli (Rec Eng, Mix Engineer
              Stereo/Atmos,Mastering Engineer) entrando stabilmente in contatto
              con Inegneri, Musicisti e Produzioni di elevato profilo.
              Parallelamente da freelancer, in veste di Recording/Mixing
              Engineer e Producer, collabora con diversi Gruppi, Labels e
              Producers.
            </Text>
          ) : (
            <Text>
              <Link
                fontWeight="800"
                href="https://www.instagram.com/cicciofarro/"
                target="_blank"
              >
                Francesco Farro
              </Link>
              , aka Ciccio. Producer, Sound Engineer (Mix and Mastering) and
              thirsty Record Collector. Everything started when his Brother gave
              him for his 15th birthday a pair of Technics sl 1210. Since that
              day, the music studies, the assiduous collaboration to several
              music projects, the intense Records’s stockpile (with a curiosity
              on how those would have been made) and the intensity of beats
              produced made possible for him to obtaina Diploma in “Music
              Production and Sound Engineering” at the{" "}
              <Link
                fontWeight="800"
                href="https://abbeyroadinstitute.de"
                target="_blank"
              >
                Abbey Road Institute Berlin
              </Link>
              . Right after his studies, Ciccio had the chance to work (Rec Eng,
              Mix Engineer Stereo/Atmos, Mastering Engineer) in different
              studios across Europe and being constantly in touch with
              high-profile Engineers, Musicians and Productions . Concurrently
              as a freelancer, Recording/Mixing Engineer, and Producer
              collaborates with various Producers, Bands and Labels.
            </Text>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Bio;
