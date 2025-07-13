import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack padding="10px" justifyContent={"space-between"}>
      <Image src={logo} boxSize="60px" />
      <Text fontSize="xl">Navbar</Text>
      <ColorModeSwitch />
    </HStack>
  );
};
export default NavBar;
