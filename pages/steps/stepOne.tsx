import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Colors from "../componnets/colors";

type stepProps = {
  progress: number;
  changeColor: (color: string, secondaryColor: string) => void;
};
export default function StepOne({ progress, changeColor }: stepProps) {
  const [color, setColor] = useState("");
  const colors = [
    {
      cor1: "#032543",
      cor2: "#aac0b8",
    },
    {
      cor1: "#0848aa",
      cor2: "#686e65",
    },
    {
      cor2: "#d2c09f",
      cor1: "#645a50",
    },
    {
      cor1: "#f57d1b",
      cor2: "#aac0b8",
    },
    {
      cor1: "#c6141c",
      cor2: "#121212",
    },
    {
      cor1: "#6b0092",
      cor2: "#ee6604",
    },
    {
      cor1: "#7146d4",
      cor2: "#ff6dc0",
    },
    {
      cor1: "#ff8454",
      cor2: "#1aa58e",
    },
  ];
  return (
    <>
      <Text
        display={progress == 10 ? "block" : "none"}
        textAlign="center"
        color={color}
        fontSize="25px"
        fontWeight="600"
        my="20px"
      >
        Escolha a paleta de cores que você mais gosta.
      </Text>
      <Flex
        justifyContent="space-between"
        my="3%"
        display={progress == 10 ? "Flex" : "none"}
        transition="1s"
        h="100px"
        w="80%"
        mx="auto"
      >
        {colors.map((item) => (
          <Colors
            key=""
            color1={item.cor1}
            color2={item.cor2}
            changeColor={(color1, color2) => {
              changeColor(color1, color2);
              setColor(color1);
            }}
          />
        ))}
      </Flex>
    </>
  );
}
