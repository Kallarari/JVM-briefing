import { Box, Flex, Input, InputGroup,Text, InputLeftAddon, RadioGroup, Stack, Radio } from '@chakra-ui/react'
import React, { useState } from 'react'

type stepProps = {
  progress: number;
  colorPrimary: string;
}
export default function StepTwo({progress,colorPrimary}:stepProps) {
  const [value, setValue] = useState("");
   return (
    <Box
    w="100%"
    justifyContent="space-between"
    my="3%"
    display={progress == 20 ? "block" : "none"}
  >
    <Text textAlign="center" fontSize="20px" color={colorPrimary}>
      Assinale a característica mais importante para você.{" "}
    </Text>
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction="row" justifyContent="space-between" my="3%">
        <Radio value="1">Clareza</Radio>
        <Radio value="2">Exclusividade</Radio>
        <Radio value="3">Seriedade</Radio>
        <Radio value="4">Vistosidade</Radio>
        <Radio value="5">Conforto</Radio>
        <Radio value="6">Perfeição</Radio>
        <Radio value="7">Outro</Radio>
      </Stack>
    </RadioGroup>
    <InputGroup w="30%">
      <InputLeftAddon />
      <Input type="text" placeholder="+1 55 9 9999-9999" />
    </InputGroup>
  </Box>
  )
}
