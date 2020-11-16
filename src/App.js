import { ChakraProvider } from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <div>
        <IconButton aria-label="Search database" icon={<SearchIcon />} />
      </div>
    </ChakraProvider>
  );
}

export default App;
