import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  useColorMode,
  Text,
  background,
  Button,
} from "@chakra-ui/react";
import { ThemeContext } from "@emotion/react";
import { Icon } from "@iconify/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
type array = {
  mounth: number;
  day: Number;
  hour: Number;
};
type schedulingProps = {
  color1: string;
  color2: string;
  date: (day: number, hour: number, m: number) => void;
};
export default function Scheduling({ color1, color2, date }: schedulingProps) {
  const hours = [8, 12, 15, 18];
  //quantas horas você quer oferecer?
  /*  const meetings = [
    { month: 5, day: 9, hour: 12 },
    { month: 5, day: 10, hour: 12 },
    { month: 5, day: 15, hour: 8 },
    { month: 6, day: 8, hour: 8 },
  ]; */
  //formato das reuniões
  const [size, setSize] = useState(5);
  //largura de quantos dias terão a agenda
  const [maxDays, setMaxDays] = useState(30);
  //quantos dias pra frente o cara vai poder ver
  const houverColor = "#28689c";
  const headColor = color1;
  const hoursColor = color1;
  const selectedColor = color2;
  const notColor = "#ce3333";
  var semana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const [info, setInfo] = useState<any>([]);
  const [colorBox, setColorBox] = useState(String);
  useEffect(() => {
    axios.get("/api/read").then((resp) => {
      setInfo(resp.data.result);
    });
  }, []);
  var d = new Date();
  const month = [
    "Jan",
    "Fev",
    "Mar",
    "Abril",
    "Mai",
    "Jun",
    "Jul",
    "Agos",
    "Set",
    "Out",
    "Nov",
    "Dec",
  ];
  const [varDay, setVarDay] = useState(1);
  const [selectedDay, setSelectedDay] = useState(Number);
  const [selectedHours, setSelectedHours] = useState(Number);
  const [selectedMonth, setSelectedMonth] = useState(Number);
  function selectDay(key: number, h: number, m: number) {
    setSelectedHours(h);
    setSelectedMonth(m);
    setSelectedDay(
      d.getDate() + varDay + key > new Date(2022, d.getMonth(), 0).getDate()
        ? d.getDate() + varDay + key - new Date(2022, d.getMonth(), 0).getDate()
        : d.getDate() + varDay + key
    );
  }
  useEffect(() => {
    date(selectedDay, selectedHours, selectedMonth);
  }, [selectedHours]);

  function handleColor(key1: number, item: number): string {
    for (let i = 0; i < info.length; i++) {
      if (
        info[i].informs?.day ==
        (d.getDate() + varDay + key1 > new Date(2022, d.getMonth(), 0).getDate()
          ? d.getDate() +
            varDay +
            key1 -
            new Date(2022, d.getMonth(), 0).getDate()
          : d.getDate() + varDay + key1)
      ) {
        if (info[i].informs.hour == item) {
          if (
            info[i].informs.month ==
            (d.getDate() + varDay + key1 >
            new Date(2022, d.getMonth(), 0).getDate()
              ? d.getMonth() + 1
              : d.getMonth())
          ) {
            return notColor;
          }
        }
      }
    }
    return selectedDay ==
      (d.getDate() + varDay + key1 > new Date(2022, d.getMonth(), 0).getDate()
        ? d.getDate() +
          varDay +
          key1 -
          new Date(2022, d.getMonth(), 0).getDate()
        : d.getDate() + varDay + key1) &&
      selectedHours == item &&
      (d.getDate() + varDay + key1 > new Date(2022, d.getMonth(), 0).getDate()
        ? d.getMonth() + 1
        : d.getMonth()) == selectedMonth
      ? selectedColor
      : hoursColor;
  }

  return (
    <>
      <Box
        display={{ base: "block", md: "none", lg: "none", xl: "none" }}
        w="80vw"
        mx="auto"
        h="70vh"
      >
        <Flex justifyContent="space-between">
          <Box
            alignSelf="center"
            onClick={() =>
              varDay - 2 > 0 ? setVarDay(varDay - size+2) : setVarDay(varDay)
            }
            cursor={varDay - 2 <= 0 ? "not-allowed" : "pointer"}
          >
            <Icon icon="bi:arrow-left-circle" width="30px"></Icon>
          </Box>
          {[...Array(size-2)].map((item, key1) => (
            <Box w="80px" mx="1vw" key={key1} bg="#dadada" borderRadius="8px">
              <Box bg={headColor} w="100%" borderTopRadius="8px">
                <Text textAlign="center" color="white" fontWeight="500">
                  {
                    semana[
                      d.getDay() + 1 + key1 + varDay < 7
                        ? d.getDay() + key1 + varDay
                        : (d.getDay() + key1 + varDay) % 7
                    ]
                  }{" "}
                </Text>
                <Flex justifyContent="space-around">
                  <Text color="white">
                    {d.getDate() + varDay + key1 >
                    new Date(2022, d.getMonth(), 0).getDate()
                      ? d.getDate() +
                        varDay +
                        key1 -
                        new Date(2022, d.getMonth(), 0).getDate()
                      : d.getDate() + varDay + key1}
                  </Text>
                  <Text color="white">
                    {d.getDate() + varDay + key1 >
                    new Date(2022, d.getMonth(), 0).getDate()
                      ? month[d.getMonth() + 1]
                      : month[d.getMonth()]}
                  </Text>
                </Flex>
              </Box>
              <Box>
                {hours.map((item, key) => (
                  <Box
                    key={key}
                    w="65px"
                    h="60px"
                    mx="auto"
                    my=".5vh"
                    borderRadius="8px"
                    cursor={
                      handleColor(key1, item) == notColor
                        ? "not-allowed"
                        : "pointer"
                    }
                    onClick={() => {
                      for (let i = 0; i < info.length; i++) {
                        if (
                          info[i].informs?.day ==
                          (d.getDate() + varDay + key1 >
                          new Date(2022, d.getMonth(), 0).getDate()
                            ? d.getDate() +
                              varDay +
                              key1 -
                              new Date(2022, d.getMonth(), 0).getDate()
                            : d.getDate() + varDay + key1)
                        ) {
                          if (info[i].informs.hour == item) {
                            if (
                              info[i].informs.month - 1 ==
                              (d.getDate() + varDay + key1 >
                              new Date(2022, d.getMonth(), 0).getDate()
                                ? d.getMonth() + 1
                                : d.getMonth())
                            ) {
                              return 0;
                            }
                          }
                        }
                      }
                      selectDay(
                        key1,
                        item,
                        d.getDate() + varDay + key1 >
                          new Date(2022, d.getMonth(), 0).getDate()
                          ? d.getMonth() + 1
                          : d.getMonth()
                      );
                    }}
                    bg={handleColor(key1, item)}
                    _hover={
                      handleColor(key1, item) == notColor
                        ? { background: notColor }
                        : handleColor(key1, item) == selectedColor
                        ? { background: selectedColor }
                        : { background: houverColor }
                    }
                    transition=".2s"
                  >
                    <Text textAlign="center" color="white" pt="4px">
                      {item}
                      {}
                      {":00"} <br />
                      Horas
                    </Text>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
          <Box
            alignSelf="center"
            onClick={() =>
              varDay - 1 > maxDays
                ? setVarDay(varDay)
                : setVarDay(varDay + size-2)
            }
            cursor={varDay - 1 > maxDays ? "not-allowed" : "pointer"}
          >
            <Icon icon="bi:arrow-right-circle" width="30px"></Icon>
          </Box>
        </Flex>
      </Box>
      <Box display={{ base: "none", lg: "block", xl: "block" }}>
        <Flex justifyContent="space-between">
          <Box
            alignSelf="center"
            onClick={() =>
              varDay - 1 > 0 ? setVarDay(varDay - size) : setVarDay(varDay)
            }
            cursor={varDay - 1 == 0 ? "not-allowed" : "pointer"}
          >
            <Icon icon="bi:arrow-left-circle" width="50px"></Icon>
          </Box>
          {[...Array(size)].map((item, key1) => (
            <Box w="80px" mx="20px" key={key1} bg="#dadada" borderRadius="8px">
              <Box bg={headColor} w="100%" borderTopRadius="8px">
                <Text textAlign="center" color="white" fontWeight="500">
                  {
                    semana[
                      d.getDay() + 1 + key1 + varDay < 7
                        ? d.getDay() + key1 + varDay
                        : (d.getDay() + key1 + varDay) % 7
                    ]
                  }{" "}
                </Text>
                <Flex justifyContent="space-around">
                  <Text color="white">
                    {d.getDate() + varDay + key1 >
                    new Date(2022, d.getMonth(), 0).getDate()
                      ? d.getDate() +
                        varDay +
                        key1 -
                        new Date(2022, d.getMonth(), 0).getDate()
                      : d.getDate() + varDay + key1}
                  </Text>
                  <Text color="white">
                    {d.getDate() + varDay + key1 >
                    new Date(2022, d.getMonth(), 0).getDate()
                      ? month[d.getMonth() + 1]
                      : month[d.getMonth()]}
                  </Text>
                </Flex>
              </Box>
              <Box>
                {hours.map((item, key) => (
                  <Box
                    key={key}
                    w="65px"
                    h="60px"
                    mx="10%"
                    my="10%"
                    borderRadius="8px"
                    cursor={
                      handleColor(key1, item) == notColor
                        ? "not-allowed"
                        : "pointer"
                    }
                    onClick={() => {
                      for (let i = 0; i < info.length; i++) {
                        if (
                          info[i].informs?.day ==
                          (d.getDate() + varDay + key1 >
                          new Date(2022, d.getMonth(), 0).getDate()
                            ? d.getDate() +
                              varDay +
                              key1 -
                              new Date(2022, d.getMonth(), 0).getDate()
                            : d.getDate() + varDay + key1)
                        ) {
                          if (info[i].informs.hour == item) {
                            if (
                              info[i].informs.month - 1 ==
                              (d.getDate() + varDay + key1 >
                              new Date(2022, d.getMonth(), 0).getDate()
                                ? d.getMonth() + 1
                                : d.getMonth())
                            ) {
                              return 0;
                            }
                          }
                        }
                      }
                      selectDay(
                        key1,
                        item,
                        d.getDate() + varDay + key1 >
                          new Date(2022, d.getMonth(), 0).getDate()
                          ? d.getMonth() + 1
                          : d.getMonth()
                      );
                    }}
                    bg={handleColor(key1, item)}
                    _hover={
                      handleColor(key1, item) == notColor
                        ? { background: notColor }
                        : handleColor(key1, item) == selectedColor
                        ? { background: selectedColor }
                        : { background: houverColor }
                    }
                    transition=".2s"
                  >
                    <Text textAlign="center" color="white" pt="4px">
                      {item}
                      {}
                      {":00"} <br />
                      Horas
                    </Text>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
          <Box
            alignSelf="center"
            onClick={() =>
              varDay - 1 > maxDays
                ? setVarDay(varDay)
                : setVarDay(varDay + size)
            }
            cursor={varDay - 1 > maxDays ? "not-allowed" : "pointer"}
          >
            <Icon icon="bi:arrow-right-circle" width="50px"></Icon>
          </Box>
        </Flex>
        {/* 
      <Text>
        Reunião as {selectedHours} horas, no dia {selectedDay}, do mes{" "}
        {selectedMonth}
      </Text> */}
      </Box>
    </>
  );
}
