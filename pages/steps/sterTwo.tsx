import {
  Box,
  Flex,
  Input,
  InputGroup,
  Text,
  InputLeftAddon,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import React, { useState } from "react";

type stepProps = {
  progress: number;
  colorPrimary: string;
  step: number;
};
export default function StepTwo({ progress, colorPrimary,step }: stepProps) {
  const [value, setValue] = useState("");
  return (
    <Box
      w="100%"
      justifyContent="space-between"
      my="3%"
      display={progress == step ? "block" : "none"}
    >
      <Text textAlign="center" fontSize="30px" fontWeight="600" color={colorPrimary}>
        Assinale quais páginas(containers se for One-Page) você acha importante o seu site ter.
      </Text>
      <RadioGroup onChange={setValue} value={value}>
        <Stack direction="row" justifyContent="space-between" my="3%">
          <Radio value="1">Contato</Radio>
          <Radio value="2">Quem somos</Radio>
          <Radio value="3">Serviços</Radio>
          <Radio value="4">Perguntas frequentes</Radio>
          <Radio value="5">Termos e condições de uso</Radio>
          <Radio value="6">Blog</Radio>
          <Radio value='7' >Outro</Radio>
        </Stack>
      </RadioGroup>
      <InputGroup w="35%" mx="auto" display={value == '7'? "static": "none"}>
        <Text textAlign="center" fontSize="20px" color={colorPrimary} mb="3%">Qual página você gostaria que seu site tivesse a mais?</Text>
        <Input type="text" placeholder="Pagina de ...." />
      </InputGroup>
    </Box>
  );
}
