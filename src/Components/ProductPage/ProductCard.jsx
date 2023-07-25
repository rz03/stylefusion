import React from "react";
import { Card, CardBody, Image, Text, Stack } from "@chakra-ui/react";

const ProductCard = ({ name, price, img }) => {
  return (
    <div>
      <Card maxW="sm" shadow="none">
        <CardBody>
          <Image
            width="267px"
            height="334px"
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
          />
          <Stack mt="3" spacing="2.5" color="#373737">
            <Text lineHeight="1.2rem" fontWeight="400">
              {name}
            </Text>
            <Text fontSize="1rem" fontWeight="600">
              ₹ {price}
            </Text>
            <p
              style={{
                // paddingTop: "6px",
                fontSize: "13px",
                fontWeight: "400",
                lineHeight: "1.1rem",
              }}
            >
              BUY 2 SHIRTS SAVE 10% <br /> BUY 3 SHIRTS SAVE 15% <br /> BUY 4
              SHIRTS SAVE 20%
            </p>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;
