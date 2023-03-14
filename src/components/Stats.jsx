import { StatLabel, StatNumber, Stat } from "@chakra-ui/react";
import React from "react";

function Stats({ title, stat }) {
  return (
    <Stat textAlign="center">
      <StatLabel>{title}</StatLabel>
      <StatNumber>{stat}</StatNumber>
    </Stat>
  );
}

export default Stats;
