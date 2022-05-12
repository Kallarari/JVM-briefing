import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Colors from "../colors";
import Hue from "react-color/lib/components/hue/Hue";
import Chrome from "react-color/lib/components/chrome/Chrome";

type stepProps = {
  progress: number;
  changeColor: (color: string, secondaryColor: string) => void;
  step: number;
};
export default function StepOne({ progress, changeColor, step }: stepProps) {
  const [color, setColor] = useState("#0079AE");
  const [color2, setColor2] = useState("#E68C26");
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
      <Box display={progress == step ? "static" : "none"}>
        <Text
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
          mt="3%"
          display={progress == step ? "Flex" : "none"}
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
        <Flex justifyContent="space-between">
          <Box w="48%">
            <Text
              textAlign="center"
              color={color}
              fontSize="25px"
              fontWeight="600"
              mb="20px"
            >
              Ou escolha sua própria paleta
            </Text>
            <Flex justifyContent="space-around">
              <Box>
                <Chrome
                  color={color}
                  onChangeComplete={(e) => {
                    setColor(e.hex);
                    changeColor(e.hex, color2);
                  }}
                />
              </Box>
              <Box>
                <Colors color1={color} color2={color2} changeColor={() => {}} />
              </Box>
              <Box>
                <Chrome
                  color={color2}
                  onChangeComplete={(e) => {
                    setColor2(e.hex);
                    changeColor(color, e.hex);
                  }}
                />
              </Box>
            </Flex>
          </Box>
            <Box w="48%">
              
            <Text
              textAlign="center"
              color={color}
              fontSize="25px"
              fontWeight="600"
              mb="20px"
            >
              Aproveite e faça sua edentidade visual com a<br /> EG design
            </Text>
            </Box>
        </Flex>
      </Box>
    </>
  );
}
