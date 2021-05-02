import axios from "axios";

export async function getLocationsByPincode(pincode) {
  if (!pincode) {
    return null;
  }
  return await axios
    .get(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=02-05-2021`
    )
    .then((response) => response.data);
}
