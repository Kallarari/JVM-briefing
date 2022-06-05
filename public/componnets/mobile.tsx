/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  useColorMode,
  Text,
  Image,
  Checkbox,
  Stack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import axios from "axios";
import { link } from "fs";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Colors from "./colors";
import Scheduling from "./scheduling";
import { useRouter } from "next/router";

type mobileProps = {
  changeColor: (color: string, secondaryColor: string) => void;
};
export default function Mobile({ changeColor }: mobileProps) {
  const router = useRouter();
  const [buton, setButon] = useState(true);
  const [buton2, setButon2] = useState(true);
  function handleSendInformation() {
    axios.post("/api/subscribe", { informs: infor });
  }
  function sendMeeting() {
    if (day === 0) {
      setError2("Selecione uma data.");
      return 0;
    }
    if (email == "") {
      setError2("Preencha seu E-mail.");
      return 0;
    }
    if (number == 0) {
      setError2("Preencha seu número.");
      return 0;
    }
    if (name == "") {
      setError2("Preencha seu nome.");
      return 0;
    }
    setError2("");
    onOpen();
  }
  function confirmMeeting() {
    infor = {
      name: name,
      email: email,
      numer: number,
      day: day,
      hour: hour,
      month: month,
      colorPrimary: color,
      colorSecondary: color2,
    };
    if (infor === undefined) {
      console.log("nome", name, "email", email, "dia", day);
      return 0;
    }
    setButon2(false);
    handleSendInformation();
    onOpenOK();
    onClose();
  }
  function send() {
    if (name == "") {
      setError("Preencha seu nome.");
      return 0;
    }
    if (email == "") {
      setError("Preencha seu E-mail.");
      return 0;
    }
    if (number == 0) {
      setError("Preencha seu número.");
      return 0;
    }
    setError("");
    handleSendInformation();
    setButon(false);
    /* 
    schema.cast({nome:info.name, email:info.email, number:info.numer}){
      return 0;
    }
   console.log(error); */
  }
  var infor: any;
  const [checkedItems, setCheckedItems] = React.useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [color, setColor] = useState("#0079AE");
  const [color2, setColor2] = useState("#E68C26");
  const colors = [
    {
      cor1: "#032543",
      cor2: "#aac0b8",
      text: "Seriedade 1",
    },
    {
      cor1: "#0848aa",
      cor2: "#686e65",
      text: "Seriedade 2",
    },
    {
      cor2: "#d2c09f",
      cor1: "#645a50",
      text: "Organização",
    },
    {
      cor1: "#f57d1b",
      cor2: "#aac0b8",
      text: "Extroversão",
    },
    {
      cor1: "#c6141c",
      cor2: "#121212",
      text: "Competência",
    },
    {
      cor1: "#6b0092",
      cor2: "#ee6604",
      text: "Jovialidade 1",
    },
    {
      cor1: "#7146d4",
      cor2: "#ff6dc0",
      text: "Clareza",
    },
    {
      cor1: "#ff8454",
      cor2: "#1aa58e",
      text: "Jovialidade 2",
    },
  ];

  const image = [
    ["/site1-1.png", "/site1-2.png", "/site1-3.png", "/site1-4.png"],
    ["/site2-1.png", "/site2-2.png", "/site2-3.png", "/site2-4.png"],
    ["/site3-1.png", "/site3-2.png", "/site3-3.png", "/site3-4.png"],
    ["/site4-1.png", "/site4-2.png", "/site4-3.png", "/site4-4.png"],
  ];
  const [selected, setSelected] = useState(0);
  const [value, setValue] = useState("");
  const [site, setSite] = useState(0);
  const [number, setNumber] = useState(Number);
  const [hour, setHour] = useState(Number);
  const [month, setMonth] = useState(Number);
  const [day, setDay] = useState(Number);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [error2, setError2] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenOk,
    onOpen: onOpenOK,
    onClose: onCloseOK,
  } = useDisclosure();
  useEffect(() => {
    infor = {
      name: name,
      email: email,
      numer: number,
      day: day,
      hour: hour,
      month: month,
      colorPrimary: color,
      colorSecondary: color2,
    };
  }, [day, hour, month, color, color2, name, number, email]);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="90vw">
          <ModalHeader>Confirmar reunião</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Confirmar reunião no dia {day} do mês {month} as {hour} horas?
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              bg={color}
              color="white"
              mr={3}
              onClick={() => {
                confirmMeeting();
                console.log(infor);
              }}
            >
              Sim
            </Button>
            <Button onClick={onClose} variant="ghost">
              Não
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={isOpenOk} onClose={onCloseOK}>
        <ModalOverlay />
        <ModalContent w="90vw" p="10vw">
          <Text
            color={color}
            fontSize="20px"
            fontWeight="600"
            textAlign="center"
            mb="3vh"
          >
            Sua reunião foi marcada e agendada!
          </Text>
          <Icon
            icon="emojione:white-heavy-check-mark"
            width={"25vw"}
            style={{ marginInline: "auto", marginBottom: "3vh" }}
          />
          <Button
            bg={color}
            color="white"
            mr={3}
            onClick={() => {
              onCloseOK();
              router.push("/finish");
            }}
          >
            Ok
          </Button>
        </ModalContent>
      </Modal>
      <Flex
        h="10vh"
        w="100vw"
        justifyContent="center"
        alignContent="center"
        bg={color}
        position="fixed"
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
      <Text
        textAlign="center"
        pt="15vh"
        fontSize="24px"
        fontWeight="600"
        w="80vw"
        mx="auto"
        color={color2}
      >
        Seja bem vindo a sua página de montagem.
      </Text>
      <Text
        textAlign="center"
        mt="2vh"
        fontSize="18px"
        fontWeight="500"
        w="80vw"
        mx="auto"
        opacity=".8"
        color={color}
      >
        Sinta-se a vontade para customizar tudo do seu jeito!
      </Text>
      <Image alt="prtótipo" src="prototipe.png" h="50vh" mx="auto" mt="8vh" />
      <Text
        textAlign="center"
        mt="5vh"
        fontSize="24px"
        fontWeight="600"
        w="80vw"
        mx="auto"
        color={color2}
      >
        Vamos começar com as cores, escolha a cor que você quiser e ela sera
        aplicada ao site.
      </Text>
      <Text
        textAlign="center"
        mt="2vh"
        fontSize="18px"
        fontWeight="500"
        w="80vw"
        mx="auto"
        opacity=".8"
        color={color}
      >
        {" "}
        "As cores evocam emoções e até mesmo mudanças de humor" CGL
      </Text>
      <Flex
        justifyContent="space-between"
        transition="1s"
        w="90vw"
        mx="auto"
        wrap="wrap"
      >
        {colors.map((item) => (
          <Box key="" mx="4vw" mt="5vh">
            <Colors
              color1={item.cor1}
              color2={item.cor2}
              changeColor={(color1, color2) => {
                setColor(color1);
                setColor2(color2);
                changeColor(color1, color2);
              }}
            />
            <Text
              textAlign="center"
              fontSize="13px"
              mt="1vh"
              color={color}
              mx="auto"
              fontWeight="500"
            >
              {item.text}
            </Text>
          </Box>
        ))}
      </Flex>
      <Box bg={color2} w="100vw" h="3vh" mt="3vh" />
      <Text
        textAlign="center"
        mt="5vh"
        fontSize="24px"
        fontWeight="700"
        w="80vw"
        mx="auto"
        color={color2}
      >
        Conte sua história!
      </Text>
      <Flex justifyContent="space-between" w="90vw" mx="auto" mt="5vh">
        <Stack
          direction="column"
          justifyContent="space-between"
          my="3%"
          fontSize="30px"
          fontWeight="600"
          color="black"
        >
          <Text
            textAlign="center"
            fontSize="18px"
            fontWeight="500"
            mx="auto"
            color={color2}
          >
            Assinale
          </Text>
          <Checkbox
            isChecked={checkedItems[0]}
            onChange={(e) =>
              setCheckedItems([
                e.target.checked,
                checkedItems[1],
                checkedItems[2],
                checkedItems[3],
                checkedItems[4],
                checkedItems[5],
                checkedItems[6],
              ])
            }
            color={color}
          >
            Contato
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) =>
              setCheckedItems([
                checkedItems[0],
                e.target.checked,
                checkedItems[2],
                checkedItems[3],
                checkedItems[4],
                checkedItems[5],
                checkedItems[6],
              ])
            }
            color={color}
          >
            Quem somos
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[2]}
            onChange={(e) =>
              setCheckedItems([
                checkedItems[0],
                checkedItems[1],
                e.target.checked,
                checkedItems[3],
                checkedItems[4],
                checkedItems[5],
                checkedItems[6],
              ])
            }
            color={color}
          >
            Serviços
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[3]}
            onChange={(e) =>
              setCheckedItems([
                checkedItems[0],
                checkedItems[1],
                checkedItems[2],
                e.target.checked,
                checkedItems[4],
                checkedItems[5],
                checkedItems[6],
              ])
            }
            color={color}
          >
            Perguntas frequentes
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[4]}
            onChange={(e) =>
              setCheckedItems([
                checkedItems[0],
                checkedItems[1],
                checkedItems[2],
                checkedItems[3],
                e.target.checked,
                checkedItems[5],
                checkedItems[6],
              ])
            }
            color={color}
          >
            Termos e condições de uso
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[5]}
            onChange={(e) =>
              setCheckedItems([
                checkedItems[0],
                checkedItems[1],
                checkedItems[2],
                checkedItems[3],
                checkedItems[4],
                e.target.checked,
                checkedItems[6],
              ])
            }
            color={color}
          >
            Blog
          </Checkbox>
        </Stack>
        <Text
          textAlign="center"
          mt="2vh"
          fontSize="18px"
          fontWeight="500"
          w="50vw"
          mx="3vw"
          opacity=".8"
          color={color}
        >
          Seus clientes não te conhecem? <br /> Com essas páginas mostre sua
          empresa e seus serviços, além de gerar tráfego orgânico.
        </Text>
      </Flex>
      <Text
        textAlign="center"
        mt="10vh"
        fontSize="24px"
        fontWeight="700"
        w="80vw"
        mx="auto"
        color={color2}
      >
        INOVAÇÃO
      </Text>
      <Text
        textAlign="center"
        fontSize="18px"
        fontWeight="700"
        w="80vw"
        mx="auto"
        color={color2}
      >
        E novas funcionalidades.
      </Text>
      <Image
        src="/prototipe.png"
        my="4vh"
        w="45vw"
        mx="auto"
        alt=""
        alignSelf="center"
      />
      <Box
        my="2vh"
        w="90vw"
        bg="#9e9e9e"
        h="90vw"
        mx="auto"
        borderRadius="8px"
        p="10vw"
        boxShadow="0 0 1em #464646aa"
      >
        <Text
          textAlign="center"
          fontSize="18px"
          fontWeight="700"
          mx="auto"
          color="white"
        >
          Atenda seus clientes pelo método de agendamento/pedido criado
          exclusivamente pela JVM, e receba uma mensagem em seu celular/email
          sempre que alguém marcar horário ou fazer um pedido em seu site.
        </Text>
      </Box>
      <Text
        textAlign="center"
        mt="10vh"
        fontSize="22px"
        fontWeight="700"
        w="80vw"
        mx="auto"
        color={color2}
      >
        "Como faço para te pagar?"
      </Text>
      <Text
        textAlign="end"
        fontSize="18px"
        fontWeight="700"
        w="80vw"
        mx="auto"
        color={color2}
      >
        -Seu cliente
      </Text>
      <Image
        src="/cellPayment.png"
        my="4vh"
        w="45vw"
        mx="auto"
        alt=""
        alignSelf="center"
      />
      <Text
        textAlign="center"
        fontSize="20px"
        fontWeight="500"
        w="90vw"
        mx="auto"
        color={color}
      >
        Você poderá receber do jeito que seu cliente deseja pagar, seja por
        boleto, pix, cartão e muito mais...
      </Text>
      <Text
        textAlign="center"
        mt="10vh"
        fontSize="22px"
        fontWeight="700"
        w="90vw"
        mx="auto"
        color={color2}
      >
        Veja alguns projetos que desenvolvemos...
      </Text>
      <Text
        color={color2}
        mt="7%"
        fontSize="18px"
        fontWeight="500"
        textAlign="center"
      >
        Selecione um desse modelos
      </Text>
      <Flex wrap="wrap" justifyContent="space-around">
        <Image
          onClick={() => {
            setValue("1");
            setSite(0);
          }}
          w="45vw"
          src="/siteModel1.png"
          alt=""
        />
        <Image
          onClick={() => {
            setValue("5");
            setSite(2);
          }}
          w="45vw"
          src="/siteModel5.png"
          alt=""
        />
        <Image
          onClick={() => {
            setValue("9");
            setSite(1);
          }}
          w="45vw"
          src="/siteModel9.png"
          alt=""
        />
        <Image
          onClick={() => {
            setValue("11");
            setSite(3);
          }}
          w="45vw"
          src="/siteModel11.png"
          alt=""
        />
      </Flex>
      <Box>
        {image[site].map((item, index) => (
          <Box
            key={index}
            display={selected == index ? "block" : "none"}
            mx="auto"
            h="23vh"
          >
            <Image mx="auto" w="70vw" src={item} alt="" />
          </Box>
        ))}
        <Flex my="3vh" w="25vw" justifyContent="space-between" mx="auto">
          <Box
            borderRadius="50%"
            bg={color}
            w="5vw"
            h="5vw"
            opacity={selected == 0 ? "1" : ".5"}
            onClick={() => {
              setSelected(0);
            }}
          />
          <Box
            borderRadius="50%"
            bg={color}
            w="5vw"
            h="5vw"
            opacity={selected == 1 ? "1" : ".5"}
            onClick={() => {
              setSelected(1);
            }}
          />
          <Box
            borderRadius="50%"
            bg={color}
            w="5vw"
            h="5vw"
            opacity={selected == 2 ? "1" : ".5"}
            onClick={() => {
              setSelected(2);
            }}
          />
          <Box
            borderRadius="50%"
            bg={color}
            w="5vw"
            h="5vw"
            opacity={selected == 3 ? "1" : ".5"}
            onClick={() => {
              setSelected(3);
            }}
          />
        </Flex>
      </Box>
      <Text
        textAlign="center"
        mt="10vh"
        fontSize="24px"
        fontWeight="700"
        w="90vw"
        mx="auto"
        color={color2}
      >
        Se inscreva para entrarmos em contato.
      </Text>
      <Text
        textAlign="center"
        fontSize="15px"
        fontWeight="500"
        w="90vw"
        mx="auto"
        opacity=".7"
        color={color}
      >
        Se você se inscrever agora mesmo ganhe um desconto imediato no seu
        projeto.
      </Text>
      <Box>
        <Text textAlign="center" fontSize="15px" color="red" fontWeight="500">
          {error}
        </Text>
        <InputGroup w="90%" mx="auto" display="block" mb="3vh%">
          <Text fontSize="20px" color={color} textAlign="center">
            Nome
          </Text>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Seu nome"
          />
        </InputGroup>
        <InputGroup w="90%" mx="auto" display="block" mb="3vh%">
          <Text fontSize="20px" color={color} textAlign="center">
            E-mail
          </Text>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="seu-email@.com"
          />
        </InputGroup>
        <InputGroup w="90%" mx="auto" display="block">
          <Text fontSize="20px" color={color} textAlign="center">
            Telefone
          </Text>
          <Input
            onChange={(e) => setNumber(e.target.valueAsNumber)}
            type="number"
            placeholder="00 9 9999-9999"
          />
        </InputGroup>
        <Box mx="auto" my="4vh" w="fit-content" justifyContent="center">
          <Button
            bg={color}
            opacity="1"
            isDisabled={buton ? false : true}
            color="white"
            onClick={send}
          >
            Enviar cadastro
          </Button>
        </Box>
      </Box>
      <Text
        textAlign="center"
        mt="10vh"
        fontSize="24px"
        fontWeight="700"
        w="90vw"
        mx="auto"
        color={color2}
        mb="3vh"
      >
        Você também pode agendar uma reunião nos horários que estão livres.
      </Text>
      <Scheduling
        color1={color}
        color2={color2}
        date={(d, h, m) => {
          setDay(d);
          setMonth(m);
          setHour(h);
        }}
      />
      <Box mx="auto" w="fit-content" justifyContent="center">
        <Text textAlign="center" fontSize="15px" color="red" fontWeight="500">
          {error2}
        </Text>
        <Button
          bg={color}
          opacity="1"
          isDisabled={buton2 ? false : true}
          color="white"
          onClick={sendMeeting}
        >
          Marcar reunião
        </Button>
      </Box>
      <Text
        textAlign="center"
        mt="10vh"
        fontSize="24px"
        fontWeight="700"
        w="90vw"
        mx="auto"
        color={color2}
        mb="3vh"
      >
        Conheça mais sobre a JVM e quem são os nossos clientes pelo link abaixo!
      </Text>
      <Flex mb="5vh" justifyContent="space-around">
        <Link
          passHref
          href={"https://jvm-webmarketing.vercel.app/port/index.html"}
        >
          <Button bg={color} opacity="1" color="white">
            Ver portfólio JVM
          </Button>
        </Link>
        <Link passHref href={"https://jvm-webmarketing.vercel.app/"}>
          <Button bg={color} opacity="1" color="white">
            Site oficial JVM
          </Button>
        </Link>
      </Flex>
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
