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
import React, { useEffect, useState } from "react";

export default function Adm() {
  const [id, setID] = useState("");
  const [image, setImage] = useState("");
  const [infos, setInfos] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [show, setShow] = useState(Number);
  const [info, setInfo] = useState<any>([]);
  useEffect(() => {
    axios.get("/api/read").then((resp) => {
      setInfo(resp.data.result);
    });
  }, []);
  useEffect(() => {
    setInfos(info.informs?.pageInformas);
  }, [info]);
  async function handleDelete() {
    await axios.delete("/api/delete", { data: { id: id } });
    axios.get("/api/read").then((resp) => {
      setInfo(resp.data.result);
    });
  }

  return (
    <Box w="100vw" h="100vh" bg="black" p="2%" mt="-6vh">
      <Box my="3%" mx="auto" w="50%" bg="#4643ff" borderRadius="8px">
        <Text textAlign="center" color="White" fontSize="20px" fontWeight="600">
          Últimos projetos submetidos
        </Text>
        <Box>
          <Flex>
            <Box w="41%" borderRight="1px solid white">
              <Text
                fontSize="16px"
                fontWeight="400"
                color="white"
                textAlign="center"
              >
                {" "}
                Nome{" "}
              </Text>
            </Box>
            <Box w="41%">
              <Text
                fontSize="16px"
                fontWeight="400"
                color="white"
                textAlign="center"
              >
                {" "}
                Data Reunião{" "}
              </Text>
            </Box>
            <Box w="18%"></Box>
          </Flex>
          {info.map((item: any, key: number) => (
            <>
              {/* <Text key="">{JSON.stringify(item)}</Text> */}
              <Box
                _odd={{ backgroundColor: "#ffffff3d" }}
                pb="10px"
                cursor="pointer"
                onClick={() => setShow(key)}
                px="1%"
              >
                <Flex justifyContent="space-between" w="100%" mt="10px">
                  <Box borderRight="1px solid white" px="10px" w="41%">
                    <Text color="white" mt="3%" textAlign="center">
                      {item.informs?.name}
                    </Text>
                  </Box>
                  <Box px="10px" w="41%">
                    <Text
                      fontSize="16px"
                      fontWeight="400"
                      color="white"
                      mt="3%"
                      textAlign="center"
                    >
                      {item.informs?.day}
                      {"/"}
                      {item.informs?.month}
                      {" as "}
                      {item.informs?.hour}
                      {":00 horas"}
                    </Text>
                  </Box>
                  <Button
                    alignSelf="center"
                    bg="#ff1d1d"
                    color="white"
                    w="18%"
                    onClick={() => {
                      handleDelete();
                      setID(item._id);
                    }}
                  >
                    Delete
                  </Button>
                </Flex>
                <Flex w="100%" display={show == key ? "flex" : "none"}>
                  <Box w="33%">
                    <Box _odd={{ backgroundColor: "#ffffff3d" }}>
                      <Text
                        fontSize="16px"
                        fontWeight="400"
                        color="white"
                        textAlign="center"
                      >
                        Nome
                      </Text>
                      <Text
                        fontSize="16px"
                        fontWeight="400"
                        color="white"
                        textAlign="center"
                      >
                        {item.informs?.name}
                      </Text>
                    </Box>
                    <Box _odd={{ backgroundColor: "#ffffff3d" }}>
                      <Text
                        fontSize="16px"
                        fontWeight="400"
                        color="white"
                        textAlign="center"
                      >
                        E-mail
                      </Text>
                      <Text
                        fontSize="16px"
                        fontWeight="400"
                        color="white"
                        textAlign="center"
                      >
                        {item.informs?.email}
                      </Text>
                    </Box>
                    <Box _odd={{ backgroundColor: "#ffffff3d" }}>
                      <Text
                        fontSize="16px"
                        fontWeight="400"
                        color="white"
                        textAlign="center"
                      >
                        Contato
                      </Text>
                      <Text
                        fontSize="16px"
                        fontWeight="400"
                        color="white"
                        textAlign="center"
                      >
                        {item.informs?.numer}
                      </Text>
                    </Box>
                  </Box>
                  <Box w="33%">
                    <Text
                      fontSize="16px"
                      fontWeight="400"
                      color="white"
                      textAlign="center"
                    >
                      Modelo escolhido
                    </Text>
                    {item.informs.ownDesign ? (
                      <Text color="white">Design Prórpio</Text>
                    ) : (
                      <>
                        {item.informs?.witchDesign == "1" ? (
                          <Image src="/siteModel1.png" alt="modelo 1" />
                        ) : (
                          ""
                        )}
                        {item.informs?.witchDesign == "2" ? (
                          <Image src="/siteModel2.png" alt="modelo 2" />
                        ) : (
                          ""
                        )}
                        {item.informs?.witchDesign == "3" ? (
                          <Image src="/siteModel3.png" alt="modelo 3" />
                        ) : (
                          ""
                        )}
                        {item.informs?.witchDesign == "4" ? (
                          <Image src="/siteModel4.png" alt="modelo 4" />
                        ) : (
                          ""
                        )}
                        {item.informs?.witchDesign == "5" ? (
                          <Image src="/siteModel5.png" alt="modelo 5" />
                        ) : (
                          ""
                        )}
                        {item.informs?.witchDesign == "6" ? (
                          <Image src="/siteModel6.png" alt="modelo 6" />
                        ) : (
                          ""
                        )}
                        {item.informs?.witchDesign == "7" ? (
                          <Image src="/siteModel7.png" alt="modelo 7" />
                        ) : (
                          ""
                        )}
                        {item.informs?.witchDesign == "8" ? (
                          <Image src="/siteModel8.png" alt="modelo 8" />
                        ) : (
                          ""
                        )}
                        {item.informs?.witchDesign == "9" ? (
                          <Image src="/siteModel9.png" alt="modelo 9" />
                        ) : (
                          ""
                        )}
                        {item.informs?.witchDesign == "10" ? (
                          <Image src="/siteModel10.png" alt="modelo 10" />
                        ) : (
                          ""
                        )}
                        {item.informs?.witchDesign == "11" ? (
                          <Image src="/siteModel11.png" alt="modelo 11" />
                        ) : (
                          ""
                        )}
                        {item.informs?.witchDesign == "12" ? (
                          <Image src="/siteModel12.png" alt="modelo 12" />
                        ) : (
                          ""
                        )}
                      </>
                    )}
                  </Box>
                  <Box w="33%">
                    <Text
                      fontSize="16px"
                      fontWeight="400"
                      color="white"
                      textAlign="center"
                    >
                      Cores
                    </Text>
                    <Flex justifyContent="space-between">
                      <Box bg={item.informs.colorSecondary} w="45%">
                        <Text color="white">
                          {" "}
                          Secundária{item.informs.colorSecondary}
                        </Text>
                      </Box>
                      <Box bg={item.informs.colorPrimary} w="45%">
                        <Text color="white">
                          {" "}
                          Primária{item.informs.colorPrimary}
                        </Text>
                      </Box>
                    </Flex>
                    <Text
                      fontSize="16px"
                      fontWeight="400"
                      color="white"
                      textAlign="center"
                    >
                      Características
                    </Text>
                    <Box>
                      {item.informs.pageInformas?.map((item: any, key: any) => (
                        <Text
                          color="white"
                          key={key}
                          display={item ? "block" : "none"}
                          textAlign="center"
                        >
                          {key == 0 ? "Contato" : ""}
                          {key == 1 ? "Quem Somos" : ""}
                          {key == 2 ? "Serviços" : ""}
                          {key == 3 ? "Perguntas frequentes" : ""}
                          {key == 4 ? "Termos e condições de uso" : ""}
                          {key == 5 ? "Blog" : ""}
                          {key == 6 ? "Outro" : ""}
                        </Text>
                      ))}
                    </Box>
                    <Box>
                      {item.informs.pageFunctions?.map(
                        (item: any, key: any) => (
                          <Text
                            color="white"
                            key={key}
                            display={item ? "block" : "none"}
                            textAlign="center"
                          >
                            {key == 0 ? "Terá sistema de agendamento" : ""}
                            {key == 1 ? "Terá sistema de pagamento" : ""}
                          </Text>
                        )
                      )}
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
