import React, { useState, useEffect } from 'react'; // Import useEffect to manage side effects
import { Box, Textarea, Text, Heading, Button, Flex, useColorMode } from '@chakra-ui/react';
import CustomInput from './CustomInput'; 

const Home = () => {
  
  const [text, setText] = useState(() => localStorage.getItem('text') || ''); 
  const [target, setTarget] = useState('');
  const [replacement, setReplacement] = useState('');
  const [highlightedText, setHighlightedText] = useState(() => localStorage.getItem('highlightedText') || '');
  const { colorMode } = useColorMode();

  
  useEffect(() => {
    localStorage.setItem('text', text);
    localStorage.setItem('highlightedText', highlightedText);
  }, [text, highlightedText]);

  const handleTextChange = (event) => {
    setText(event.target.value);
    setHighlightedText(event.target.value); 
  };

  const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;
  const uniqueWordCount = new Set(
    text.toLowerCase().trim().split(/\s+/).filter(word => word.length > 0)
  ).size;
  const charCount = text.length;

  const handleReplaceClick = () => {
    if (!text.includes(target)) {
      alert("Input target string not found");
      return;
    }

    const regex = new RegExp(target, 'g');
    const newText = text.replace(regex, replacement);
    
    setHighlightedText(newText.replace(
      new RegExp(replacement, 'g'),
      (match) => `<span style="background-color: #FFD700">${match}</span>`
    ));
    setText(newText);
    setTarget('');
    setReplacement('');
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
              Unique Word Count: {uniqueWordCount}
            </Text>
            <Text color={colorMode === "light" ? "black" : "white"} fontSize="lg">
              Character Count: {charCount}
            </Text>
          </Box>
          <Box>
            <CustomInput
              placeholder="Target string"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
            />
            <CustomInput
              placeholder="Replacement string"
              value={replacement}
              onChange={(e) => setReplacement(e.target.value)}
            />
            <Button onClick={handleReplaceClick} colorScheme="teal" size="md">
              Replace
            </Button>
          </Box>
        </Flex>
        <Box mt={4}>
          <Heading as="h2" mb={2}>
            Preview
          </Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: highlightedText
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;