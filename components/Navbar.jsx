import {
  Container,
  Flex,
  Box,
  HStack,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box backgroundColor="#214462">
      <Container maxW={"7xl"}>
        <Flex py={5} justifyContent={"space-between"} alignItems="center">
          <Box>
            <Heading color="white" fontSize="3xl">
              Consult Anubhav
            </Heading>
          </Box>
          <HStack alignItems="center">
            <HStack spacing={8} mr={10} alignItems="center">
              <Text fontSize={"xl"} fontWeight="bold" color={"white"}>
                Services
              </Text>
              <Text fontSize={"xl"} fontWeight="bold" color={"white"}>
                Blog
              </Text>
              <Text fontSize={"xl"} fontWeight="bold" color={"white"}>
                About
              </Text>
            </HStack>
            <Button
              variant={"outline"}
              fontSize="xl"
              fontWeight={"bold"}
              color="#02CFAA"
              colorScheme={"#02CFAA"}
            >
              Contact
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
