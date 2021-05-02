import axios from "axios";

export async function getLocationsByPincode(pincode) {
  if (!pincode) {
    return null;
  }

  const date = getDate();

  return await axios
    .get(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${date}`
    )
    .then((response) => response.data);
}

function getDate() {
  const today = new Date();

  let date = today.getDate();
  date = date < 10 ? "0" + date : date;

  let month = today.getMonth();
  month += 1;

  let year = today.getFullYear();

  return [date, month, year].join("-");
}
