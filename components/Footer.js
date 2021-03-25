import { Text, Link, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    /* Footer */
    <footer>
      <Flex justifyContent="center">
        <Text>
          <Link href="https://armandoguarino.dev" isExternal>
            2021 &#169; Armando Guarino
          </Link>
        </Text>
      </Flex>
    </footer>
  );
};

export default Footer;
