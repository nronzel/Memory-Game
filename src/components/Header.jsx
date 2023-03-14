import React from "react";
import { Flex, Heading, useColorModeValue, StatGroup } from "@chakra-ui/react";
import ThemeSwitcher from "./ThemeSwitcher";
import Stats from "./Stats";

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
        <StatGroup gap={8}>
          <Stats title="Highscore" stat={score} />
          <Stats title="Round" stat={round} />
        </StatGroup>
        <ThemeSwitcher />
      </Flex>
    </Flex>
  );
}

export default Header;
