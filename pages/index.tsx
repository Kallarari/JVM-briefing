import {
  Box,
  Button,
  Flex,
  Text,
  Image,
  transition,
  InputGroup,
  InputLeftAddon,
  Input,
  Radio,
  Stack,
  RadioGroup,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import StepOne from "./steps/stepOne";
import StepTwo from "./steps/sterTwo";
import StepeExample from "./steps/stepExample";
import StepeZero from "./steps/stepZero";
import Link from "next/link";
import Explain from "./componnets/explain";
import Benefits from "./componnets/benefits";

const Home: NextPage = () => {
  const [primary, setPrimary] = useState("#0079AE");
  const [secondary, setSecondary] = useState("#E68C26");
  const [chose, setChose] = React.useState(1);
  const [time, setTime] = React.useState(100);
  const [progress, setProgress] = React.useState(0);
  var steps = [0];
  const [valor, setValor] = React.useState("");

  function handleAddValue(step: number, value: number) {
    steps[step] = value;
    let val = 0;
    for (let i = 0; i < steps.length; i++) {
      val = steps[i] + val;
    }
    let text = val.toString();
    setValor(text);
  }
  return (
    <>
      <Box w="1440px" mx="auto">
        <Flex
          py="25px"
          justifyContent="space-between"
          borderY="1px solid #cccc"
        >
          <Flex pl="5%" alignSelf="center">
            <Icon icon="bi:map" color={primary} width={25} />
            <Text ml="10px">Florianópolis/SC </Text>
          </Flex>
          <Flex borderLeft="1px solid #cccc" pl="5%" alignSelf="center">
            <Icon icon="entypo:mail" color={primary} width={25} />
            <Text ml="10px">jvm@outlook.com </Text>
          </Flex>
          <Flex borderLeft="1px solid #cccc" pl="5%" alignSelf="center">
            <Icon icon="carbon:phone-filled" color={primary} width={25} />
            <Text ml="10px">+48 9 99383088 </Text>
          </Flex>
          <Flex w="45%" justifyContent="center">
            <Button bg={primary} borderRadius="20px" w="50%" color="white">
              Contato
            </Button>
          </Flex>
        </Flex>
        <Flex
          h="10vh"
          w="60%"
          justifyContent="space-between"
          mx="auto"
          mt="20px"
        >
          <Text
            p="5px 10px"
            fontWeight="600"
            color="white"
            bg={secondary}
            h="min"
            borderRadius="10px"
          >
            Conheça a JVM
          </Text>
          <Image h="5vh" src="/logo.png" alt="" />
          <Text
            p="5px 10px"
            fontWeight="600"
            color="white"
            bg={secondary}
            h="min"
            borderRadius="10px"
          >
            Porque ter um site?
          </Text>
        </Flex>
        <Box>
          <Text
            fontFamily="body"
            my="1%"
            textAlign="center"
            fontSize="60px"
            color={primary}
            fontWeight="700"
          >
            Orçamento JVM
          </Text>
          <Text
            fontFamily="body"
            my="3%"
            textAlign="center"
            fontSize="20px"
            color="#aaa"
            fontWeight="600"
          >
            Escolha qual tipo de site você deseja
          </Text>
          <Link passHref href="#make-your-website">
            <Flex
              w="90%"
              mx="auto"
              justifyContent="space-between"
              mt="8%%"
              mb="5%"
            >
              <Box w="30%" mt="2%">
                <Text
                  _hover={{
                    borderColor: secondary,
                    transition: "border-color 0.1s ease-out 0.1s",
                  }}
                  transition="color 2s"
                  borderLeft="3px solid transparent"
                  borderBottom="3px solid transparent"
                  w="fit-content"
                  fontSize="20px"
                  fontWeight="600"
                  color={primary}
                  p="4px"
                  textAlign="center"
                  mx="auto"
                  cursor="pointer"
                >
                  Site Institucional
                </Text>
                <Image src="/pc1.png" alt="" />
              </Box>
              <Box w="30%">
                <Text
                  _hover={{
                    borderColor: secondary,
                    transition: "border-color 0.1s ease-out 0.1s",
                  }}
                  transition="color 2s"
                  borderBottom="3px solid transparent"
                  w="fit-content"
                  fontSize="22px"
                  fontWeight="600"
                  color={primary}
                  p="4px"
                  textAlign="center"
                  mx="auto"
                  cursor="pointer"
                >
                  One page
                </Text>
                <Image src="/prototipe.png" alt="" />
              </Box>
              <Box w="30%" mt="5%">
                <Text
                  _hover={{
                    borderColor: secondary,
                    transition: "border-color 0.1s ease-out 0.1s",
                  }}
                  transition="color 2s"
                  borderRight="3px solid transparent"
                  borderBottom="3px solid transparent"
                  w="fit-content"
                  fontSize="20px"
                  fontWeight="600"
                  color={primary}
                  p="4px"
                  textAlign="center"
                  mx="auto"
                  cursor="pointer"
                >
                  E-commerce
                </Text>
                <Image src="/pc2.png" alt="" />
              </Box>
            </Flex>
          </Link>
        </Box>
      </Box>
      <Explain primary={primary} />
      <Box w="1440px" mx="auto" id="make-your-website">
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
          Escolha a opção que mais te chama atenção
        </Text>
        <Flex justifyContent="space-around" my="4%" position="relative">
          <Box
            bg={primary}
            position="absolute"
            transform="rotate(45deg)"
            w="300px"
            h="700px"
            left="-20%"
            bottom="-300%"
            zIndex="-1"
          />
          <Button
            onClick={() => {
              setChose(1);
              handleAddValue(1, 400);
            }}
            bg={chose == 1 ? primary : secondary}
            borderRadius="20px"
            w="20%"
            color="white"
            transition=".5s"
            _hover={{
              width: "23%",
              transition: ".5s",
              boxShadow: "2px 5px 9px #888888",
            }}
          >
            Site institucional
          </Button>
          <Button
            onClick={() => {
              setChose(2);
              handleAddValue(0, 200);
            }}
            bg={chose == 2 ? primary : secondary}
            borderRadius="20px"
            w="20%"
            color="white"
            transition=".5s"
            _hover={{
              width: "23%",
              transition: ".5s",
              boxShadow: "2px 5px 9px #888888",
            }}
          >
            One-Page
          </Button>
          <Button
            onClick={() => {
              setChose(3);
              handleAddValue(0, 100);
            }}
            bg={chose == 3 ? primary : secondary}
            borderRadius="20px"
            w="20%"
            color="white"
            transition=".5s"
            _hover={{
              width: "23%",
              transition: ".5s",
              boxShadow: "2px 5px 9px #888888",
            }}
          >
            E-commerce
          </Button>
        </Flex>
        <Box w="100%" h="10px" bg={secondary} borderRadius="3px"></Box>
        <Box
          mt="-10px"
          w={progress + "%"}
          h="10px"
          bg={primary}
          borderRadius="3px"
        />
        <Box minH="30vh">
          <StepeZero
            chose={chose}
            progress={progress}
            step={10}
            color={primary}
          />
          <StepOne
            step={20}
            progress={progress}
            changeColor={(color, second) => {
              setPrimary(color);
              setSecondary(second);
            }}
          />
          <StepTwo progress={progress} colorPrimary={primary} step={30} />
          <StepeExample
            progress={progress}
            step={0}
            value={(step, value) => {
              handleAddValue(step, value);
            }}
          />
        </Box>
        <Flex h="auto" mb="3%">
          <Button
            mx="auto"
            onClick={() => {
              setProgress(progress - 10);
            }}
            isDisabled={progress == 0 ? true : false}
          >
            Anterior
          </Button>
          <Button
            mx="auto"
            onClick={() => {
              setProgress(progress + 10);
            }}
            isDisabled={progress == 100 ? true : false}
          >
            Próximo
          </Button>
        </Flex>
        <Flex justifyContent="space-between" w="40%" mx="auto">
          <Box px="3%" w="45%">
            <Text textAlign="center" fontSize="20px" color={primary}>
              Valor estimado:
            </Text>
            <Text textAlign="center" fontSize="20px" color={secondary}>
              R$ {valor},00 reais
            </Text>
          </Box>
          <Box w="45%" px="3%">
            <Text textAlign="center" fontSize="20px" color={primary}>
              Tempo estimado:
            </Text>
            <Text textAlign="center" fontSize="20px" color={secondary}>
              {time} dias
            </Text>
          </Box>
        </Flex>
      </Box>
      <Benefits primary={primary} secondary={secondary} chose={chose} />
      <Box w="1440px" mx="auto">
        <Flex justifyContent="space-between">
          <Box mx="auto">
            <Text>
              Ajude nos a melhorar sua experiência! Deixe um comentário.
            </Text>
          </Box>
        </Flex>
        <Box w="20%" mx="auto" my="3%">
          <Button w="full" bg={primary} color="white">
            Enviar
          </Button>
        </Box>
      </Box>
      <Box bg="#aaaa" w="100%" h="100px">
        <Text textAlign="center" pt="2%">
          Copyright © 2022 JVM. All rights reserved.
        </Text>
      </Box>
    </>
  );
};

export default Home;
