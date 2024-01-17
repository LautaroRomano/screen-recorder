import { ChakraProvider } from '@chakra-ui/react'
import Landing from './components/Landing';

function App() {
  return (
    <ChakraProvider>
      <Landing />
    </ChakraProvider>
  )
}

export default App;
