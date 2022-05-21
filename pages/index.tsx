import {
  Box,
  Button,
  Flex,
  Text,
  Image,
  ScaleFade,
  keyframes,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { Icon } from "@iconify/react";
import React, { FormEvent, useEffect, useState } from "react";
import StepOne from "../public/componnets/steps/stepOne";
import StepTwo from "../public/componnets/steps/sterTwo";
import StepeExample from "../public/componnets/steps/stepExample";
import StepeZero from "../public/componnets/steps/stepZero";
import Link from "next/link";
import Explain from "../public/componnets/explain";
import Benefits from "../public/componnets/benefits";
import StepeIntroduction from "../public/componnets/steps/stepIntroduction";
import StepeThree from "../public/componnets/steps/stepThree";
import axios from "axios";
import StepeFour from "../public/componnets/steps/stepFour";
import { ThemeContext } from "@emotion/react";
import LastStep from "../public/componnets/steps/lastStep";
import Steps from "../public/componnets/steps";
import * as yup from "yup";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  const schema = yup.object().shape({
    nome: yup.string().required("É necessário preencher nome"),
    email: yup
      .string()
      .email("Email não é valido")
      .required("É necessário preencher e-mail"),
    number: yup
      .number()
      .required("É necessário preencher número")
      .positive("Esse número não é valido")
      .integer("Esse número não é valido")
      .min(8),
  });

  var infor: any;
  const [primary, setPrimary] = useState("#0079AE");
  const [error, setError] = useState(String);
  const [secondary, setSecondary] = useState("#E68C26");
  const [chose, setChose] = React.useState(1);
  const [time, setTime] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  const [witchDesign, setWitchDesign] = React.useState(String);
  const [time2, setTime2] = useState(0);
  const [valor, setValor] = React.useState(0);
  const [valor2, setValor2] = React.useState(0);
  const [ownDesign, setOwnDesign] = React.useState(false);
  const [pageInforms, setPageInforms] = React.useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [pageFunctions, setPageFunctions] = React.useState([false, false]);
  //envio de informações para banco de dados
  const [info, setInfo] = React.useState({
    name: "",
    email: "",
    numer: 0,
    day: 0,
    hour: 0,
    month: 0,
  });
  function handleSendInformation() {
    axios.post("/api/subscribe", { informs: infor });
  }
  function send() {
    console.log(info.name, info.email, info.numer);
    if (info.name == "") {
      setError("Preencha seu nome.");
      return 0;
    }

    if (info.email == "") {
      setError("Preencha seu E-mail.");
      return 0;
    }
    if (info.numer == 0) {
      setError("Preencha seu número.");
      return 0;
    }

    setError("");
    handleSendInformation();
    setProgress(progress + 10);
    /* 
    schema.cast({nome:info.name, email:info.email, number:info.numer}){
      return 0;
    }
   console.log(error); */
  }

  const steps = [
    {
      name: "Introcução",
      icon: "fluent:arrow-enter-20-regular",
    },
    {
      name: "Modelo",
      icon: "fluent:design-ideas-16-regular",
    },
    {
      name: "Cor",
      icon: "fluent:paint-brush-16-regular",
    },
    {
      name: "Páginas",
      icon: "entypo:documents",
    },
    {
      name: "Funcionalidades",
      icon: "ph:user-circle-gear",
    },
    {
      name: "Agendamento",
      icon: "bi:table",
    },
    {
      name: "Finalizado",
      icon: "ant-design:check-circle-outlined",
    },
  ];
  useEffect(() => {
    infor = {
      name: info.name,
      email: info.email,
      numer: info.numer,
      day: info.day,
      hour: info.hour,
      month: info.month,
      witchDesign: witchDesign,
      ownDesign: ownDesign,
      colorPrimary: primary,
      colorSecondary: secondary,
      pageInformas: pageInforms,
      pageFunctions: pageFunctions,
    };
  }, [
    info,
    witchDesign,
    ownDesign,
    primary,
    secondary,
    pageInforms,
    pageFunctions,
  ]);
  return (
    <>
      <Box display={{ base: "none", lg: "block", xl: "block" }}>
        <Box
          mx="auto"
          position="absolute"
          top={progress > 9 ? "-4%" : "0%"}
          transition="2s"
          w="100%"
        >
          <Flex
            py="25px"
            justifyContent="space-between"
            borderY="1px solid #cccc"
            bg={primary}
            px="15%"
          >
            <Flex px="3%" alignSelf="center">
              <Icon icon="bi:map" color="white" width={25} />
              <Text ml="10px" color="white" fontWeight="500">
                Florianópolis/SC{" "}
              </Text>
            </Flex>
            <Flex borderLeft="1px solid #cccc" px="3%" alignSelf="center">
              <Icon icon="entypo:mail" color="white" width={25} />
              <Text ml="10px" color="white" fontWeight="500">
                jvm@outlook.com{" "}
              </Text>
            </Flex>
            <Flex borderLeft="1px solid #cccc" px="3%" alignSelf="center">
              <Icon icon="carbon:phone-filled" color="white" width={25} />
              <Text ml="10px" color="white" fontWeight="500" w="max-content">
                +48 9 99383088{" "}
              </Text>
            </Flex>
            <Flex w="45%" justifyContent="center">
              <Button bg="white" color={primary} borderRadius="20px" w="50%">
                Contato
              </Button>
            </Flex>
          </Flex>
          <Box w={{ base: "none", lg: "1280px", xl: "1440px" }} mx="auto">
            <Flex
              h="10vh"
              w="60%"
              justifyContent="space-between"
              mx="auto"
              mt="20px"
            >
              <Link href="https://jvm-webmarketing.vercel.app/" passHref>
                <Text
                  p="5px 10px"
                  fontWeight="600"
                  color="white"
                  bg={secondary}
                  h="min"
                  borderRadius="10px"
                  cursor="pointer"
                >
                  Conheça a JVM
                </Text>
              </Link>
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
          </Box>
        </Box>
        <Box
          w={{ base: "none", lg: "1200px", xl: "1440px" }}
          pt={{ base: "none", lg: "40px", xl: "none" }}
          mx="auto"
        >
          <Flex
            justifyContent="space-around"
            position="relative"
            pt={progress > 9 ? "6%" : "11%"}
            transition="2s"
          >
            <Box
              bg={primary}
              position="absolute"
              transform="rotate(45deg)"
              w="300px"
              h="700px"
              left="-17%"
              bottom="-80%"
              zIndex="-1"
            />
          </Flex>
          {/* 
      <Box w="100%" h="10px" bg={secondary} borderRadius="3px"></Box>
      <Box
        mt="-10px"
        w={progress + "%"}
        h="10px"
        bg={primary}
        borderRadius="3px"
      /> */}
          <Steps
            primary={primary}
            secondary={secondary}
            steps={steps}
            position={progress / 10}
            onCurrent={(c) => {
              setProgress(c * 10);
            }}
          />
          <Box minH={progress == 0 ? "40vh" : "55vh"}>
            <StepeZero
              progress={progress}
              color2={secondary}
              step={10}
              color={primary}
              time={(temp) => setTime2(temp)}
              price={(valor) => setValor2(valor)}
              ownDesign={(own) => setOwnDesign(own)}
              witchDesign={(w) => setWitchDesign(w)}
            />
            <StepOne
              step={20}
              progress={progress}
              changeColor={(color, second) => {
                setPrimary(color);
                setSecondary(second);
              }}
            />
            <StepTwo
              progress={progress}
              colorPrimary={primary}
              step={30}
              PageInfor={(informs) => setPageInforms(informs)}
            />
            <StepeIntroduction
              progress={progress}
              step={0}
              primary={primary}
              secondary={secondary}
            />
            <StepeThree
              progress={progress}
              step={40}
              colorPrimary={primary}
              FunctionsInfor={(s, p) => setPageFunctions([s, p])}
            />
            <StepeFour
              progress={progress}
              step={50}
              primary={primary}
              secondary={secondary}
              infor={(n, e, num, d, h, m) => {
                setInfo({
                  name: n,
                  email: e,
                  numer: num,
                  day: d,
                  hour: h,
                  month: m,
                }); /* 
              console.log(n, e, num, d, h, m);
              console.log("agora o info");
              console.log(info.day, info.hour, info.month); */
              }}
            />
            <LastStep
              step={60}
              progress={progress}
              primary={primary}
              secondary={secondary}
            />
            <Box w="min" mx="auto">
              <Text
                display={progress == 50 ? "static" : "none"}
                color="red"
                textAlign="center"
                w="147px"
              >
                {error}
              </Text>
              <Button
                display={progress == 50 ? "static" : "none"}
                bg={primary}
                borderRadius="8px"
                color="white"
                p="10px"
                onClick={send}
              >
                Finaliza e enviar!
              </Button>
            </Box>
          </Box>
          <Flex h="auto" mb="3%">
            <Button
              mx="auto"
              onClick={() => {
                setProgress(progress - 10);
              }}
              isDisabled={progress == 0 ? true : false}
              bg={primary}
              color="white"
              px="60px"
            >
              Anterior
            </Button>

            <Box px="3%" w="45%">
              <Text textAlign="center" fontSize="20px" color={primary}>
                Valor estimado:
              </Text>
              <Flex
                display={ownDesign ? "none" : "flex"}
                mx="auto"
                w="max-content"
              >
                <Text
                  mr="5px"
                  alignSelf="end"
                  textAlign="center"
                  fontSize="14px"
                  color={secondary}
                  w="max-content"
                >
                  Em 10x de
                </Text>
                <Text
                  textAlign="center"
                  fontSize="20px"
                  color={secondary}
                  w="max-content"
                >
                  {" R$ " + (((valor + valor2) / 10) * 11) / 10 + ",00 reais"}
                </Text>
              </Flex>
              <Text
                textAlign="center"
                fontSize="14px"
                color={secondary}
                w="max-content"
                mx="auto"
                display={ownDesign ? "none" : "flex"}
              >
                {" Ou a vista por " + (" R$ " + (valor + valor2) + ",00 reais")}
              </Text>
              <Text
                textAlign="center"
                fontSize="20px"
                color={secondary}
                w="max-content"
                mx="auto"
                display={ownDesign ? "flex" : "none"}
              >
                Fazer reunião
              </Text>
            </Box>
            <Box w="45%" px="3%">
              <Text textAlign="center" fontSize="20px" color={primary}>
                Tempo estimado:
              </Text>
              <Text textAlign="center" fontSize="20px" color={secondary}>
                {ownDesign
                  ? "Fazer Reunião"
                  : (time + time2 > 20 ? (time + time2) / 20 : time + time2) +
                    " " +
                    (time + time2 > 20 ? "meses" : "dias")}
              </Text>
            </Box>
            <Button
              mx="auto"
              onClick={() => {
                setProgress(progress + 10);
                if (progress === 50) {
                  () => handleSendInformation();
                }
              }}
              isDisabled={progress == 60 ? true : false}
              bg={primary}
              color="white"
              px="60px"
            >
              Próximo
            </Button>
          </Flex>
        </Box>
        <Benefits primary={primary} secondary={secondary} chose={chose} />
        <Explain primary={primary} />
        {/* <Box>
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
      </Box> */}
        <Box bg="#aaaa" w="100%" h="100px">
          <Text textAlign="center" pt="2%">
            Copyright © 2022 JVM. All rights reserved.
          </Text>
        </Box>
      </Box>
      <Box
        display={{ base: "block", md: "none", lg: "none", xl: "none" }}
        h="100vh"
      >
        <Flex
          bg={primary}
          h="10vh"
          w="100vw"
          justifyContent="center"
          alignContent="center"
        >
          <Image
            src="/logosite-branco.png"
            w="15vw"
            alt=""
            alignSelf="center"
          />
        </Flex>
        <Flex>
          <Button
            w="10vw"
            h="70vh"
            onClick={() => {
              setProgress(progress - 10);
            }}
            isDisabled={progress == 0 ? true : false}
            bg="white"
            p="0"
          >
            {" "}
            <Icon
              icon="akar-icons:chevron-left"
              color={primary}
              style={{ width: "500px", height: "auto" }}
            />
          </Button>
          <StepeIntroduction
            primary={primary}
            secondary={secondary}
            step={0}
            progress={progress}
          />
          <StepeZero
            progress={progress}
            color2={secondary}
            step={10}
            color={primary}
            time={(temp) => setTime2(temp)}
            price={(valor) => setValor2(valor)}
            ownDesign={(own) => setOwnDesign(own)}
            witchDesign={(w) => setWitchDesign(w)}
          />
          <Button
            w="10vw"
            mx="auto"
            h="70vh"
            bg="white"
            onClick={() => {
              setProgress(progress + 10);
            }}
            isDisabled={progress == 60 ? true : false}
            color="white"
            p="0"
          >
            <Icon
              icon="akar-icons:chevron-right"
              color={primary}
              style={{ width: "500px", height: "auto" }}
            />
          </Button>
        </Flex>
        <Flex h="20vh" w="100vw" border="2px orange solid" justifyContent="space-evenly">
          <Box mt="4vh">
            <Flex display="block">
              <Text
                mr="5px"
                alignSelf="end"
                textAlign="center"
                fontSize="14px"
                color={secondary}
                w="max-content"
              >
                Em 10x de
              </Text>
              <Text
                textAlign="center"
                fontSize="20px"
                color={secondary}
                w="max-content"
              >
                {" R$ " + (((valor + valor2) / 10) * 11) / 10 + ",00 reais"}
              </Text>
            </Flex>
            <Text
              textAlign="center"
              fontSize="10px"
              color={secondary}
              w="max-content"
              mx="auto"
              display={ownDesign ? "none" : "flex"}
            >
              {" Ou a vista por " + (" R$ " + (valor + valor2) + ",00 reais")}
            </Text>
            <Text
              textAlign="center"
              fontSize="18px"
              color={secondary}
              w="max-content"
              mx="auto"
              display={ownDesign ? "flex" : "none"}
            >
              Fazer reunião
            </Text>
          </Box>
          <Box mt="5vh">
            <Text textAlign="center" fontSize="20px" color={primary}>
              Tempo estimado
            </Text>
            <Text textAlign="center" fontSize="20px" color={secondary}>
              {ownDesign
                ? "Fazer Reunião"
                : (time + time2 > 20 ? (time + time2) / 20 : time + time2) +
                  " " +
                  (time + time2 > 20 ? "meses" : "dias")}
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
export default Home;
