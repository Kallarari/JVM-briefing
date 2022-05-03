import { Box, Button, Flex, Input, InputGroup, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Adm() {
  const [info, setInfo] = useState<any>([]);
  const [id, setID] = useState("");
  useEffect(() => {
    axios.get("/api/read").then((resp) => {
      setInfo(resp.data.result);
    });
  }, []);
  async function handleDelete() {
    await axios.delete("/api/delete", { data: { id: id } });
    axios.get("/api/read").then((resp) => {
      setInfo(resp.data.result);
    });
  }
  return (
    <Box w="100vw" h="100vh" bg="#0079ae" p="2%" mt="-6vh">
      <Box my="3%" mx="auto" w="50%" bg="#ddddddaa" p="1%" borderRadius="8px">
        <Text textAlign="center" color="White" fontSize="20px" fontWeight="600">
          Últimos projetos submetidos
        </Text>
        <Box>
          {info.map((item: any, key: number) => (
            <>
              {/* 
              <Text key="">{JSON.stringify(item)}</Text> */}
              <Box borderBottom="2px solid white" pb="10px">
              <Text fontSize="16px" fontWeight="500" color="white" textAlign="center">
                CLIENTE {key + 1}
              </Text>
              <Flex justifyContent="space-between">
                <Box borderInline="1px solid white" px="10px">
                  <Text fontSize="16px" fontWeight="400" color="white">
                    Nome:
                  </Text>
                  <Text>{item.informs?.name}</Text>
                </Box>
                <Box borderInline="1px solid white" px="10px">
                  <Text fontSize="16px" fontWeight="400" color="white">
                    E-mail:
                  </Text>
                  <Text>{item.informs?.email}</Text>
                </Box>
                <Box borderInline="1px solid white" px="10px">
                  <Text fontSize="16px" fontWeight="400" color="white">
                    Número:
                  </Text>
                  <Text>{item.informs?.numer}</Text>
                </Box>
                <Button
                  bg="#ff7676"
                  color="white"
                  onClick={() => {
                    handleDelete();
                    setID(item._id);
                  }}
                >
                  Delete
                </Button>
              </Flex>
              </Box>
            </>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
