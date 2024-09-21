import React from 'react';
import { Box, Text, Heading, useColorMode } from '@chakra-ui/react';

const About = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      p={5}
      bg={colorMode === "light" ? "white" : "rgb(40 80 110)"}
      color={colorMode === "light" ? "gray.800" : "white"}
      minHeight="100vh"
      mt={16}
      pt={4}
    >
      <Heading as="h1" mb={4} textAlign="center">
        About This App
      </Heading>
      <Text fontSize="lg" textAlign="justify">
        Welcome to the Real-Time Text Analyzer and String Replacement Tool! This app is designed to help you analyze text input in real-time and perform dynamic string replacements with ease. Whether you're editing content, analyzing text, or just looking for a quick way to process your writing, this tool offers the following key features:
      </Text>
      <Text fontSize="lg" mt={4} mb={2} textAlign="center">
        <strong>Unique Word Count:</strong> Get the total number of unique words in your text, regardless of case.
      </Text>
      <Text fontSize="lg" mb={2} textAlign="center">
        <strong>Character Count (Excluding Spaces & Punctuation):</strong> See the number of characters entered, focusing only on letters and numbers.
      </Text>
      <Text fontSize="lg" textAlign="center">
        <strong>Dynamic String Replacement:</strong> Replace any string with another, using simple input fields to specify the target and replacement.
      </Text>
      <Text fontSize="lg" mt={4} textAlign="justify">
        With an intuitive and responsive design, this tool helps you streamline your text analysis, and for added functionality, any words replaced can be highlighted for easy identification.
      </Text>
      <Text fontSize="lg" mt={4} textAlign="center">
        Feel free to explore and make the most of these features!
      </Text>
    </Box>
  );
};

export default About;
