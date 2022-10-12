import {
  Container,
  Flex,
  Box,
  Heading,
  Stack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  Button,
  InputRightElement,
} from "@chakra-ui/react";
import { BiLink } from "react-icons/bi";

export default function Quote() {
  return (
    <Container maxW={"7xl"}>
      <Flex justifyContent={"space-between"} alignItems="center" py={16}>
        <Box maxW={"400px"}>
          <Heading fontSize={"5xl"}>We Would Love To Help!!!</Heading>
        </Box>
        <Stack spacing={14} maxW="688px">
          <Box rounded={"lg"} boxShadow={"lg"} p={8}>
            <Stack spacing={8}>
              <HStack spacing={8}>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      border={"none"}
                      _focus={{ outline: "none", border: "none" }}
                      boxShadow="md"
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" boxShadow="md" />
                  </FormControl>
                </Box>
              </HStack>
              <HStack spacing={8}>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type="text" boxShadow="md" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Contact Number</FormLabel>
                    <Input type="tel" boxShadow="md" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl>
                <FormLabel>About Project</FormLabel>
                <InputGroup>
                  <Input type="text" boxShadow="md" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="attachment">Attachment</FormLabel>
                <InputGroup>
                  <Input type="file" boxShadow="md" id="attachment" />
                  <InputRightElement>
                    <BiLink />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <HStack justifyContent="center">
                <Button
                  size="lg"
                  bg={"#214462"}
                  _hover={{ bg: "#214462" }}
                  _focus={{ bg: "#214462" }}
                  color="white"
                >
                  Get Free Quote
                </Button>
              </HStack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Container>
  );
}
