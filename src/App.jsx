import { Flex, Spacer } from "@chakra-ui/react";

import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import MainGameSection from "./components/MainGameSection.jsx";

function App() {
  return (
    <Flex direction="column" h="100dvh">
      <Header />
      <MainGameSection />
      <Spacer />
      <Footer />
    </Flex>
  );
}

export default App;
