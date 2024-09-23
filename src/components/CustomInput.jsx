import React from 'react';
import { Input, useColorMode } from '@chakra-ui/react';

const CustomInput = ({ placeholder, value, onChange }) => {
  const { colorMode } = useColorMode();
  
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      mb={2}
      bg={colorMode === "light" ? "gray.50" : "gray.800"}
      color={colorMode === "light" ? "black" : "white"}
      size="md"
      css={{ position: 'static' }}
    />
  );
};

export default CustomInput;
