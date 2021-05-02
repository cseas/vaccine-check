import { useQuery } from "react-query";
import { CircularProgress, Text } from "@chakra-ui/react";
import { getLocationsByPincode } from "../api";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";

const MIN_AGE_LIMIT = 18;

function getAvailableLocations(centers) {
  let availableLocations = [];
  for (let center of centers) {
    for (let session of center.sessions) {
      if (
        session.min_age_limit === MIN_AGE_LIMIT &&
        session.available_capacity > 0
      ) {
        availableLocations.push({
          location: center.name,
          date: session.date,
          slots: session.available_capacity,
        });
      }
    }
  }
  return availableLocations;
}

export function Results({ pincode }) {
  const { data, isLoading, isError, error } = useQuery(
    ["locations", pincode],
    () => getLocationsByPincode(pincode),
    {
      refetchInterval: 15 * 60 * 1000, // 15 minutes
    }
  );

  if (!pincode) {
    return <></>;
  }

  if (isLoading) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "2rem 0" }}
      >
        <CircularProgress isIndeterminate color="green.300" />
      </div>
    );
  }

  if (isError) {
    console.log(error);
    return <>Error occurred: {error.message}</>;
  }

  const centers = data.centers;
  const availableLocations = getAvailableLocations(centers);

  if (availableLocations.length === 0) {
    return (
      <>
        <Text fontSize="lg" color="red.700" padding="2rem 0 0">
          No centres available right now for your selected pincode {pincode}.
          This page will automatically refresh periodically to check whether a
          centre is available.
        </Text>
      </>
    );
  }

  return (
    <>
      <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        marginTop="2rem"
        padding="1rem 0"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Slots available for pincode {pincode}!
        </AlertTitle>
      </Alert>
      <Table variant="simple" margin="2rem 0 0">
        <TableCaption>
          Go to CoWin website to schedule an appointment
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Centre</Th>
            <Th>Date</Th>
            <Th isNumeric>Slots Left</Th>
          </Tr>
        </Thead>
        <Tbody>
          {availableLocations.map((session) => (
            <Tr>
              <Td>{session.location}</Td>
              <Td>{session.date}</Td>
              <Td isNumeric>{session.slots}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}
