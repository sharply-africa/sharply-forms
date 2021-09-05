import React, { useRef } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Card,
  Flex,
  FormError,
  FormGroup,
  Input,
  Label,
  Stack,
  Text,
} from "skylos-ui";
import { useClickAway, useModal } from "./hooks";

export const PricePicker = ({
  error,
  getPrice,
  label,
  name,
  onChange,
  pricelists,
  value,
}) => {
  const ref = useRef(null);
  const { isOpen, toggleModal, closeModal } = useModal();

  useClickAway(ref, () => {
    if (isOpen) closeModal();
  });

  const selectedPrice = getPrice(value);

  return (
    <Box sx={{ position: "relative" }} ref={ref}>
      <FormGroup>
        <Label htmlFor={name}>{label}</Label>
        <Box onClick={toggleModal}>
          <Input
            id={name}
            name={name}
            placeholder="Select Area"
            value={
              value
                ? `${selectedPrice?.from?.name} - ${selectedPrice?.to?.name}`
                : ""
            }
            readOnly
          />
        </Box>
        <FormError error={error} />
      </FormGroup>

      {isOpen && (
        <Stack
          alignItems="stretch"
          as={Card}
          flexDirection="column"
          spacing={3}
          sx={{
            boxShadow: "0px 1px 2px #E7ECE8",
            left: 0,
            maxHeight: "30rem",
            position: "absolute",
            top: "calc(100% +  0.4rem)",
            zIndex: 10,
            overflow: "auto",
          }}
          width="100%"
        >
          {!Boolean(pricelists.length) && (
            <Flex
              alignItems="center"
              justifyContent="center"
              py={3}
              flexDirection="column"
            >
              <Text textAlign="center" variant="thickText">
                No delivery areas available
              </Text>
            </Flex>
          )}

          {pricelists.map((price) => (
            <Box
              key={price._id}
              sx={{
                alignItems: "flex-start",
                cursor: "pointer",
                display: "grid",
                gridGap: 2,
                gridTemplateColumns: "1fr auto 1fr",
              }}
              onClick={() => {
                onChange(price._id);
                closeModal();
              }}
            >
              <Box>
                <Text color="heading">{price.from.name}</Text>
                <Text color="heading" fontSize="xxs">
                  {price.from.coverage}
                </Text>
              </Box>

              <Box pt={5}>
                <Box width="13px" height="1px" backgroundColor="heading" />
              </Box>

              <Box>
                <Text color="heading">{price.to.name}</Text>
                <Text color="heading" fontSize="xxs">
                  {price.to.coverage}
                </Text>
              </Box>

              <Text fontWeight="medium" color="heading">
                {price.name}
              </Text>
              <Text fontSize="xs">{price.coverage}</Text>
            </Box>
          ))}
        </Stack>
      )}
    </Box>
  );
};

PricePicker.propTypes = {
  getPrice: PropTypes.func,
  error: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  pricelists: PropTypes.array,
  value: PropTypes.string.isRequired,
};

PricePicker.defaultProps = {
  getPrice: () => {},
  label: "Delivery Area",
  name: "deliveryArea",
  pricelists: [],
};
