import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  Img,
} from "@chakra-ui/react";

export default function Testimonials() {
  return (
    <Container maxW={"7xl"}>
      <Flex
        justifyContent={"space-between"}
        alignItems="center"
        pb={16}
        pt={32}
      >
        <Box maxW={"400px"}>
          <Heading fontSize={"5xl"}>Look What our clients say</Heading>
        </Box>
        <Stack
          maxW="680px"
          alignItems={"center"}
          px={12}
          py={8}
          rounded="lg"
          boxShadow={"lg"}
        >
          <Box boxSize={"200px"} mt={"-28"}>
            <Img
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
              w="full"
              h="full"
              rounded="lg"
              objectFit={"cover"}
            />
          </Box>
          <Box pt={7} pb={12}>
            <Text textAlign={"center"} fontSize="3xl" fontWeight={"semibold"}>
              Cheng-Han Lee
            </Text>
            <Text
              textAlign={"center"}
              mt="6"
              fontSize={"2xl"}
              fontWeight="medium"
              lineHeight={7}
              color="gray.600"
            >
              Regional Controlling & Planning Process Lead at Hitachi Energy
            </Text>
          </Box>
          <Text
            fontSize={"2xl"}
            textAlign="center"
            lineHeight={7}
          >
            I had the pleasure and opportunity to work with Anubhav at Upgrad.
            Anubhav demonstrated the ability to leverage his expertise to
            quickly ramp up on technical challenging projects and immediately
            established himself as one of the most technically capable members
            on the team. Also Anubhav was a great team player. He was willing to
            help other team members whenever they needed help, and he always did
            so with a smile. With this said, I can confidently recommend Anubhav
            to any company looking to hire a collaborative and technically
            strong contributor.
          </Text>
        </Stack>
      </Flex>
    </Container>
  );
}
