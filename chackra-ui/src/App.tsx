import './App.css'
import CardChakra from './components/Card'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <>
    <ChakraProvider>
      <CardChakra/>
    </ChakraProvider>
    </>
  )
}

export default App
