import { Button, Flex, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import React from 'react'

type stepExampleProps = {
  progress: number;
  step:number;
  value: (position:number, value:number) => void;
}
export default function StepeExample({progress, step, value}:stepExampleProps) {
  return (
    <Flex
    justifyContent="space-between"
    my="3%"
    display={progress == step ? "Flex" : "none"}
  >
    <Button
            onClick={() => {
              value(1, 300);
            }}
            borderRadius="20px"
            w="20%"
            color="white"
          >
            E-commerce
          </Button>
  </Flex>
  )
}
