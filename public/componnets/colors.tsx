import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  useColorMode,
} from "@chakra-ui/react";
import React, { useState } from "react";

type colorsProps = {
  color1: string;
  color2: string;
  changeColor: (color: string, secondaryColor: string) => void;
};
export default function Colors({ color1, color2, changeColor }: colorsProps) {
  return (
    <Flex 
    position="relative"
    cursor="pointer"
    onClick={() => {
      changeColor(color1, color2);
    }}>
      <Box
        bg={color1}
        w="50px"
        h="50px"
        borderRadius="50%"
        border="3px solid #ffffffaa"
        zIndex="2"
      ></Box>
      <Box
        bg={color2}
        w="50px"
        h="50px"
        borderRadius="50%"
        border="3px solid #ffffffaa"
        zIndex="0"
        position="absolute"
        left="5"
        top="2"
      ></Box>
    </Flex>
  );
}
