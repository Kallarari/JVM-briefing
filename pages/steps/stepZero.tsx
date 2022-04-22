import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Image,
  Text,
  Box,
  Link,
} from "@chakra-ui/react";
import React from "react";

type stepExampleProps = {
  progress: number;
  color: string;
  step: number;
};
export default function StepeZero({ progress, step, color }: stepExampleProps) {
  return (
    <Flex
      justifyContent="space-between"
      my="3%"
      display={progress == step ? "Flex" : "none"}
    >
      <Link
        href="
https://htmlguru.net/house-rent/?storefront=envato-elements#"
        isExternal
        w="22%"
        _hover={{ width: "25%" }}
        transition=".5s"
      >
        <Box cursor="pointer">
          <Text
            textAlign="center"
            fontSize="20px"
            fontWeight="600"
            color={color}
          >
            Aluguel/Pousada
          </Text>
          <Image src="/siteModel1.png" alt="" transition=".5s" />
        </Box>
      </Link>
      <Link
        href="http://themes.pixelwars.org/impose-html/index.html"
        isExternal
        w="22%"
        _hover={{ width: "25%" }}
        transition=".5s"
      >
        <Box cursor="pointer">
          <Text
            textAlign="center"
            fontSize="20px"
            fontWeight="600"
            color={color}
          >
            Blog Pessoal
          </Text>
          <Image src="/siteModel2.png" alt="" transition=".5s" />
        </Box>
      </Link>
      <Link
        href="
        https://validthemes.online/themeforest/seorun/index-5.html"
        isExternal
        w="22%"
        _hover={{ width: "25%" }}
        transition=".5s"
      >
        <Box cursor="pointer">
          <Text
            textAlign="center"
            fontSize="20px"
            fontWeight="600"
            color={color}
          >
            Prestação de serviços
          </Text>
          <Image src="/siteModel3.png" alt="" transition=".5s" />
        </Box>
      </Link>
    </Flex>
  );
}
