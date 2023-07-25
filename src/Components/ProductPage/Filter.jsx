import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Checkbox,
  CheckboxGroup,
  Stack,
} from "@chakra-ui/react";

const Filter = () => {
  return (
    <div>
      <Accordion border="white">
        <AccordionItem>
          <h2>
            <AccordionButton
              _expanded={{
                borderBlockEnd: "1px solid black",
              }}
              padding="15px 30px 15px 20px"
            >
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight="600"
                fontSize="0.9rem"
              >
                SHIRT FIT
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} px="20px" fontSize="14px" lineHeight="1.8rem">
            <CheckboxGroup colorScheme="gray">
              <Stack spacing="1" direction="column">
                <Checkbox value="naruto">CLASSIC FIT</Checkbox>
                <Checkbox value="sasuke">SLIM FIT</Checkbox>
                <Checkbox value="kakashi">EXTRA SLIM FIT</Checkbox>
              </Stack>
            </CheckboxGroup>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton
              _expanded={{
                borderBlockEnd: "1px solid black",
              }}
              padding="15px 30px 15px 20px"
            >
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight="600"
                fontSize="0.9rem"
              >
                SHIRT SIZE
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} px="20px" fontSize="14px" lineHeight="1.8rem">
            <CheckboxGroup colorScheme="gray">
              <Stack spacing="1" direction="column">
                <Checkbox value="naruto">XS</Checkbox>
                <Checkbox value="sasuke">S</Checkbox>
                <Checkbox value="kakashi">M</Checkbox>
                <Checkbox value="kakashi">L</Checkbox>
                <Checkbox value="kakashi">XL</Checkbox>
                <Checkbox value="kakashi">XXL</Checkbox>
              </Stack>
            </CheckboxGroup>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton
              _expanded={{
                borderBlockEnd: "1px solid black",
              }}
              padding="15px 30px 15px 20px"
            >
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight="600"
                fontSize="0.9rem"
              >
                COLOUR
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} px="20px" fontSize="14px" lineHeight="1.8rem">
            <CheckboxGroup colorScheme="gray">
              <Stack spacing="1" direction="column">
                <Checkbox value="naruto">BLACK</Checkbox>
                <Checkbox value="naruto">WHITE</Checkbox>
                <Checkbox value="sasuke">BLUE</Checkbox>
                <Checkbox value="kakashi">BROWN</Checkbox>
                <Checkbox value="kakashi">CREAM</Checkbox>
                <Checkbox value="kakashi">GREEN</Checkbox>
                <Checkbox value="kakashi">GREY</Checkbox>
              </Stack>
            </CheckboxGroup>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Filter;
