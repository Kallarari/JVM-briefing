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
};
export default function Explain({primary}:explainProps) {
  
  const [backgroud, setBackgroud] = useState("#e9e9e9");
  return (
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
              One-Page
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
              Sites One-Page são sites que resumem todas as suas informações em
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
  );
}
