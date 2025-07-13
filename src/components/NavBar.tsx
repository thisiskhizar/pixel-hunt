import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <Text fontSize="xl">
        Navbar
      </Text>
    </HStack>
  );
};
export default NavBar;
