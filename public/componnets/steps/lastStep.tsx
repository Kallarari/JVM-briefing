import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type stepExampleProps = {
  progress: number;
  step: number;
  primary: string;
  secondary: string;
};
export default function LastStep({
  progress,
  step,
  primary,
  secondary,
}: stepExampleProps) {
  return (
    <Flex
      justifyContent="space-between"
      my="3%"
      display={progress == step ? "Block" : "none"}
    >
      <Text
        textAlign="center"
        fontSize="25px"
        color={secondary}
        fontWeight="600"
      >
        Parabéns
      </Text>
      <Text
        textAlign="center"
        fontSize="20px"
        color={primary}
        fontWeight="500"
        mb="30px"
      >
        Você terminou o Briefing da JVM!!
      </Text>
      <Text textAlign="center" fontSize="15px" color={primary} fontWeight="500">
        Visite nosso site oficial e veja nossos últimos sites
        <br />
      </Text>

      <Text textAlign="center" fontSize="15px" color={primary} fontWeight="500">
        Entraremos em contato o mais breve possível, desde já agradecemos.{" "}
      </Text>
      <Box w="60%" mx="auto" my="3%">
        <Link passHref href="https://jvm-webmarketing.vercel.app/">
          <Button w="100%" bg={secondary} color="white">
            Site JVM
          </Button>
        </Link>
      </Box>
      <Box
        w={{ base: "none", lg: "1280px", xl: "1440px" }}
        mx="auto"
        alignContent="center"
      >
        <Flex justifyContent="space-between">
          <Box mx="auto">
            <Text
              textAlign="center"
              fontSize="16px"
              color={secondary}
              fontWeight="500"
              mt="5%"
            >
              Ajude nos a melhorar sua experiência! Deixe um comentário.
            </Text>
          </Box>
        </Flex>
        <Box w="80%" mx="auto">
          <Textarea placeholder="Escreva aqui sua sujestão!" mt="2%"></Textarea>
        </Box>
        <Box w="60%" mx="auto" my="3%">
          <Button w="100%" bg={primary} color="white">
            Enviar
          </Button>
        </Box>
      </Box>
    </Flex>
  );
}
