import React from "react"
import ReactDOM from "react-dom/client"
import { ChakraProvider } from "@chakra-ui/react"
import { ColorModeProvider } from "@/components/ui/color-mode"
import { system } from "./theme"
import App from "./App"

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <ChakraProvider value={system}>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </ChakraProvider>
  </React.StrictMode>
)
