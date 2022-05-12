import {
  Box,
  Button,
  Checkbox,
  Flex,
  Img,
  Input,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

type stepThreeProps = {
  progress: number;
  step: number;
  colorPrimary: string;
  FunctionsInfor: (scheduling1:boolean, payment1:boolean) => void;
};
export default function StepeThree({
  progress,
  step,
  colorPrimary,
  FunctionsInfor
}: stepThreeProps) {
  const [scheduling, setScheduling] = useState(Boolean)
  const [payment, setPayment] = useState(Boolean)
  useEffect(() => {
    FunctionsInfor(scheduling,payment);
  }, [scheduling,payment]);
  return (
    <Box my="3%" display={progress == step ? "block" : "none"}>
      <Text
        color={colorPrimary}
        fontSize="20px"
        fontWeight="500"
        textAlign="center"
      >
        Funcionalidades adicionais
      </Text>
      <Flex justifyContent="space-around">
        <Box  w="40%">
          <Text
            color={colorPrimary}
            fontSize="18px"
            fontWeight="500"
            textAlign="center"
          >
            Sistema de agendamento
          </Text>
          <Checkbox
            isChecked={scheduling}
            onChange={(e) =>{
              setScheduling(e.target.checked)
            }}
          >
            Agendamento
          </Checkbox>
          <Flex justifyContent="space-between">
            <Img
              transform="scaleX(-1)"
              w="200px"
              src="./cellAgendamento.png"
            ></Img>
            <Text
            w="50%"
              color="#646464"
              fontSize="16px"
              fontWeight="500"
              textAlign="center"
              alignSelf="center"
            >
              Este é um sistema para fazer agendamento de reuniões, consultas,
              que abre a possibilidade do cliente agendar uma reunião e
              verificar seus horários a qualquer momento, tudo automatizado.
            </Text>
          </Flex>
        </Box>
        <Box w="40%">
          <Text
            color={colorPrimary}
            fontSize="18px"
            fontWeight="500"
            textAlign="center"
          >
            Sistema de pagamento
          </Text>
          <Checkbox
            isChecked={payment}
            onChange={(e) =>{
              setPayment(e.target.checked)
            }}
          >
            pagamento
          </Checkbox>
          <Flex justifyContent="space-between">
            <Text
            w="50%"
              color="#646464"
              fontSize="16px"
              fontWeight="500"
              textAlign="center"
              alignSelf="center"
            >
              Receba pagamento por cartão, boleto e pix. <br /> Ofereça pagamentos a vista ou parcelados e acompanhe os resultados em tempo real na sua aba de administração.
            </Text>
            <Img
              w="200px"
              src="./cellPayment.png"
            ></Img>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
