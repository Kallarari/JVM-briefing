import { Button, Flex, Input, InputGroup, InputLeftAddon,Text } from '@chakra-ui/react'
import React from 'react'

type stepExampleProps = {
  progress: number;
  step:number;
  primary:string;
  secondary:string;
}
export default function LastStep({progress, step, primary,secondary}:stepExampleProps) {
  return (
    <Flex
    justifyContent="space-between"
    my="3%"
    display={progress == step ? "Block" : "none"}
  >
    
    <Text
        textAlign="center"
        fontSize="25px"
        color={secondary}
        fontWeight="600"
      >
        Parabéns
      </Text>
      <Text
        textAlign="center"
        fontSize="20px"
        color={primary}
        fontWeight="500"
        mb="30px"
      >
        Você terminou o Briefing da JVM!!
      </Text>
  </Flex>
  )
}
