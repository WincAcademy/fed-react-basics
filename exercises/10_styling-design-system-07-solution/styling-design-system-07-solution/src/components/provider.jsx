import { ThemeProvider } from 'next-themes'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

export default function Provider({ children }) {
    return (
        <ChakraProvider value={defaultSystem}>
            <ThemeProvider attribute="class" disableTransitionOnChange>
                {children}
            </ThemeProvider>
        </ChakraProvider>
    )
}