import { Box, Button, Flex, Input, InputGroup, Text } from "@chakra-ui/react";
import React, { FormEvent, useContext, useEffect, useState } from "react";
import axios from "axios";
import Scheduling from "../scheduling";
import { info } from "console";

type stepFourProps = {
  progress: number;
  step: number;
  primary: string;
  error?: string;
  secondary: string;
  infor: (
    name: string,
    email: string,
    numer: number,
    day: number,
    hour: number,
    month: number
  ) => void;
};
export default function StepeFour({
  progress,
  step,
  primary,
  secondary,
  infor,
  error,
}: stepFourProps) {
  const [number, setNumber] = useState(Number);
  const [hour, setHour] = useState(Number);
  const [month, setMonth] = useState(Number);
  const [day, setDay] = useState(Number);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    infor(name, email, number, day, hour, month);
  }, [number, name, email, day, hour, month]);
  return (
    <>
      <Box
        display={
          progress == step
            ? { base: "block", md: "none", lg: "none", xl: "none" }
            : "none"
        }
        w="80vw"
        mx="auto"
        h="70vh"
      >
        <Box>
          <Text
            textAlign="center"
            fontSize="20px"
            color={primary}
            fontWeight="500"
            mb="1vh"
          >
            Preencha com suas informações.
          </Text>
          <Text
            textAlign="center"
            fontSize="15px"
            color="red"
            fontWeight="500"
          >
            {error}
          </Text>
          <InputGroup w="90%" mx="auto" display="block" mb="3vh%">
            <Text fontSize="20px" color={primary} textAlign="center">
              Nome
            </Text>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Ricardo Costa"
            />
          </InputGroup>
          <InputGroup w="90%" mx="auto" display="block" mb="3vh%">
            <Text fontSize="20px" color={primary} textAlign="center">
              E-mail
            </Text>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="seu-email@gmail.com"
            />
          </InputGroup>
          <InputGroup w="90%" mx="auto" display="block">
            <Text fontSize="20px" color={primary} textAlign="center">
              Telefone
            </Text>
            <Input
              value={number}
              onChange={(e) => setNumber(e.target.valueAsNumber)}
              type="number"
              placeholder="00 9 9999-9999"
            />
          </InputGroup>
          <Text
            textAlign="center"
            fontSize="20px"
            color={primary}
            fontWeight="500"
            mb="1vw"
          >
            Agende sua reunião.
          </Text>
          <Scheduling
            color1={primary}
            color2={secondary}
            date={(d, h, m) => {
              setDay(d);
              setMonth(m);
              setHour(h);
            }}
          ></Scheduling>
        </Box>
      </Box>
      <Box
        my="3%"
        display={
          progress == step ? { base: "none", lg: "block", xl: "block" } : "none"
        }
      >
        <Flex justifyContent="space-around">
          <Box>
            <Text
              textAlign="center"
              fontSize="20px"
              color={primary}
              fontWeight="500"
              mb="30px"
            >
              Agende sua reunião.
            </Text>
            <Scheduling
              color1={primary}
              color2={secondary}
              date={(d, h, m) => {
                setDay(d);
                setMonth(m);
                setHour(h);
              }}
            ></Scheduling>
          </Box>
          <Box>
            <Text
              textAlign="center"
              fontSize="20px"
              color={primary}
              fontWeight="500"
              mb="30px"
            >
              Preencha com suas informações.
            </Text>
            <InputGroup w="90%" mx="auto" display="block" mb="10%">
              <Text fontSize="20px" color={primary} mb="3%" textAlign="center">
                Nome
              </Text>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Ricardo Costa"
              />
            </InputGroup>
            <InputGroup w="90%" mx="auto" display="block" mb="10%">
              <Text fontSize="20px" color={primary} mb="3%" textAlign="center">
                E-mail
              </Text>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="seu-email@gmail.com"
              />
            </InputGroup>
            <InputGroup w="90%" mx="auto" display="block">
              <Text fontSize="20px" color={primary} mb="3%" textAlign="center">
                Telefone
              </Text>
              <Input
                value={number}
                onChange={(e) => setNumber(e.target.valueAsNumber)}
                type="number"
                placeholder="00 9 9999-9999"
              />
            </InputGroup>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
