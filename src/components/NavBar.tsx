import { HStack, Image, Text, Box } from "@chakra-ui/react"
import { ColorModeButton } from "@/components/ui/color-mode"
import logo from "../assets/logo.webp"

const NavBar = () => {
  return (
    <HStack
      justify="space-between"
      px={4}
      py={3}
      bg="bg.subtle"
      borderBottomWidth="1px"
    >
      <HStack>
        <Image src={logo} boxSize="40px" />
        <Text fontSize="xl" fontWeight="bold">
          GameHub
        </Text>
      </HStack>

      <ColorModeButton />
    </HStack>
  )
}

export default NavBar
