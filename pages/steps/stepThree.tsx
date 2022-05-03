import { Box, Button, Flex, Input, InputGroup, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

type stepThreeProps = {
  progress: number;
  step: number;
};
export default function StepeThree({ progress, step }: stepThreeProps) {
  const [info, setInfo] = useState<any>([]);
  function handlePushDB() {
    axios.get("/api/read").then((resp) => {
      setInfo(resp.data.result);
    });
  }
  return (
    <Box my="3%" display={progress == step ? "Flex" : "none"}>
      <Text> passo Três</Text>
      <Button onClick={handlePushDB}> Banco de dados</Button>
      <Text>
        {info.map((item: any) => (
          <Text key="">{item.email}</Text>
        ))}
      </Text>
    </Box>
  );
}
