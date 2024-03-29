import { useState, useContext } from "react";
import {
  Box,
  Flex,
  Heading,
  Link,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Icon,
  Button,
  HStack,
  createStandaloneToast,
  VStack,
} from "@chakra-ui/react";

import LangContext from "../context/lang/langContext";

import {
  AiOutlineInstagram,
} from "react-icons/ai";
import { IoIosSend } from "react-icons/io";

import emailjs from "emailjs-com";

const Contacts = () => {
  const langContext = useContext(LangContext);

  const { lang } = langContext;

  const [sendEmail, setSendEmail] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toast = createStandaloneToast();

  const [loading, setLoading] = useState(false);

  const { name, email, message } = sendEmail;

  const templateParams = {
    from_name: name,
    message,
    to_name: "Ciccio Farro",
    reply_to: email,
  };

  const onChange = (e) =>
    setSendEmail({ ...sendEmail, [e.target.name]: e.target.value });

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await emailjs
      .send(
        "service_1xszf9q",
        "template_ga1aamt",
        templateParams,
        "user_IFknTmtMnW39m0u8Ui4Ad"
      )
      .then(
        (response) => {
          toast({
            title: "Message sent.",
            description: "Thanks for getting in touch!",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
        },
        (err) => {
          toast({
            title: "Oops.",
            description: "Something went wrong!",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
        }
      );

    setLoading(false);

    setSendEmail({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Box mb={20}>
      <Box className="heading" textAlign="center">
        <Heading className="text" my={20}>
          {lang === "ita" ? "CONTATTI" : "CONTACTS"}
        </Heading>
      </Box>
      <Flex flexDirection="column" justifyContent="center">
        <form onSubmit={(e) => onFormSubmit(e)}>
          <VStack spacing="20px">
            <FormControl id="name" isRequired>
              <FormLabel> {lang === "ita" ? "Nome" : "Name"}</FormLabel>
              <Input
                type="text"
                name="name"
                value={name}
                onChange={onChange}
                required
              />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                required
              />
            </FormControl>

            <FormControl id="message" isRequired>
              <FormLabel> {lang === "ita" ? "Messaggio" : "Message"}</FormLabel>
              <Textarea
                rows="6"
                name="message"
                value={message}
                onChange={onChange}
                required
                placeholder={
                  lang === "ita"
                    ? "Lascia un messaggio qui..."
                    : "Enter a message here..."
                }
              />
            </FormControl>
          </VStack>

          {!loading ? (
            <Button
              variant="outline"
              type="submit"
              my={6}
              _hover={{ bg: "rgba(0, 0, 0, 0.1)" }}
              colorScheme="black"
              ml="50%"
              transform="translateX(-50%)"
            >
              {lang === "ita" ? "Invia" : "Send"}{" "}
            </Button>
          ) : (
            <Button
              type="submit"
              my={6}
              variant="outline"
              colorScheme="black"
              isLoading
              rightIcon={<IoIosSend />}
              backgroundColor="#00838d"
              ml="50%"
              transform="translateX(-50%)"
            >
              {lang === "ita" ? "Invia" : "Send"}{" "}
            </Button>
          )}
        </form>

        <Flex justifyContent="center" mt={20}>
          <HStack>
            <Link href="https://www.instagram.com/cicciofarro/" isExternal>
              <Icon
                transition="all .2s ease-in-out"
                _hover={{ transform: "scale(1.2)", color: "gray" }}
                w={12}
                h={12}
                as={AiOutlineInstagram}
              />
            </Link>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Contacts;
