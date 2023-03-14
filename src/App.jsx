import { Box, Flex, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [highscore, setHighscore] = useState(0);

  const [round, setRound] = useState(0);

  return (
    <Flex direction="column" h="100dvh">
      <Header score={highscore} round={round} />
      <Spacer />
      <Footer />
    </Flex>
  );
}

export default App;
