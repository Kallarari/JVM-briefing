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
  chose: number;
};
export default function StepeZero({ chose, progress, step, color}: stepExampleProps) {
  return (
    <>
    <Box
      display={progress == step ? "Flex" : "none"}>
    <Flex
      justifyContent="space-between"
      my="3%"
      display={chose === 1 ? "Flex" : "none"}
    >
      <Link
        href='https://htmlguru.net/house-rent/?storefront=envato-elements#'
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
        href='
        http://themes.pixelwars.org/impose-html/?storefront=envato-elements'
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
            Blog pessoal
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
            Site empresárial
          </Text>
          <Image src="/siteModel3.png" alt="" transition=".5s" />
        </Box>
      </Link>
      <Link
        href="https://template.hasthemes.com/eduhome/eduhome/index.html"
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
            Plataforma de educação
          </Text>
          <Image src="/siteModel6.png" alt="" transition=".5s" />
        </Box>
      </Link>
    </Flex><Flex
      justifyContent="space-between"
      my="3%"
      display={chose === 2 ? "Flex" : "none"}
    >
      <Link
        href='http://interio.azelab.com/onepage-blue/'
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
            Design de interiores
          </Text>
          <Image src="/siteModel4.png" alt="" transition=".5s" />
        </Box>
      </Link>      
      <Link
        href='https://max-themes.net/demos/onepagepro/corporate/index.html'
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
            Instituição financeira
          </Text>
          <Image src="/siteModel7.png" alt="" transition=".5s" />
        </Box>
      </Link>
      <Link
        href="http://mutationmedia.net/MOUSIQUA/index.html?storefront=envato-elements"
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
            Site de banda
          </Text>
          <Image src="/siteModel8.png" alt="" transition=".5s" />
        </Box>
      </Link>
      <Link
        href="https://max-themes.net/demos/onepagepro/vcard/index.html"
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
            Portfólio pessoal
          </Text>
          <Image src="/siteModel9.png" alt="" transition=".5s" />
        </Box>
      </Link>
    </Flex><Flex
      justifyContent="space-between"
      my="3%"
      display={chose === 3 ? "Flex" : "none"}
    >
      <Link
        href='http://themesflat.com/html/modaz/?storefront=envato-elements'
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
            Loja de vestuário
          </Text>
          <Image src="/siteModel5.png" alt="" transition=".5s" />
        </Box>
      </Link>      
      <Link
        href='http://demo.7uptheme.com/html/e-store/?storefront=envato-elements'
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
            Mega store moda
          </Text>
          <Image src="/siteModel10.png" alt="" transition=".5s" />
        </Box>
      </Link>
      <Link
        href="https://demo.zytheme.com/autoshop/home-1.html#"
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
            Mecânica e manutenção automotiva
          </Text>
          <Image src="/siteModel11.png" alt="" transition=".5s" />
        </Box>
      </Link>
      <Link
        href="http://www.elathemes.com/themes/divano/?storefront=envato-elements"
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
            Design de móveis
          </Text>
          <Image src="/siteModel3.png" alt="" transition=".5s" />
        </Box>
      </Link>
    </Flex>
    </Box>
    </>
  );
}
