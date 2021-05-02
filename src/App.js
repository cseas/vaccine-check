import {
  Container,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useState } from "react";
import { Results } from "./components/Results";

export function App() {
  const [firstPincode, setFirstPincode] = useState(null);
  const [secondPincode, setSecondPincode] = useState(null);

  function firstOnChange(value) {
    if (value >= 110000) {
      setFirstPincode(value);
    }
  }

  function secondOnChange(value) {
    if (value >= 100000) {
      setSecondPincode(value);
    }
  }

  return (
    <>
      <Container maxW="container.sm">
        <Text fontSize="3xl" padding="1rem 0" textAlign="center">
          India vaccine centre availability checker
        </Text>

        <Text fontSize="md" padding="1rem 0">
          First Pincode
        </Text>
        <NumberInput
          onChange={(valueString, valueNumber) => firstOnChange(valueNumber)}
          precision={0}
          step={1}
          min={110000}
          max={999999}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <Text fontSize="md" padding="1rem 0">
          Second Pincode
        </Text>
        <NumberInput
          onChange={(valueString, valueNumber) => secondOnChange(valueNumber)}
          precision={0}
          step={1}
          min={110000}
          max={999999}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <Results pincode={firstPincode} />
        <Results pincode={secondPincode} />

        <Text fontSize="md" padding="2rem 0">
          <strong>Note:</strong> This utility only checks if a vaccination
          centre is available with minimum age limit 18.
        </Text>
      </Container>
      <Text
        fontSize="sm"
        textAlign="center"
        marginTop="21rem"
        padding="1rem 0"
        background="gray.100"
      >
        Made by{" "}
        <u>
          <a
            href="https://www.linkedin.com/in/thatniceman"
            rel="noreferrer"
            target="_blank"
          >
            Abhijeet Singh
          </a>
        </u>
      </Text>
    </>
  );
}
