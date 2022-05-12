import { Text, Image, Box, Flex, Progress } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

type cicleArray = {
  name: string;
  icon: string;
};

type HeaderSettingsProps = {
  position: number;
  onCurrent: (currentValue: number) => void;
  steps: Array<cicleArray>;
  primary:string;
  secondary:string;
};

export const Steps = ({
  steps,
  onCurrent,
  position,
  primary,
  secondary,
}: HeaderSettingsProps) => {
  const [current, setCurrent] = useState(position);
  function handleColor(key: number) {
    if (key < current) {
      return primary;
    }
    if (key == current) {
      return secondary;
    }
    if (key > current) {
      return '#868686';
    }
  }
  useEffect(() => {
    setCurrent(position);
  }, [position]);
  function handleBar() {
    let width = 90;
    width = width / 6;
    width = (width * (current==2?(current-0.05*current):current==3?(current-0.07*current):current==4?(current-0.05*current):current));
    let text = width.toString();
    console.log(text, current, steps.length);
    return text + '%';
  }
  return (
    <Box position="relative">
      <Box
        borderTop="2px dashed #C4C4C4"
        w="90%"
        h="0px"
        position="absolute"
        top="64%"
        left="3%"
        zIndex="0"
      />
      <Box
        borderTop="2px solid"
        borderColor={primary}
        w={handleBar()}
        h="0px"
        position="absolute"
        top="64%"
        left="3%"
        zIndex="1"
      />
      <Flex w="95%" justifyContent="space-between" position="relative" zIndex="2">
        {steps.map((item, key) => (
          <>
            <Box position="relative">
              <Box
                position="absolute"
                bg="#FF9400"
                borderRadius="50%"
                w="20px"
                h="20px"
                top="30%"
                left="65%"
                display={current < key + 1 ? 'none' : 'absolute'}
              >
                <Icon
                  icon="akar-icons:circle-check"
                  style={{
                    width: '10px',
                    height: '10px',
                    margin: '24% auto 0 auto',
                  }}
                  color="white"
                />
              </Box>
              <Text fontSize="1rem" fontWeight="400" color={handleColor(key)} textAlign="center">
                {item.name}
              </Text>
              <Box
                bg={handleColor(key)}
                onClick={() => {
                  setCurrent(key);
                  onCurrent(key);
                }}
                w="50px"
                h="50px"
                borderRadius="50%"
                alignContent="center"
                justifyContent="center"
                pt="1px"
                margin="auto auto"
                zIndex="5"
              >
                <Icon
                  icon={item.icon}
                  style={{
                    width: '16px',
                    height: '22px',
                    margin: '22% auto 0 auto',
                  }}
                  color="white"
                />
              </Box>
            </Box>
          </>
        ))}
      </Flex>
    </Box>
  );
};
