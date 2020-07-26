const axios = require("axios");

const HttpError = require("../models/httpError");

API_KEY = "AIzaSyAFFN3Sl_rn5HnvkKwSfHIB4QC70U09lsE";

async function getCoordsForAddress(address) {
  const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=${API_KEY}
    `);

  const data = response.data;

  if (!data || data.status === "ZERO_RESULTS") {
    const error = new HttpError(
      "Could not find location for specified address.",
      404
    );

    throw error;
  }

  const coordinates = data.results[0].geometry.location;

  return coordinates;
}

module.exports = getCoordsForAddress;
