import { useEffect, useState } from "react";
import { useQuery } from "react-query";
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
  CircularProgress,
  Button,
} from "@chakra-ui/react";
import { LastFound } from "./LastFound";
import alertSfx from "../sounds/alert.mp3";
import useSound from "use-sound";

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

function getTotalSlots(availableLocations) {
  return availableLocations.reduce((accumulator, previousValue) => {
    return accumulator + previousValue.slots;
  }, 0);
}

function getTime(timestamp) {
  const date = timestamp ? new Date(timestamp) : new Date();

  let hours = date.getHours();
  hours = hours < 10 ? "0" + hours : hours;

  let minutes = date.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return hours + ":" + minutes;
}

function getMinutes(date) {
  const diff = new Date() - date;
  return Math.floor(diff / 1000 / 60);
}

export function Results({ pincode }) {
  const [time, setTime] = useState("00:00");
  const [date, setDate] = useState(new Date());
  const [fullHouse, setFullHouse] = useState(true);
  const [minutes, setMinutes] = useState(0);
  const [slots, setSlots] = useState(0);
  const [play, { isPlaying, stop }] = useSound(alertSfx);

  useEffect(() => {
    setSlots(0);
  }, [pincode]);

  const { data, isLoading, isError, error, dataUpdatedAt } = useQuery(
    ["locations", pincode],
    () => getLocationsByPincode(pincode),
    {
      refetchInterval: 10 * 1000, // 10 seconds
      refetchIntervalInBackground: true,
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
    if (!fullHouse) {
      setFullHouse(true);
      setMinutes(getMinutes(date));
    }

    return (
      <>
        <Alert status="error" margin="2rem 0 0">
          <AlertIcon />
          All centres for {pincode} are booked at the moment. Updated at{" "}
          {getTime(dataUpdatedAt)}.
        </Alert>
        <LastFound slots={slots} time={time} minutes={minutes} />
      </>
    );
  }

  if (fullHouse) {
    setSlots(getTotalSlots(availableLocations));
    setTime(getTime());
    setDate(new Date());
    setFullHouse(false);
    play();
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
        {isPlaying ? <Button onClick={() => stop()}>Mute Alarm</Button> : null}
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
          {availableLocations.map((session, index) => (
            <Tr key={index}>
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
