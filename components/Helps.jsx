import {
  Container,
  Flex,
  Box,
  HStack,
  Button,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";

const data = [
  {
    heading: "Launching A Product",
    description:
      "We have assisted several entrepreneurs from around the world in launching their first products.",
  },
  {
    heading: "Improving A Product",
    description:
      "We are experts at diagnosing products and making actionable changes to meet business objectives!",
  },
  {
    heading: "Consulting",
    description:
      "We provide strategy development, large scale implementation, process optimization, and new technology introduction.",
  },
];

export default function Helps() {
  return (
    <Container maxW={"7xl"}>
      <Flex justifyContent={"space-between"} alignItems="center" py={16}>
        <Box maxW={"400px"}>
          <Heading fontSize={"5xl"}>We Help Businesses In</Heading>
        </Box>
        <Stack spacing={14} maxW="693px">
          {data.map((el, index) => (
            <Box key={index} py={6} px={12} boxShadow="lg" rounded={"xl"}>
              <Heading fontSize="3xl" textAlign={"center"}>
                {el.heading}
              </Heading>
              <Text fontSize="2xl" textAlign={"center"} mt={4}>
                {el.description}
              </Text>
            </Box>
          ))}
        </Stack>
      </Flex>
    </Container>
  );
}
