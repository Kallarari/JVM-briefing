import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import React, { FormEvent, useEffect, useState } from "react";

type stepIntroductionProps = {
  progress: number;
  step: number;
  primary: string;
  secondary: string;  
};
export default function StepeIntroduction({
  progress,
  step,
  primary,
  secondary,
}: stepIntroductionProps) {
  return (
    <Box my="3%" display={progress == step ? "block" : "none"}>
    <Text
      fontFamily="body"
      my="1%"
      textAlign="center"
      fontSize="40px"
      color={primary}
      fontWeight="700"
    >
      Seja bem vindo a montagem de site rápida da JVM!
    </Text>
       <Text
          fontFamily="body"
          my="1%"
          textAlign="center"
          fontSize="60px"
          color={primary}
          fontWeight="700"
        >
          Monte seu próprio site
        </Text>
        <Text
          fontFamily="body"
          my="1%"
          textAlign="center"
          fontSize="40px"
          color={primary}
          fontWeight="700"
        >
          Escolha as opção que mais te chamam atenção
        </Text>
      <Text
        fontFamily="body"
        my="1%"
        textAlign="center"
        fontSize="20px"
        color={secondary}
        fontWeight="600"
      >
        {" "}
        Aqui você terá o preço e tempo estimado de cada aplicação e também
        conhecerá um pouco mais de nossos serviços e vantagens!
      </Text>
      <Flex justifyContent="space-around" w="75%" mx="auto">
                <Icon
                  icon="line-md:arrow-align-bottom"
                  style={{
                    width: '50px',
                    height: '50px',
                  }}
                  color={primary}
                />
                <Icon
                  icon="line-md:arrow-align-bottom"
                  style={{
                    width: '50px',
                    height: '50px',
                  }}
                  color={primary}
                /></Flex>
      <Flex justifyContent="space-between" as="form">
      </Flex>
    </Box>
  );
}
