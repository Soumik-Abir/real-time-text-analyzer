import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Switch,
  useColorMode,
  Collapse,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      bg={colorMode === "light" ? "gray.300" : "gray.900"}
      px={4}
      w="100%"
      position="fixed"
      top="0"
      zIndex="1"
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        mx="auto"
      >
        <Text fontSize="xl" fontWeight="bold">
          <Link to="/">{props.title}</Link>
        </Text>
        <Flex alignItems="center">
          <Stack
            direction="row"
            spacing={7}
            display={{ base: "none", md: "flex" }}
            alignItems="center"
          >
            <Button
             colorScheme='gray'
            >
              <Link to="/">Home</Link>
            </Button>
            <Button
                colorScheme='gray'
            >
              <Link to="/about">{props.aboutText}</Link>
            </Button>
            <Switch
              colorScheme="blue"
              isChecked={colorMode === "light"}
              onChange={toggleColorMode}
            />
            <Text>{colorMode === "light" ? "Dark" : "Light"} Mode</Text>
          </Stack>
          <Button
            display={{ md: "none" }}
            onClick={handleToggle}
            aria-label="Toggle Navigation"
            variant="ghost"
          >
            <HamburgerIcon boxSize={8}/>
          </Button>
        </Flex>
      </Flex>
      <Collapse in={isOpen}>
        <Flex direction="column" mt={2} display={{ md: "none" }} pb={2}>
          <Flex alignItems="flex-start" flexDir="column">
            <Button
              variant="link"
              color={colorMode === "light" ? "gray.800" : "white"}
              onClick={handleToggle}
              mb={2}
            >
              <Link to="/">Home</Link>
            </Button>
            <Button
              variant="link"
              color={colorMode === "light" ? "gray.800" : "white"}
              onClick={handleToggle}
              mb={2}
            >
              <Link to="/about">{props.aboutText}</Link>
            </Button>
          </Flex>
          <Flex alignItems="center" justifyContent="space-between" mb={2}>
            <Text color={colorMode === "light" ? "gray.800" : "white"}>
              {colorMode === "light" ? "Dark" : "Light"} Mode
            </Text>
            <Switch
              colorScheme="teal"
              isChecked={colorMode === "dark"}
              onChange={toggleColorMode}
            />
          </Flex>
        </Flex>
      </Collapse>
    </Box>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
