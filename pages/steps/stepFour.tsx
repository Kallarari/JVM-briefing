import { Box, Button, Flex, Input, InputGroup, Text } from "@chakra-ui/react";
import React, { FormEvent, useState } from "react";
import axios from "axios";

type stepFourProps = {
  progress: number;
  step: number;
  primary: string;
  secondary: string;
};
export default function StepeFour({
  progress,
  step,
  primary,
  secondary,
}: stepFourProps) {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setID] = useState("");
  const [info, setInfo] = useState<any>([]);
  function handleReadDB() {
    axios.get("/api/read").then((resp) => {
      setInfo(resp.data.result);
    });
  }
  function handleDelete() {
    axios.delete("/api/delete",{data:{id:id}});
  }

  return (
    <Box my="3%" display={progress == step ? "block" : "none"}>
      <Box my="3%" display={progress == step ? "Flex" : "none"}>
        <Text>Exibindo as informações do banco</Text>
        <Button onClick={handleReadDB}> Banco de dados</Button>
        <Text>
          {info.map((item: any) => (
            <>
              {/* 
              <Text key="">{JSON.stringify(item)}</Text> */}
              <Text>
                INFORMS<br></br>
              </Text>
              <Text>{item._id}</Text>
              <Flex justifyContent="space-between">
                <Text>{item.informs?.name}</Text>
                <Text>{item.informs?.email}</Text>
                <Text>{item.informs?.numer}</Text>
                <Button bg="red" onClick={()=>{handleDelete();setID(item._id)}}>Delete</Button>
              </Flex>
            </>
          ))}
        </Text>
      </Box>
      <Text
        fontFamily="body"
        my="1%"
        textAlign="center"
        fontSize="40px"
        color={primary}
        fontWeight="700"
      >
        Update and delete from DB
      </Text>
      <Text
        fontFamily="body"
        my="1%"
        textAlign="center"
        fontSize="20px"
        color={secondary}
        fontWeight="600"
      >
        Update
      </Text>
      <Text
        fontFamily="body"
        textAlign="center"
        fontSize="30px"
        color={primary}
        fontWeight="600"
        my="2%"
      >
        Insira suas informações abaixo para continuarmos
      </Text>
      <Flex
        justifyContent="space-between"
        as="form"
      >
        <InputGroup w="30%" mx="auto" display="block">
          <Text fontSize="20px" color={primary} mb="3%">
            Nome
          </Text>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Elon Musk"
          />
        </InputGroup>
        <InputGroup w="30%" mx="auto" display="block">
          <Text fontSize="20px" color={primary} mb="3%">
            E-mail
          </Text>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="example@gmail.com"
          />
        </InputGroup>
        <InputGroup w="30%" mx="auto" display="block">
          <Text fontSize="20px" color={primary} mb="3%">
            Telefone
          </Text>
          <Input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="number"
            placeholder="00 9 9999-9999"
          />
        </InputGroup>
      </Flex>
      <Button type="submit">update</Button>
    </Box>
  );
}
