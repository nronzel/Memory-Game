import { StatLabel, StatNumber, Stat } from "@chakra-ui/react";
import React from "react";

function GameStats({ title, stat }) {
  return (
    <Stat textAlign="center">
      <StatLabel fontSize="lg">{title}</StatLabel>
      <StatNumber fontSize="3xl">{stat}</StatNumber>
    </Stat>
  );
}

export default GameStats;
