import {
  Container,
  Flex,
  Box,
  Heading,
  SimpleGrid,
  Img,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Clients() {
  const [CompanyData, setCompanyData] = useState("");

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/search/photos?query=logo&client_id=jYksj86D3jcLdIxFq6tSZ7ZGHMW5MBEQojUp_bzvQKA&per_page=18&page=1"
    )
      .then((res) => res.json())
      .then((data) => setCompanyData(data.results));
  }, []);

  console.log(CompanyData);
  return (
    <Container maxW={"7xl"}>
      <Flex justifyContent={"space-between"} alignItems="center" py={16}>
        <Box maxW={"400px"}>
          <Heading fontSize={"5xl"}>Our Clients</Heading>
        </Box>
        <SimpleGrid columns={3} spacing="32px" maxW="693px">
          {CompanyData &&
            CompanyData.map((company, index) => (
              <Box
                key={index}
                width="200px"
                height="100px"
                rounded={"lg"}
                boxShadow="lg"
              >
                <Img
                  src={company.urls.raw}
                  w="full"
                  h="full"
                  objectFit={"contain"}
                />
              </Box>
            ))}
        </SimpleGrid>
      </Flex>
    </Container>
  );
}
