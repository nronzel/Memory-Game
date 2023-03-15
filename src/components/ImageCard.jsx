import React from "react";
import { Card, Image, Box } from "@chakra-ui/react";

function ImageCard({ imgSource }) {
  return (
    <Box h="200px" w="150px">
      <Card>
        <Image
          src={imgSource}
          objectFit="cover"
          alt="card image"
          borderRadius={10}
        />
      </Card>
    </Box>
  );
}

export default ImageCard;
