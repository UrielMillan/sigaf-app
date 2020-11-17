import { ChakraProvider } from "@chakra-ui/react"
import Dashboard from './pages/dashboard';
import Signin from "./pages/signin";
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Signin />
    </ChakraProvider>
  );
}

export default App;
