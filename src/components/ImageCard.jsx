import React from "react";
import { Image, Box } from "@chakra-ui/react";

function ImageCard({ imgSource }) {
  return (
    <Box w="150px" cursor="pointer">
      <Image
        src={imgSource}
        objectFit="cover"
        alt="Box image"
        borderRadius={10}
        // sx={{ filter: "blur(5px)" }}
      />
    </Box>
  );
}

export default ImageCard;
