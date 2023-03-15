import { StatLabel, StatNumber, Stat, StatHelpText } from "@chakra-ui/react";
import React from "react";

function GameStats({ title, stat, highscore }) {
  return (
    <Stat textAlign="center">
      <StatLabel fontSize="lg">{title}</StatLabel>
      <StatNumber fontSize="3xl">{stat}</StatNumber>
      {highscore ? <StatHelpText>{`Best: ${highscore}`}</StatHelpText> : null}
    </Stat>
  );
}

export default GameStats;
