import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"600"} fontSize="0.9rem" color="#001f49">
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box px="20">
      <Container as={Stack} maxW={"6xl"} py={10} px="">
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack
            align={"flex-start"}
            fontSize="0.75rem"
            color="#5e5e5e"
            fontWeight="100"
          >
            <ListHeader>HELP</ListHeader>
            <Box as="a" href={"#"}>
              FAQS
            </Box>
            <Box as="a" href={"#"}>
              SHIPPING
            </Box>
            <Box as="a" href={"#"}>
              RETURNS
            </Box>
            <Box as="a" href={"#"}>
              SIZE GUIDES
            </Box>
            <Box as="a" href={"#"}>
              SHIRT MULTIBUY
            </Box>
            <Box as="a" href={"#"}>
              CONTACT US
            </Box>
            <Box as="a" href={"#"}>
              <br />
            </Box>
            <Box as="a" href={"#"}>
              CALL US: +44 20 8174 4100
            </Box>
          </Stack>

          <Stack
            align={"flex-start"}
            fontSize="0.75rem"
            color="#5e5e5e"
            fontWeight="100"
          >
            <ListHeader>LEGAL</ListHeader>
            <Box as="a" href={"#"}>
              TERMS AND CONDITIONS
            </Box>
            <Box as="a" href={"#"}>
              PRIVACY POLICY
            </Box>
            <Box as="a" href={"#"}>
              COOKIE POLICY
            </Box>
            <Box as="a" href={"#"}>
              ACCESSIBILITY STATEMENT
            </Box>
            <Box as="a" href={"#"}>
              CARBON NEUTRALITY STATEMENT
            </Box>
            <Box as="a" href={"#"}>
              ETHICAL TRADING POLICY
            </Box>
            <Box as="a" href={"#"}>
              MODERN SLAVERY STATEMENT
            </Box>
          </Stack>

          <Stack
            align={"flex-start"}
            fontSize="0.75rem"
            color="#5e5e5e"
            fontWeight="100"
          >
            <ListHeader>MORE INFO</ListHeader>
            <Box as="a" href={"#"}>
              ABOUT US
            </Box>
            <Box as="a" href={"#"}>
              CAREERS
            </Box>
            <Box as="a" href={"#"}>
              DOING THING PROPERLY
            </Box>
          </Stack>

          <Stack align={"flex-start"}>{/* SOCIAL MEDIA ICONS */}</Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>© 2023 Style Fusion Shirts Ltd.</Text>
        </Container>
      </Box>
    </Box>
  );
}
