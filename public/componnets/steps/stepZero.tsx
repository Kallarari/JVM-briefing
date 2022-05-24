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
  RadioGroup,
  Radio,
  Stack,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import { Carousel } from "react-responsive-carousel";

type stepExampleProps = {
  progress: number;
  color: string;
  color2: string;
  step: number;
  price: (value: number) => void;
  time: (time: number) => void;
  ownDesign: (own: boolean) => void;
  witchDesign: (n: string) => void;
};
export default function StepeZero({
  progress,
  step,
  color,
  color2,
  price,
  time,
  ownDesign,
  witchDesign,
}: stepExampleProps) {
  const [value, setValue] = useState("");
  const [chose, setChose] = useState(1);
  const [site, setSite] = useState(0);
  useEffect(() => {
    ownDesign(false);
    witchDesign(value);
    if (value == "1") {
      price(3100);
      time(30);
    } else if (value == "2") {
      price(1700);
      time(14);
    } else if (value == "3") {
      price(4100);
      time(40);
    } else if (value == "4") {
      price(2700);
      time(30);
    } else if (value == "5") {
      price(1500);
      time(12);
    } else if (value == "6") {
      price(1600);
      time(14);
    } else if (value == "7") {
      price(1700);
      time(15);
    } else if (value == "8") {
      price(1100);
      time(10);
    } else if (value == "8") {
      price(8700);
      time(60);
    } else if (value == "9") {
      price(9000);
      time(60);
    } else if (value == "10") {
      price(11000);
      time(80);
    } else if (value == "11") {
      price(7500);
      time(50);
    } else if (value == "12") {
      price(7900);
      time(55);
    }
  }, [value]);

  const image = [
    ["/site1-1.png", "/site1-2.png", "/site1-3.png", "/site1-4.png"],
    ["/site2-1.png", "/site2-2.png", "/site2-3.png", "/site2-4.png"],
    ["/site3-1.png", "/site3-2.png", "/site3-3.png", "/site3-4.png"],
    ["/site4-1.png", "/site4-2.png", "/site4-3.png", "/site4-4.png"],
  ];

  const [selected, setSelected] = useState(0);
  return (
    <>
      <Box
        display={
          progress == step
            ? { base: "block", md: "none", lg: "none", xl: "none" }
            : "none"
        }
        w="80vw"
        mx="auto"
        h="70vh"
      >
        <Text
          color={color2}
          mt="7%"
          fontSize="18px"
          fontWeight="500"
          textAlign="center"
        >
          Selecione um desse modelos
        </Text>
        <Flex>
          <Image
            onClick={() =>{ setValue("1");setSite(0)}}
            w="45vw"
            src="/siteModel1.png"
            alt=""
          />
          <Image
            onClick={() => { setValue("5");setSite(2)}}
            w="45vw"
            src="/siteModel5.png"
            alt=""
          />
        </Flex>
        <Flex>
          <Image
            onClick={() =>{ setValue("9");setSite(1)}}
            w="45vw"
            src="/siteModel9.png"
            alt=""
          />
          <Image
            onClick={() => { setValue("11");setSite(3)}}
            w="45vw"
            src="/siteModel11.png"
            alt=""
          />
        </Flex>
        <Box>
          {image[site].map((item, index) => (
            <Box
              key={index}
              display={selected == index ? "block" : "none"}
              mx="auto"
              h="23vh"
            >
              <Image mx="auto" w="70vw" src={item} alt="" />
            </Box>
          ))}
          <Flex w="fit-content" mx="auto" mt="1vh">
            <Icon
              icon="akar-icons:arrow-left-thick"
              style={{
                width: "20px",
                height: "3vh",
                marginRight: "20px",
              }}
              onClick={() => {
                if (selected == 0) {
                  setSelected(image[site].length - 1);
                } else {
                  setSelected(selected - 1);
                }
              }}
            />
            <Icon
              icon="akar-icons:arrow-right-thick"
              style={{
                width: "20px",
                height: "3vh",
              }}
              onClick={() => {
                if (selected >= image[site].length - 1) {
                  setSelected(0);
                } else {
                  setSelected(selected + 1);
                }
              }}
            />
          </Flex>
        </Box>
        <Text fontSize="9px" mt="3vh">
          tenha acesso a mais informações na versão pra desktop desse site *
        </Text>
      </Box>
      <Box
        display={
          progress == step ? { base: "none", lg: "block", xl: "block" } : "none"
        }
      >
        <Flex justifyContent="space-around" my="4%">
          <Button
            onClick={() => {
              setChose(1);
            }}
            bg={chose == 1 ? color : color2}
            borderRadius="20px"
            w="20%"
            color="white"
            transition=".5s"
            _hover={{
              width: "23%",
              transition: ".5s",
              boxShadow: "2px 5px 9px #888888",
            }}
          >
            Site institucional
          </Button>
          <Button
            onClick={() => {
              setChose(2);
            }}
            bg={chose == 2 ? color : color2}
            borderRadius="20px"
            w="20%"
            color="white"
            transition=".5s"
            _hover={{
              width: "23%",
              transition: ".5s",
              boxShadow: "2px 5px 9px #888888",
            }}
          >
            One-Page
          </Button>
          <Button
            onClick={() => {
              setChose(3);
            }}
            bg={chose == 3 ? color : color2}
            borderRadius="20px"
            w="20%"
            color="white"
            transition=".5s"
            _hover={{
              width: "23%",
              transition: ".5s",
              boxShadow: "2px 5px 9px #888888",
            }}
          >
            E-commerce
          </Button>
        </Flex>
        <Flex
          justifyContent="space-between"
          display={chose === 1 ? "Flex" : "none"}
          minH="280px"
        >
          <Box
            cursor="pointer"
            w="22%"
            _hover={{ width: "25%" }}
            transition=".5s"
          >
            <RadioGroup onChange={setValue} value={value}>
              <Stack my="3%" textAlign="center" color={color}>
                <Radio value="1" mx="auto">
                  Aluguel/Pousada
                </Radio>
              </Stack>
            </RadioGroup>
            <Link
              href="https://htmlguru.net/house-rent/?storefront=envato-elements#"
              isExternal
            >
              <Image src="/siteModel1.png" alt="" transition=".5s" />
            </Link>
          </Box>
          <Box
            cursor="pointer"
            w="22%"
            _hover={{ width: "25%" }}
            transition=".5s"
          >
            <RadioGroup onChange={setValue} value={value}>
              <Stack my="3%" textAlign="center" color={color}>
                <Radio value="2" mx="auto">
                  Blog pessoal
                </Radio>
              </Stack>
            </RadioGroup>
            <Link
              href="
        http://themes.pixelwars.org/impose-html/?storefront=envato-elements"
              isExternal
            >
              <Image src="/siteModel2.png" alt="" transition=".5s" />
            </Link>
          </Box>
          <Box
            cursor="pointer"
            w="22%"
            _hover={{ width: "25%" }}
            transition=".5s"
          >
            <RadioGroup onChange={setValue} value={value}>
              <Stack my="3%" color={color}>
                <Radio value="3" mx="auto">
                  Site empresárial
                </Radio>
              </Stack>
            </RadioGroup>
            <Link
              href="
              https://validthemes.online/themeforest/seorun/index-5.html"
              isExternal
            >
              <Image src="/siteModel3.png" alt="" transition=".5s" />
            </Link>
          </Box>
          <Box
            cursor="pointer"
            w="22%"
            _hover={{ width: "25%" }}
            transition=".5s"
          >
            <RadioGroup onChange={setValue} value={value}>
              <Stack my="3%" color={color}>
                <Radio value="4" mx="auto">
                  Plataforma de educação
                </Radio>
              </Stack>
            </RadioGroup>
            <Link
              href="https://template.hasthemes.com/eduhome/eduhome/index.html"
              isExternal
            >
              <Image src="/siteModel6.png" alt="" transition=".5s" />
            </Link>
          </Box>
        </Flex>
        <Flex
          justifyContent="space-between"
          display={chose === 2 ? "Flex" : "none"}
          minH="280px"
        >
          <Box
            cursor="pointer"
            w="22%"
            _hover={{ width: "25%" }}
            transition=".5s"
          >
            <RadioGroup onChange={setValue} value={value}>
              <Stack my="3%" color={color}>
                <Radio value="5" mx="auto">
                  Design minimalista
                </Radio>
              </Stack>
            </RadioGroup>
            <Link href="http://interio.azelab.com/onepage-blue/" isExternal>
              <Image src="/siteModel4.png" alt="" transition=".5s" />
            </Link>
          </Box>
          <Box
            cursor="pointer"
            w="22%"
            _hover={{ width: "25%" }}
            transition=".5s"
          >
            <RadioGroup onChange={setValue} value={value}>
              <Stack my="3%" color={color}>
                <Radio value="6" mx="auto">
                  Instituição financeira
                </Radio>
              </Stack>
            </RadioGroup>
            <Link
              href="https://max-themes.net/demos/onepagepro/corporate/index.html"
              isExternal
            >
              <Image src="/siteModel7.png" alt="" transition=".5s" />
            </Link>
          </Box>
          <Box
            cursor="pointer"
            w="22%"
            _hover={{ width: "25%" }}
            transition=".5s"
          >
            <RadioGroup onChange={setValue} value={value}>
              <Stack my="3%" color={color}>
                <Radio value="7" mx="auto">
                  Site de equipe
                </Radio>
              </Stack>
            </RadioGroup>
            <Link
              href="http://mutationmedia.net/MOUSIQUA/index.html?storefront=envato-elements"
              isExternal
            >
              <Image src="/siteModel8.png" alt="" transition=".5s" />
            </Link>
          </Box>
          <Box
            cursor="pointer"
            w="22%"
            _hover={{ width: "25%" }}
            transition=".5s"
          >
            <RadioGroup onChange={setValue} value={value}>
              <Stack my="3%" color={color}>
                <Radio value="8" mx="auto">
                  Portfólio pessoal
                </Radio>
              </Stack>
            </RadioGroup>
            <Link
              href="https://max-themes.net/demos/onepagepro/vcard/index.html"
              isExternal
            >
              <Image src="/siteModel9.png" alt="" transition=".5s" />
            </Link>
          </Box>
        </Flex>
        <Flex
          justifyContent="space-between"
          display={chose === 3 ? "Flex" : "none"}
          minH="280px"
        >
          <Box
            cursor="pointer"
            w="22%"
            _hover={{ width: "25%" }}
            transition=".5s"
          >
            <RadioGroup onChange={setValue} value={value}>
              <Stack my="3%" color={color}>
                <Radio value="9" mx="auto">
                  Loja de produtos
                </Radio>
              </Stack>
            </RadioGroup>
            <Link
              href="http://themesflat.com/html/modaz/?storefront=envato-elements"
              isExternal
            >
              <Image src="/siteModel5.png" alt="" transition=".5s" />
            </Link>
          </Box>
          <Box
            cursor="pointer"
            w="22%"
            _hover={{ width: "25%" }}
            transition=".5s"
          >
            <RadioGroup onChange={setValue} value={value}>
              <Stack my="3%" color={color}>
                <Radio value="10" mx="auto">
                  Mega store
                </Radio>
              </Stack>
            </RadioGroup>
            <Link
              href="http://demo.7uptheme.com/html/e-store/?storefront=envato-elements"
              isExternal
            >
              <Image src="/siteModel10.png" alt="" transition=".5s" />
            </Link>
          </Box>

          <Box
            cursor="pointer"
            w="22%"
            _hover={{ width: "25%" }}
            transition=".5s"
          >
            <RadioGroup onChange={setValue} value={value}>
              <Stack my="3%" color={color}>
                <Radio value="11" mx="auto">
                  Loja de serviços
                </Radio>
              </Stack>
            </RadioGroup>
            <Link
              href="https://demo.zytheme.com/autoshop/home-1.html#"
              isExternal
            >
              <Image src="/siteModel11.png" alt="" transition=".5s" />
            </Link>
          </Box>
          <Box
            cursor="pointer"
            w="22%"
            _hover={{ width: "25%" }}
            transition=".5s"
          >
            <RadioGroup onChange={setValue} value={value}>
              <Stack my="3%" color={color}>
                <Radio value="12" mx="auto">
                  loja minimalista
                </Radio>
              </Stack>
            </RadioGroup>
            <Link
              href="http://www.elathemes.com/themes/divano/?storefront=envato-elements"
              isExternal
            >
              <Image src="/siteModel3.png" alt="" transition=".5s" />
            </Link>
          </Box>
        </Flex>
        <Box w="min" mx="auto">
          <Button
            onClick={() => ownDesign(true)}
            bg={color}
            color="white"
            fontSize="18px"
            fontWeight="600"
            _hover={{
              transition: ".2s",
              boxShadow: "2px 5px 9px #888888",
            }}
          >
            Quero ter meu próprio design.
          </Button>
        </Box>
      </Box>
    </>
  );
}
