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

const Home: NextPage = () => {
  const [primary, setPrimary] = useState("#0079AE");
  const [secondary, setSecondary] = useState("#E68C26");
  const [backgroud, setBackgroud] = useState("#e9e9e9");
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
                Plataforma
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
        </Box>
      </Box>
      <Box bg={backgroud} py="5%">
        <Flex w="1440px" mx="auto" justifyContent="space-between">
          <Box
            w="30%"
            bg="white"
            border="2px solid"
            borderColor={primary}
            padding="2%"
            borderRadius="8px"
            boxShadow="5px 10px 18px #888888"
          >
            <Text
              fontSize="30px"
              color={primary}
              textAlign="center"
              fontWeight="600"
            >
              Site institucional
            </Text>
            <Flex>
              <Icon icon="uis:graph-bar" color={primary} width={25} />
              <Text ml="15px" color={primary} fontWeight="600" fontSize="20px">
                Visibilidade gratuita
              </Text>
            </Flex>
            <Flex>
              <Icon
                icon="clarity:dollar-bill-line"
                color={primary}
                width={25}
              />
              <Text ml="15px" color={primary} fontWeight="600" fontSize="20px">
                Baixo investimento
              </Text>
            </Flex>
            <Text>
              Nesta categoria estão sites de várias páginas que carregam
              informações sobre você ou sua empresa, cada página com seu
              conteúdo, uma home, uma página de contato e assim por diante...
              podendo ser usado como um meio do público conhecer seus pontos
              fortes e diferenciais.
              <br /> Mas não vem com sistemas de login de usuários, plataformas
              de agendamento de horário ou qualquer tipo de comércio nele.
              <br />
            </Text>
          </Box>
          <Box
            w="30%"
            bg="white"
            border="2px solid"
            borderColor={primary}
            padding="2%"
            borderRadius="8px"
            boxShadow="5px 10px 18px #888888"
          >
            <Text
              fontSize="30px"
              color={primary}
              textAlign="center"
              fontWeight="600"
            >
              On-Page
            </Text>
            <Flex>
              <Icon icon="cil:graph" color={primary} width={25} />
              <Text ml="15px" color={primary} fontWeight="600" fontSize="20px">
                Melhor custo benefício
              </Text>
            </Flex>
            <Flex>
              <Icon icon="ph:graph" color={primary} width={25} />
              <Text ml="15px" color={primary} fontWeight="600" fontSize="20px">
                Fácil entendimento
              </Text>
            </Flex>
            <Text>
              Sites On-Page são sites que resumem todas as suas informações em
              apenas uma página, e com uma dinâmica mais pratica, voltado para
              pessoas que vão entrar ler seu conteúdo ver as informações e logo
              sair.
              <br />
              Desenvolvemos uma plataforma atrativa e que vá dirigindo o usuário
              para navegar e interagir no site.
              <br />
              Este é o tipo de projeto que fica pronto mais rápido e também o
              mais barato entre os três.
            </Text>
          </Box>
          <Box
            w="30%"
            bg="white"
            border="2px solid"
            borderColor={primary}
            padding="2%"
            borderRadius="8px"
            boxShadow="5px 10px 18px #888888"
          >
            <Text
              fontSize="30px"
              color={primary}
              textAlign="center"
              fontWeight="600"
            >
              E-commerce
            </Text>
            <Flex>
              <Icon icon="ic:baseline-shop-2" color={primary} width={25} />
              <Text ml="15px" color={primary} fontWeight="600" fontSize="20px">
                Pronto para vender
              </Text>
            </Flex>
            <Flex>
              <Icon icon="iconoir:delivery-truck" color={primary} width={30} />
              <Text ml="15px" color={primary} fontWeight="600" fontSize="20px">
                Atenda o Brasil inteiro
              </Text>
            </Flex>
            <Text>
              São lojas virtuais desenvolvidas para comercializar serviços ou
              produtos, um site que faz o intermediário entre cliente e
              vendedor, podendo eles estarem em qualquer lugar do Brasil.
              <br />
              Há também sistema de captação de leads, de mensuração de
              resultados e abre oportunidade para fazer marketing e venda de
              serviços ou produtos em plataformas como Google ads e redes
              sociais.
              <br />
            </Text>
          </Box>
        </Flex>
        <Text
          fontSize="20px"
          textAlign="center"
          mt="4%"
          color={primary}
          cursor="pointer"
        >
          Veja exemplos de sites em nosso portfólio <u>clicando aqui.</u>
        </Text>
      </Box>
      <Box w="1440px" mx="auto">
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
            On-Page
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
          <StepeZero progress={progress} step={0} color={primary} />
          <StepOne
            progress={progress}
            changeColor={(color, second) => {
              setPrimary(color);
              setSecondary(second);
            }}
          />
          <StepTwo progress={progress} colorPrimary={primary} />
          <StepeExample
            progress={progress}
            step={3}
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
            isDisabled={
              progress == 100 || progress / 10 > steps.length ? true : false
            }
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
      <Flex
        justifyContent="space-around"
        w="1440px"
        mx="auto"
        display={chose == 1 ? "Flex" : "none"}
        h="fit"
        my="5%"
      >
        <Box w="30%" borderRight="1px solid" borderColor={secondary}>
          <Text textAlign="center" fontSize="30px" color={primary} fontWeight="600">
            Vantagens
          </Text>
          <Text textAlign="center" fontSize="20px" >
            Desenvolvimento próprio
          </Text>
          <Text textAlign="center" fontSize="20px"  mt="3%">
            Sistema de agendamento online
          </Text>
        </Box>
        <Box w="30%"  borderRight="1px solid #aaaaa">
          <Text textAlign="center" fontSize="30px" color={primary} fontWeight="600">
            Público
          </Text>
          <Text textAlign="center" fontSize="20px" >
            Invista em anúncios que aparecerão apenas para pessoas interessadas e para um público mais centralizado
          </Text>
          <Text textAlign="center" fontSize="20px" mt="3%">
            Tráfego orgânico gratuíto
          </Text>
        </Box>
        <Box w="30%"  borderLeft="1px solid" borderColor={secondary}>
          <Text textAlign="center" fontSize="30px" color={primary} fontWeight="600">
            Resultados
          </Text>
          <Text textAlign="center" fontSize="20px" >
            60% de desenvolvimento de marca nos primeiros dois meses
          </Text>
          <Text textAlign="center" fontSize="20px"  mt="3%">
            Agendamento online para clínicas.
          </Text>
        </Box>
      </Flex>
      <Flex
        justifyContent="space-around"
        w="1440px"
        mx="auto"
        display={chose == 2 ? "Flex" : "none"}
        my="5%"
      >
        <Box w="30%">
          <Image src="/siteModel1.png" alt="" />
        </Box>
        <Box w="30%">
          <Image src="/siteModel2.png" alt="" />
        </Box>
        <Box w="30%">
          <Image src="/siteModel3.png" alt="" />
        </Box>
      </Flex>
      <Flex
        justifyContent="space-around"
        w="1440px"
        mx="auto"
        display={chose == 3 ? "Flex" : "none"}
        my="5%"
      >
        <Box w="30%">
          <Image src="/prototipe.png" alt="" />
        </Box>
        <Box w="30%">
          <Image src="/prototipe.png" alt="" />
        </Box>
        <Box w="30%">
          <Image src="/prototipe.png" alt="" />
        </Box>
      </Flex>
      <Flex justifyContent="space-between" w="1440px" mx="auto">
        <Box borderLeft="1px solid #cccc" pl="5%" alignSelf="center">
          <Text>Ajude nos a melhorar deuxe seu comentário</Text>
        </Box>
      </Flex>
      <Button mx="auto">Enviar</Button>
      <Box bg="#aaaa" w="100%" h="100px">
        <Text textAlign="center" pt="2%">
          Copyright © 2022 JVM. All rights reserved.
        </Text>
      </Box>
    </>
  );
};

export default Home;
