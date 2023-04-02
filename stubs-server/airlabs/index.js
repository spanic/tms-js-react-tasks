import scheduledFlights from './scheduled-flights.stub.js';
import airlinesData from './airlines-data.stub.js';
import airportsData from './airports-data.stub.js';

function getScheduledFlights(req, res) {
  res.send({ response: scheduledFlights });
}

function getAirlineData(req, res) {
  res.send({ response: airlinesData[req.query.icao_code] });
}

function getAirportsData(req, res) {
  const requestedAirportsIcaoCodes = req.query.icao_code?.split(',');
  if (requestedAirportsIcaoCodes?.length) {
    const requestedAirportsData = airportsData.filter((airportData) =>
      requestedAirportsIcaoCodes.includes(airportData.icao_code)
    );
    res.send({ response: requestedAirportsData });
  } else {
    res.status(200).json({ response: airportsData });
  }
}

export default {
  getScheduledFlights,
  getAirlineData,
  getAirportsData,
};
