import { createSystem, defaultConfig } from "@chakra-ui/react"

export const system = createSystem(defaultConfig, {
  theme: {
    semanticTokens: {
      colors: {
        bg: {
          default: { value: "gray.50" },
          _dark: { value: "gray.700" },
        },
        "bg.subtle": {
          default: { value: "gray.100" },
          _dark: { value: "gray.700" },
        },
        fg: {
          default: { value: "gray.800" },
          _dark: { value: "gray.100" },
        },
        brand: {
          default: { value: "purple.500" },
          _dark: { value: "purple.300" },
        },
      },
    },
  },
})
