import React, { useState } from 'react';
import { Box, Textarea, Text, Heading, Input, Button, Flex, useColorMode } from '@chakra-ui/react';

const Home = () => {
  const [text, setText] = useState('');
  const [target, setTarget] = useState('');
  const [replacement, setReplacement] = useState('');
  const { colorMode } = useColorMode();

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;
  const charCount = text.length;

  const handleReplaceClick = () => {
    const newText = text.split(target).join(replacement);
    setText(newText);
  };

  return (
    <Box p={5} mt={16} w="100%" mx="auto">
      <Heading as="h1" mb={4} textAlign="left">
        Real-Time Text Analysis
      </Heading>
      <Box
        bg={colorMode === "light" ? "white" : "gray.700"}
        p={4}
        borderRadius="md"
        boxShadow="md"
        w="100%"
      >
        <Textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Enter your text here..."
          size="lg"
          rows={9}
          bg={colorMode === "light" ? "gray.50" : "gray.800"}
          color={colorMode === "light" ? "black" : "white"}
          w="100%"
          p={4}
          css={{ position: 'static' }}
        />
        <Flex
          mt={4}
          justify="space-between"
          direction={{ base: 'column', md: 'row' }} 
          gap={4} 
        >
          <Box mb={{ base: 4, md: 0 }}> 
            <Text color={colorMode === "light" ? "black" : "white"} fontSize="lg">
              Word Count: {wordCount}
            </Text>
            <Text color={colorMode === "light" ? "black" : "white"} fontSize="lg">
              Character Count: {charCount}
            </Text>
          </Box>
          <Box>
            <Input
              placeholder="Target string"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              mb={2}
              bg={colorMode === "light" ? "gray.50" : "gray.800"}
              color={colorMode === "light" ? "black" : "white"}
              size="md"
              css={{ position: 'static' }}
            />
            <Input
              placeholder="Replacement string"
              value={replacement}
              onChange={(e) => setReplacement(e.target.value)}
              mb={2}
              bg={colorMode === "light" ? "gray.50" : "gray.800"}
              color={colorMode === "light" ? "black" : "white"}
              size="md"
              css={{ position: 'static' }}
            />
            <Button onClick={handleReplaceClick} colorScheme="teal" size="md">
              Replace
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;