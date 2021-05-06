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
            src="https://images.pexels.com/photos/7505457/pexels-photo-7505457.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
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
              , (quasi) per tutti Ciccio. Producer, Sound Engineer, Beat maker
              ed avido collezionista, classe 94’. Tutto è cominciato quando suo
              fratello (Peppe) gli ha regalato per il suo quindicesimo
              compleanno una coppia di Technics sl 1210. Da quel momento lo
              studio della musica, la partecipazione assidua a progetti
              musicali, l’accumulo seriale di dischi (con conseguente curiosità
              di come venissero fatti) e l’intensità nel produrre beats vincono
              sugli studi universitari intrapresi (Sociologia) così da far
              conseguire all’età di 24 anni il diploma in “Music Production and
              Sound Engineering” presso l’{" "}
              <Link
                fontWeight="800"
                href="https://abbeyroadinstitute.de"
                target="_blank"
              >
                Abbey Road Institute Berlin
              </Link>
              . Subito dopo gli studi, Ciccio si ritrova ad intraprendere
              diverse Internships e a ricoprire diversi ruoli (Rec Eng, Mix
              assistant, Producer, Arranger etc.) in diversi studi d’Europa
              (Bewake Berlin, Schwerkraftmusik, Laboratori Testone Milan etc.)
              entrando in contatto con Inegneri, Musicisti e Produzioni di
              elevato profilo. Parallelamente da freelancer e in veste di
              Recording/Mixing Engineer e Producer collabora con diversi gruppi,
              persone e labels.
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
              , aka Ciccio. Producer, Sound Engineer, Beat maker and Thirsty
              Record Collector born 94’. Everything started when his Brother
              (Peppe) gave him for his 15th birthday a pair of Technics sl 1210.
              Since that day, the music studies, the assiduous collaboration to
              several music projects, the intense Records’s stockpile (with
              curiosity how those would have been made) and the intensity of
              beats produced won on the undertaken University studies
              (Sociology) obtaining at the age of 24 years old a Diploma in
              ““Music Production and Sound Engineering” at the{" "}
              <Link
                fontWeight="800"
                href="https://abbeyroadinstitute.de"
                target="_blank"
              >
                Abbey Road Institute Berlin
              </Link>
              . Right after his studies, Ciccio takes on various Internships and
              works as (Rec Eng, Mix assistant, Producer, Arranger etc.) in
              different studios across Europe (Bewake Berlin, Schwerkraftmusik,
              Laboratori Testone Milan etc.) giving him the chance to get in
              touch with high-profile Engineers, Musicians and Productions . At
              the same time as a freelancer, Recording/Mixing Engineer, and
              Producer collaborates on various projects, groups, and Labels.
            </Text>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Bio;
