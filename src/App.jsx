import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <Box display="flex" h="100dvh" justifyContent="center">
      <Text>{count}</Text>
      <Button onClick={increaseCount}>Increase</Button>
      <Button variant="outline" onClick={resetCount}>
        Reset
      </Button>
    </Box>
  );
}

export default App;
