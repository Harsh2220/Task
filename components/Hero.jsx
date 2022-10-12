import {
  Container,
  Flex,
  Box,
  Heading,
  SimpleGrid,
  Text,
  Button,
  Img,
  Center,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box position={"relative"}>
      <Box position={"absolute"} top="0" w="full">
        <svg
          width="100%"
          height="600"
          viewBox="0 0 1400 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1463.19 -600C1463.19 62.7417 940.86 600 296.528 600C-347.804 600 -870.139 62.7417 -870.139 -600C-870.139 -1262.74 -347.804 -1800 296.528 -1800C940.86 -1800 1463.19 -1262.74 1463.19 -600ZM-753.472 -600C-753.472 -3.53247 -283.371 480 296.528 480C876.427 480 1346.53 -3.53247 1346.53 -600C1346.53 -1196.47 876.427 -1680 296.528 -1680C-283.371 -1680 -753.472 -1196.47 -753.472 -600Z"
            fill="#F4F8FB"
          />
        </svg>
      </Box>
      <Box position={"absolute"} top="0" w="full">
        <svg
          width="100%"
          height="784"
          viewBox="0 0 1400 784"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2255.56 -816C2255.56 67.6556 1559.11 784 700 784C-159.11 784 -855.556 67.6556 -855.556 -816C-855.556 -1699.66 -159.11 -2416 700 -2416C1559.11 -2416 2255.56 -1699.66 2255.56 -816ZM-700 -816C-700 -20.71 -73.1988 624 700 624C1473.2 624 2100 -20.71 2100 -816C2100 -1611.29 1473.2 -2256 700 -2256C-73.1988 -2256 -700 -1611.29 -700 -816Z"
            fill="#F0FFFC"
          />
        </svg>
      </Box>
      <Center minH={"100vh"}>
        <SimpleGrid columns={2} spacingX="60px" mx={"52"} zIndex="1">
          <Box my="auto">
            <Heading fontSize={"5xl"}>
              Get your business challenges solved
            </Heading>
            <Text mt={6} fontSize="2xl">
              We provide solutions through our consulting, marketing and web
              development skills for long-term profitability.
            </Text>
            <Button
              bg="#214462"
              size="lg"
              color="#02CFAA"
              _hover={{ bg: "#214462" }}
              _focus={{ bg: "#214462" }}
              rounded="lg"
              fontSize={"xl"}
              mt={12}
            >
              Get in touch
            </Button>
          </Box>
          <Box>
            <Img src="hero.png" />
          </Box>
        </SimpleGrid>
      </Center>
    </Box>
  );
}
