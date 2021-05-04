import { Text } from "@chakra-ui/react";

export function LastFound({ slots, time, minutes }) {
  if (slots === 0) {
    return null;
  }

  return (
    <Text fontSize="md" color="blue.700" padding="1rem 0 0">
      {slots} slots were available here at {time} that got booked in less than{" "}
      {minutes} minutes.
    </Text>
  );
}
