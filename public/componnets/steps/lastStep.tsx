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
      <Text
        textAlign="center"
        fontSize="20px"
        color={primary}
        fontWeight="500"
        mb="30px"
      >
        Sua reunião já foi agendada e seu horário reservado. <br />
        Entraremos em contato o mais breve possível, desde já agradecemos.{" "}
      </Text>
      <Box w="1440px" mx="auto" alignContent="center">
        <Flex justifyContent="space-between">
          <Box mx="auto">
            <Text
              textAlign="center"
              fontSize="25px"
              color={secondary}
              fontWeight="600"
              mt="5%"
            >
              Ajude nos a melhorar sua experiência! Deixe um comentário.
            </Text>
          </Box>
        </Flex>
        <Textarea placeholder="Escreva aqui sua sujestão!" w="50%" mt="2%" ml="25%"></Textarea>
        <Box w="20%" mx="auto" my="3%">
          <Button w="full" bg={primary} color="white">
            Enviar
          </Button>
        </Box>
      </Box>
    </Flex>
  );
}
