import React from "react";
import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import ThemeSwitcher from "./ThemeSwitcher";

function Header({ score, round }) {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      p={2}
      borderBottom="1px solid"
      bgColor={useColorModeValue("blue.200", "blue.900")}
    >
      <Flex w="80%" justifyContent="space-between" alignItems="center">
        <Heading>Memory Game</Heading>

        <ThemeSwitcher />
      </Flex>
    </Flex>
  );
}

export default Header;
