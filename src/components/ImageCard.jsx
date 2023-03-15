import React from "react";
import { Image, Box } from "@chakra-ui/react";

function ImageCard({ imgSource, onClick }) {
  return (
    <Box borderRadius="lg" cursor="pointer" as="button">
      <Image
        src={imgSource}
        borderRadius="lg"
        draggable="false"
        selectable="false"
        objectFit="cover"
        onClick={onClick}
        w="150px"
        h="150px"
      />
    </Box>
  );
}

export default ImageCard;
