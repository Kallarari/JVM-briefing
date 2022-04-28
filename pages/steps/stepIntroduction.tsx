import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import React, { FormEvent, useState } from "react";
import axios from 'axios';

type stepIntroductionProps = {
  progress: number;
  step: number;
  primary: string;
  secondary: string;
};
export default function StepeIntroduction({
  progress,
  step,
  primary,
  secondary,
}: stepIntroductionProps) {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  function handleSendInformation(event: FormEvent) {
    event.preventDefault();
    axios.post('/api/subscribe',{email:email});
  }
  return (
    <Box my="3%" display={progress == step ? "block" : "none"}>
      <Text
        fontFamily="body"
        my="1%"
        textAlign="center"
        fontSize="40px"
        color={primary}
        fontWeight="700"
      >
        Seja bem vindo a montagem de site rápida da JVM!
      </Text>
      <Text
        fontFamily="body"
        my="1%"
        textAlign="center"
        fontSize="20px"
        color={secondary}
        fontWeight="600"
      >
        {" "}
        Aqui você terá o preço e tempo estimado de cada aplicação e também
        conhecerá um pouco mais de nossos serviços e vantagens!
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
      <Flex justifyContent="space-between" as="form" onSubmit={handleSendInformation}>
        <InputGroup w="30%" mx="auto" display="block">
          <Text fontSize="20px" color={primary} mb="3%">
            Nome
          </Text>
          <Input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Elon Musk" />
        </InputGroup>
        <InputGroup w="30%" mx="auto" display="block">
          <Text fontSize="20px" color={primary} mb="3%">
            E-mail
          </Text>
          <Input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="example@gmail.com" />
        </InputGroup>
        <InputGroup w="30%" mx="auto" display="block">
          <Text fontSize="20px" color={primary} mb="3%">
            Telefone
          </Text>
          <Input value={number} onChange={e => setNumber(e.target.value)} type="number" placeholder="00 9 9999-9999" />
        </InputGroup>
      <Button type="submit">enviar</Button>
      </Flex>
    </Box>
  );
}
