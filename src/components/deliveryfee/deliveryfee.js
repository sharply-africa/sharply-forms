import React from "react";
import { Box, Card, Stack, Text } from "sharply-kit";
import { ReactComponent as MoneyIcon } from "icons/money.svg";

export const DeliveryFee = ({ amount }) => {
  if (typeof amount === "undefined" || amount === null) return null;

  return (
    <Card as={Stack} alignItems="center" spacing={2} direction="row">
      <Box
        alignItems="center"
        display="flex"
        flexShrink={0}
        height={"32px"}
        justifyContent="center"
        sx={{ borderRadius: "50%", overflow: "hidden", position: "relative" }}
        width={"32px"}
      >
        <Box
          backgroundColor="primary"
          sx={{
            height: "100%",
            left: 0,
            opacity: 0.1,
            position: "absolute",
            top: 0,
            width: "100%",
          }}
        />
        <MoneyIcon />
      </Box>

      <Text fontSize="xs">Delivery Fee</Text>

      <Text color="heading" fontWeight="bold">
        {amount}
      </Text>
    </Card>
  );
};
