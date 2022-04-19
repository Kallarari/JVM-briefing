import { Flex, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import React from 'react'

type stepProps = {
  progress: number;
}
export default function StepOne({progress}:stepProps) {
  return (
    <Flex
    justifyContent="space-between"
    my="3%"
    display={progress == 10 ? "Flex" : "none"}
  >
    <InputGroup w="30%">
      <InputLeftAddon>Nome</InputLeftAddon>
      <Input type="text" placeholder="Elon Musk" />
    </InputGroup>
    <InputGroup w="30%">
      <InputLeftAddon>E-mail</InputLeftAddon>
      <Input type="text" placeholder="elonMusk@gmail.com" />
    </InputGroup>
    <InputGroup w="30%">
      <InputLeftAddon>Número</InputLeftAddon>
      <Input type="text" placeholder="+1 55 9 9999-9999" />
    </InputGroup>
  </Flex>
  )
}
