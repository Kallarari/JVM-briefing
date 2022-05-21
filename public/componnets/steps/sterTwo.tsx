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
  Image,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

type stepProps = {
  progress: number;
  colorPrimary: string;
  step: number;
  PageInfor: (checkedItems: boolean[]) => void;
};
export default function StepTwo({
  progress,
  colorPrimary,
  step,
  PageInfor,
}: stepProps) {
  const [checkedItems, setCheckedItems] = React.useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  useEffect(() => {
    PageInfor(checkedItems);
  }, [checkedItems]);
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
        Assinale quais informações você acha importante o seu site ter.
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
            }
          >
            Perguntas frequentes
          </Checkbox>
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
            }
          >
            Termos e condições de uso
          </Checkbox>
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
            }
          >
            Blog
          </Checkbox>
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
            }
          >
            Outro
          </Checkbox>
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
      <Box display={checkedItems[6] == true ? "none":"static" }>
        <Text
          color={colorPrimary}
          textAlign="center"
          mt="40px"
          fontSize="18px"
          fontWeight="500"
        >
          Essas informações não vão adicionar ao valor do seu site só vão
          substituir outros conteúdos. <br /> Recomendamos um blog e uma página
          de contato para o site ter movimento e para as pessoas chegaram até
          sua empresa!
        </Text>
        <Image src="/prototipe.png" w="200px" mx="auto" mt="20px" alt="" />
      </Box>
    </Box>
  );
}
