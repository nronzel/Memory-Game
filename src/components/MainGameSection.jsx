import React, { useEffect } from "react";
import { useState } from "react";
import { Flex, StatGroup } from "@chakra-ui/react";
import ImageCard from "./ImageCard.jsx";
import GameStats from "./GameStats.jsx";

function MainGameSection() {
  const [highscore, setHighscore] = useState(0);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [selectedImage, setSelectedImage] = useState(new Set());
  const [imageList, setImageList] = useState([]);

  const imageLinks = [
    "/images/patrick.png",
    "/images/gary.png",
    "/images/mr-krabs.png",
    "/images/spongebob.png",
    "/images/squidward.png",
    "/images/karen.png",
    "/images/mrs-puff.png",
    "/images/pearl.png",
    "/images/sandy.png",
    "/images/plankton.png",
    "/images/flying-dutchman.png",
    "/images/grandma.png",
    "/images/king-neptune.png",
    "/images/larry.png",
    "/images/squilliam.png",
  ];

  useEffect(() => {
    setImageList(getRandomImagesForRound(round));
  }, [round]);

  const handleImageClick = (e) => {
    const imageSource = e.target.attributes.src.value;

    if (selectedImage.has(imageSource)) {
      alert("Game Over!");
      setHighscore(score);
      setScore(0);
      setSelectedImage(() => new Set());
      setRound(1);
    } else {
      handleScoreIncrease();
      setImageList((prev) => shuffleArray(prev));
      setSelectedImage((prev) => new Set(prev).add(imageSource));

      if (selectedImage.size + 1 === imageList.length) {
        setSelectedImage(() => new Set());
        if (round === 1) {
          setRound(2);
        } else if (round === 2) {
          setRound(3);
        } else {
          alert("You win!");
          setRound(1);
        }
      }
    }
  };

  const handleScoreIncrease = () => {
    setScore(score + 1);
  };

  const getRandomImagesForRound = (roundNum) => {
    let numOfImages = roundNum === 1 ? 5 : roundNum === 2 ? 10 : 15;
    return getRandomImages(numOfImages, imageLinks);
  };

  const getRandomImages = (numOfImages, arrayOfImages) => {
    const result = [];
    const usedIndices = new Set();

    while (result.length < numOfImages) {
      const randomIndex = Math.floor(Math.random() * arrayOfImages.length);

      if (!usedIndices.has(randomIndex)) {
        result.push(arrayOfImages[randomIndex]);
        usedIndices.add(randomIndex);
      }
    }

    return result;
  };

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  return (
    <>
      <Flex justifyContent="center">
        <StatGroup gap="5rem" mt={3}>
          <GameStats title="Score" stat={score} highscore={highscore} />
          <GameStats title="Round" stat={round} />
        </StatGroup>
      </Flex>
      <Flex flexWrap="wrap" gap={10} justifyContent="center" mt={10}>
        {imageList.map((img, index) => (
          <ImageCard
            key={index}
            id={index}
            imgSource={img}
            onClick={handleImageClick}
          />
        ))}
      </Flex>
    </>
  );
}

export default MainGameSection;
