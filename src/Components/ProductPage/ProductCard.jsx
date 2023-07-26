import React from "react";
import { Card, CardBody, Image, Text, Stack } from "@chakra-ui/react";

const ProductCard = ({ name, price, img }) => {
  // console.log(img);
  return (
    <div>
      <Card maxW="sm" shadow="none">
        <CardBody>
          <Image width="17rem" src={img} alt={name} />
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
