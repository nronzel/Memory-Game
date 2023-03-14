import React from "react";
import { Flex, Heading, Button, useColorMode } from "@chakra-ui/react";
import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      p={2}
      borderBottom="1px solid"
    >
      <Flex w="80%" justifyContent="space-between" alignItems="center">
        <Heading>Memory Game</Heading>
        <ThemeSwitcher />
      </Flex>
    </Flex>
  );
}

export default Header;
