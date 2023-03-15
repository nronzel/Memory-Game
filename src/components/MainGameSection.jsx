import React from "react";
import { useState } from "react";
import { Flex, Box, StatGroup } from "@chakra-ui/react";
import ImageCard from "./ImageCard.jsx";
import GameStats from "./GameStats.jsx";

function MainGameSection() {
  const [highscore, setHighscore] = useState(0);

  const [round, setRound] = useState(1);

  return (
    <>
      <Flex justifyContent="center">
        <StatGroup gap="5rem" mt={3}>
          <GameStats title="Highscore" stat={highscore} />
          <GameStats title="Round" stat={round} />
        </StatGroup>
      </Flex>
      <Flex flexWrap="wrap" w="80%" gap={10} justifyContent="center" mt={10}>
        <ImageCard imgSource="/images/patrick.png" />
        <ImageCard imgSource="/images/gary.png" />
      </Flex>
    </>
  );
}

export default MainGameSection;
