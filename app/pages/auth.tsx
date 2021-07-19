import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  Badge,
  Input,
  VisuallyHidden,
  SimpleGrid,
  Button,
  InputGroup,
  InputRightElement,
  Image,
  FormLabel,
  FormControl,
  FormHelperText,
  VStack,
  ButtonGroup,
  Center,
} from "@chakra-ui/react";

export default function Auth() {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={0}
      height="100vh"
      width="100vw"
      _after={{
        opacity: 0.25,
        pos: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: -1,
        content: '" "',
      }}
    >
      <Flex
        direction="column"
        justifyContent="center"
        width="full"
        height="full"
      >
        <Center>
          <VStack spacing={10}>
            <chakra.h1
              mb={6}
              fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              lineHeight="shorter"
            >
              Log In.
            </chakra.h1>
            <Box boxShadow="dark-lg" p="8" rounded="md" bg="white">
              <chakra.form w="full">
                <VStack>
                  <FormControl w="400px" id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" />
                  </FormControl>
                  <FormControl w="400px" id="password">
                    <FormLabel>Password</FormLabel>
                    <Input type="password" />
                  </FormControl>
                  <ButtonGroup width="full" spacing={4}>
                    <Button
                      width="full"
                      type="submit"
                      bgGradient="linear(to-l, #7928CA, #FF0080)"
                      size="md"
                      fontSize="md"
                      mt="30px"
                      color="white"
                      _hover={{
                        bgGradient: "linear(to-l, #7928CA, #FF0080)",
                        boxShadow: "2xl",
                      }}
                    >
                      Sign in
                    </Button>
                  </ButtonGroup>
                </VStack>
              </chakra.form>
            </Box>
          </VStack>
        </Center>
      </Flex>
      <Box
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        w="full"
        h={{ base: 0, md: "full" }}
      ></Box>
    </SimpleGrid>
  );
}
