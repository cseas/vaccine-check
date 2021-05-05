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
  const [thirdPincode, setThirdPincode] = useState(null);

  function firstOnChange(value) {
    if (value >= 110000) {
      setFirstPincode(value);
    }
  }

  function secondOnChange(value) {
    if (value >= 110000) {
      setSecondPincode(value);
    }
  }

  function thirdOnChange(value) {
    if (value >= 110000) {
      setThirdPincode(value);
    }
  }

  return (
    <>
      <Container maxW="container.sm">
        <Text fontSize="3xl" padding="1rem 0" textAlign="center">
          India vaccine centre availability checker
        </Text>

        <form style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div style={{ maxWidth: "10rem" }}>
            <Text fontSize="sm" padding="0.5rem 0">
              1st Pincode
            </Text>
            <NumberInput
              onChange={(valueString, valueNumber) =>
                firstOnChange(valueNumber)
              }
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
          </div>

          <div style={{ maxWidth: "10rem" }}>
            <Text fontSize="sm" padding="0.5rem 0">
              2nd Pincode
            </Text>
            <NumberInput
              onChange={(valueString, valueNumber) =>
                secondOnChange(valueNumber)
              }
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
          </div>

          <div style={{ maxWidth: "10rem" }}>
            <Text fontSize="sm" padding="0.5rem 0">
              3rd Pincode
            </Text>
            <NumberInput
              onChange={(valueString, valueNumber) =>
                thirdOnChange(valueNumber)
              }
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
          </div>
        </form>

        <Results pincode={firstPincode} />
        <Results pincode={secondPincode} />
        <Results pincode={thirdPincode} />

        <Text fontSize="sm" padding="2rem 0">
          <strong>Note:</strong> This utility only checks for vaccination
          centres for age group 18-44 years. This page will automatically
          refresh periodically to check the availability of centres for your
          selected pincodes.
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
          <a href="https://twitter.com/cse_as" rel="noreferrer" target="_blank">
            Abhijeet Singh
          </a>
        </u>
      </Text>
    </>
  );
}
