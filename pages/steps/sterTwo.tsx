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
  Checkbox,
} from "@chakra-ui/react";
import React, { useState } from "react";

type stepProps = {
  progress: number;
  colorPrimary: string;
  step: number;
};
export default function StepTwo({ progress, colorPrimary, step }: stepProps) {
  const [checkedItems, setCheckedItems] = React.useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  return (
    <Box
      w="100%"
      justifyContent="space-between"
      my="3%"
      display={progress == step ? "block" : "none"}
    >
      <Text
        textAlign="center"
        fontSize="30px"
        fontWeight="600"
        color={colorPrimary}
      >
        Assinale quais características você acha importante
        o seu site ter.
      </Text>
      <RadioGroup>
        <Stack
          direction="row"
          justifyContent="space-between"
          my="3%"
          fontSize="30px"
          fontWeight="600"
          color="black"
        >
          <Checkbox
            isChecked={checkedItems[0]}
            onChange={(e) =>
              setCheckedItems([
                e.target.checked,
                checkedItems[1],
                checkedItems[2],
                checkedItems[3],
                checkedItems[4],
                checkedItems[5],
                checkedItems[6],
              ])
            }
          >
            Contato
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[1]}
            onChange={(e) =>
              setCheckedItems([
                checkedItems[0],
                e.target.checked,
                checkedItems[2],
                checkedItems[3],
                checkedItems[4],
                checkedItems[5],
                checkedItems[6],
              ])
            }
          >
            Quem somos
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[2]}
            onChange={(e) =>
              setCheckedItems([
                checkedItems[0],
                checkedItems[1],
                e.target.checked,
                checkedItems[3],
                checkedItems[4],
                checkedItems[5],
                checkedItems[6],
              ])
            }
          >
            Serviços
          </Checkbox>
          <Checkbox 
            isChecked={checkedItems[3]}
            onChange={(e) =>
              setCheckedItems([
                checkedItems[0],
                checkedItems[1],
                checkedItems[2],
                e.target.checked,
                checkedItems[4],
                checkedItems[5],
                checkedItems[6],
              ])
            }>Perguntas frequentes</Checkbox>
          <Checkbox 
            isChecked={checkedItems[4]}
            onChange={(e) =>
              setCheckedItems([
                checkedItems[0],
                checkedItems[1],
                checkedItems[2],
                checkedItems[3],
                e.target.checked,
                checkedItems[5],
                checkedItems[6],
              ])
            }>Termos e condições de uso</Checkbox>
          <Checkbox 
            isChecked={checkedItems[5]}
            onChange={(e) =>
              setCheckedItems([
                checkedItems[0],
                checkedItems[1],
                checkedItems[2],
                checkedItems[3],
                checkedItems[4],
                e.target.checked,
                checkedItems[6],
              ])
            }>Blog</Checkbox>
          <Checkbox 
            isChecked={checkedItems[6]}
            onChange={(e) =>
              setCheckedItems([
                checkedItems[0],
                checkedItems[1],
                checkedItems[2],
                checkedItems[3],
                checkedItems[4],
                checkedItems[5],                
                e.target.checked,
              ])
            }>Outro</Checkbox>
        </Stack>
      </RadioGroup>
      <InputGroup
        w="35%"
        mx="auto"
        display={checkedItems[6] == true ? "static" : "none"}
      >
        <Text textAlign="center" fontSize="20px" color={colorPrimary} mb="3%">
          Qual página você gostaria que seu site tivesse a mais?
        </Text>
        <Input type="text" placeholder="Pagina de ...." />
      </InputGroup>
    </Box>
  );
}
