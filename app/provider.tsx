// app/providers.tsx
'use client'

import { ChakraProvider ,extendTheme} from '@chakra-ui/react'
const customTheme=extendTheme({
  styles:{
    global:{
      body:{
        bg:'black',
        color:'white'
      }
    }
  }
})

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
}