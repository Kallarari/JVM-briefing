import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  Text,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Finish() {
  const [color, setColor] = useState("#0079AE");
  const [color2, setColor2] = useState("#E68C26");
  return (
    <>
    <Box w="100vw"minH="90vh" bg="white">      
      <Flex
        h="10vh"
        w="100vw"
        justifyContent="center"
        alignContent="center"
        bg={color}
        zIndex="10"
        boxShadow="0 5px 5px #242424aa"
      >
        <Link passHref href="https://jvm-webmarketing.vercel.app/">
          <Image
            src="/logosite-branco.png"
            w="15vw"
            alt=""
            alignSelf="center"
            maxH="9vh"
          />
        </Link>
      </Flex>
      <Text color={color2} textAlign="center" w="90vw" fontSize="25px" fontWeight="500" mt="5vh" mx="auto">Parabéns! Você terminou a montagem do seu site!</Text>
      <Text color={color} textAlign="center" w="90vw" fontSize="20px" fontWeight="500" mt="5vh" mx="auto">Vamos desenvolver uma proposta para seu perfil e bater um papo na reunião que você marcou!</Text>
      <Text color={color2} textAlign="center" w="90vw" fontSize="18px" fontWeight="500" mt="5vh" mx="auto">Agradecemos o seu tempo e interesse</Text>
      
      <Image
            src="/prototipe.png"
            w="35vw"
            my="2vh"
            alt=""
            alignSelf="center"
            mx="auto"
          />
      <Flex my="2vh" justifyContent="space-around">
        <Link
          passHref
          href={"https://jvm-webmarketing.vercel.app/port/index.html"}
        >
          <Button bg={color2} opacity="1" color="white">
            Ver portfólio JVM
          </Button>
        </Link>
        <Link passHref href={"https://jvm-webmarketing.vercel.app/"}>
          <Button bg={color2} opacity="1" color="white">
            Site oficial JVM
          </Button>
        </Link>
      </Flex>
    </Box>
    
    <Text
    textAlign="center"
    pt="3vh"
    bg="#aaaa"
    w="100vw"
    h="10vh"
    fontWeight="600"
  >
    Copyrigth:JVM
  </Text>
  </>
  );
}
