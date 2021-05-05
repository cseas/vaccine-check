import axios from "axios";

const API_BASE_PUBLIC =
  "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin";
// const API_BASE_PUBLIC = "http://localhost:3001/mock";

export async function getLocationsByPincode(pincode) {
  if (!pincode) {
    return null;
  }

  const date = getDate();

  return await axios
    .get(`${API_BASE_PUBLIC}?pincode=${pincode}&date=${date}`)
    .then((response) => response.data);
}

function getDate() {
  const today = new Date();

  let date = today.getDate();
  date = date < 10 ? "0" + date : date;

  let month = today.getMonth();
  month += 1;
  month = month < 10 ? "0" + month : month;

  let year = today.getFullYear();

  return [date, month, year].join("-");
}
