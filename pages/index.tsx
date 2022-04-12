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
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { Icon } from "@iconify/react";
import React from "react";

const primary = "#0079AE";
const secondary = "#E68C26";
const backgroud = "#e9e9e9";
const Home: NextPage = () => {
  const [chose, setChose] = React.useState(0);
  const [progress, setProgress] = React.useState(10);
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
      <Box w="1440px" mx="auto" h="500px">
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
        <Flex justifyContent="space-around" my="4%">
          <Button
            onClick={() => {
              setChose(1);
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
        ></Box>
        <Flex
          justifyContent="space-between"
          my="3%"
          display={progress == 10 ? "Flex" : "none"}
        >
          <InputGroup w="30%">
            <InputLeftAddon />
            <Input type="text" placeholder="Elon Musk" />
          </InputGroup>
          <InputGroup w="30%">
            <InputLeftAddon  />
            <Input type="text" placeholder="elonMusk@gmail.com" />
          </InputGroup>
          <InputGroup w="30%">
            <InputLeftAddon />
            <Input type="text" placeholder="+1 55 9 9999-9999" />
          </InputGroup>
        </Flex>
        <Box
          w="100%"
          justifyContent="space-between"
          my="3%"
          display={progress == 20 ? "Flex" : "none"}
        >
          <Text textAlign="center" fontSize="20px" color={primary}>
            Assinale a característica mais importante para você.{" "}
          </Text>
        </Box>
        <Flex>
          <Button
            mx="auto"
            onClick={() => {
              setProgress(progress - 10);
            }}
          >
            Anterior
          </Button>
          <Button
            mx="auto"
            onClick={() => {
              setProgress(progress + 10);
            }}
          >
            Próximo
          </Button>
        </Flex>
      </Box>
      <Flex
        justifyContent="space-around"
        w="1440px"
        mx="auto"
        display={chose == 1 ? "Flex": "none"}
      >
        <Box w="30%">
          <Image src="/pc1.png" alt="" />
        </Box>
        <Box w="30%">
          <Image src="/pc1.png" alt="" />
        </Box>
        <Box w="30%">
          <Image src="/pc1.png" alt="" />
        </Box>
      </Flex>
      <Flex
        justifyContent="space-around"
        w="1440px"
        mx="auto"
        display={chose == 2 ? "Flex" : "none"}
      >
        <Box w="30%">
          <Image src="/pc2.png" alt="" />
        </Box>
        <Box w="30%">
          <Image src="/pc2.png" alt="" />
        </Box>
        <Box w="30%">
          <Image src="/pc2.png" alt="" />
        </Box>
      </Flex>
      <Flex
        justifyContent="space-around"
        w="1440px"
        mx="auto"
        display={chose == 3 ? "Flex" : "none"}
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
      <Box bg="#aaaa" w="100%" h="100px">
        <Text textAlign="center" pt="2%">Copyright © 2022 JVM. All rights reserved.</Text>
      </Box>
    </>
  );
};

export default Home;
