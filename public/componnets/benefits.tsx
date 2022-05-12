import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

type explainProps = {
  primary: string;
  secondary: string;
  chose: number;
};
export default function Benefits({ primary, secondary, chose }: explainProps) {
  return (
    <>
      {" "}
      <Flex
        justifyContent="space-around"
        w="1440px"
        mx="auto"
        display={chose == 1 ? "Flex" : "none"}
        h="fit"
        my="5%"
      >
        <Box w="30%" borderRight="1px solid" borderColor={secondary}>
          <Text
            textAlign="center"
            fontSize="30px"
            color={primary}
            fontWeight="600"
          >
            Vantagens
          </Text>
          <Text textAlign="center" fontSize="20px">
            Desenvolvimento próprio
          </Text>
          <Text textAlign="center" fontSize="20px" mt="3%">
            Sistema de agendamento online
          </Text>
        </Box>
        <Box w="30%" borderRight="1px solid #aaaaa">
          <Text
            textAlign="center"
            fontSize="30px"
            color={primary}
            fontWeight="600"
          >
            Público
          </Text>
          <Text textAlign="center" fontSize="20px">
            Invista em anúncios que aparecerão apenas para pessoas interessadas
            e para um público mais centralizado
          </Text>
          <Text textAlign="center" fontSize="20px" mt="3%">
            Tráfego orgânico gratuíto
          </Text>
        </Box>
        <Box w="30%" borderLeft="1px solid" borderColor={secondary}>
          <Text
            textAlign="center"
            fontSize="30px"
            color={primary}
            fontWeight="600"
          >
            Resultados
          </Text>
          <Text textAlign="center" fontSize="20px">
            60% de desenvolvimento de marca nos primeiros dois meses
          </Text>
          <Text textAlign="center" fontSize="20px" mt="3%">
            Agendamento online para clínicas.
          </Text>
        </Box>
      </Flex>{" "}
      <Flex
        justifyContent="space-around"
        w="1440px"
        mx="auto"
        display={chose == 2 ? "Flex" : "none"}
        h="fit"
        my="5%"
      >
        <Box w="30%" borderRight="1px solid" borderColor={secondary}>
          <Text
            textAlign="center"
            fontSize="30px"
            color={primary}
            fontWeight="600"
          >
            Vantns
          </Text>
          <Text textAlign="center" fontSize="20px">
            Deseo próprio
          </Text>
          <Text textAlign="center" fontSize="20px" mt="3%">
            Sistema deo online
          </Text>
        </Box>
        <Box w="30%" borderRight="1px solid #aaaaa">
          <Text
            textAlign="center"
            fontSize="30px"
            color={primary}
            fontWeight="600"
          >
            Público
          </Text>
          <Text textAlign="center" fontSize="20px">
            Invista em anúncios que aparecerão apenas para pessoas interessadas
            e para ralizado
          </Text>
          <Text textAlign="center" fontSize="20px" mt="3%">
            Tráfego orgânico gratuíto
          </Text>
        </Box>
        <Box w="30%" borderLeft="1px solid" borderColor={secondary}>
          <Text
            textAlign="center"
            fontSize="30px"
            color={primary}
            fontWeight="600"
          >
            Resultados
          </Text>
          <Text textAlign="center" fontSize="20px">
            60% de desenvols primeiros dois meses
          </Text>
          <Text textAlign="center" fontSize="20px" mt="3%">
            Agendamenra clínicas.
          </Text>
        </Box>
      </Flex>{" "}
      <Flex
        justifyContent="space-around"
        w="1440px"
        mx="auto"
        display={chose == 3 ? "Flex" : "none"}
        h="fit"
        my="5%"
      >
        <Box w="30%" borderRight="1px solid" borderColor={secondary}>
          <Text
            textAlign="center"
            fontSize="30px"
            color={primary}
            fontWeight="600"
          >
            Vantans
          </Text>
          <Text textAlign="center" fontSize="20px">
            Desenvolvio próprio
          </Text>
          <Text textAlign="center" fontSize="20px" mt="3%">
            Sistema de agendamento online
          </Text>
        </Box>
        <Box w="30%" borderRight="1px solid #aaaaa">
          <Text
            textAlign="center"
            fontSize="30px"
            color={primary}
            fontWeight="600"
          >
            Públo
          </Text>
          <Text textAlign="center" fontSize="20px">
            Invista em anúncarecerão apenas para pessoas interessadas e para um
            público mais centralizado
          </Text>
          <Text textAlign="center" fontSize="20px" mt="3%">
            Tráfego orgâniatuíto
          </Text>
        </Box>
        <Box w="30%" borderLeft="1px solid" borderColor={secondary}>
          <Text
            textAlign="center"
            fontSize="30px"
            color={primary}
            fontWeight="600"
          >
            Resudos
          </Text>
          <Text textAlign="center" fontSize="20px">
            60% de desenvolvim marca nos primeiros dois meses
          </Text>
          <Text textAlign="center" fontSize="20px" mt="3%">
            Agendamento online panicas.
          </Text>
        </Box>
      </Flex>
    </>
  );
}
