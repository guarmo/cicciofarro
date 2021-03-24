import {
  Box,
  Heading,
  Link,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Icon,
  Button,
} from "@chakra-ui/react";

import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineMail,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { RiSoundcloudLine } from "react-icons/ri";

const Contacts = () => {
  return (
    /* Contacts */
    <Box my={10}>
      <div class="heading">
        <Heading className="text">Contacts</Heading>
      </div>
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
  );
};

export default Contacts;
