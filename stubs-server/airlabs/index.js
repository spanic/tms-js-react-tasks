const { scheduledFlights } = require('./scheduled-flights.stub');
const { airlinesData } = require('./airlines-data.stub');
const { airportsData } = require('./airports-data.stub');

exports.getScheduledFlights = function (req, res) {
  res.send({ response: scheduledFlights });
};

exports.getAirlineData = function (req, res) {
  res.send(airlinesData[req.query.icao_code]);
};

exports.getAirportsData = function (req, res) {
  const requestedAirportIcaoCodes = req.query.icao_code?.split(',') || [];

  const filteredAirportsData = airportsData.filter((airportData) =>
    requestedAirportIcaoCodes.includes(airportData.icao_code)
  );

  res.status(200).send({ response: filteredAirportsData });
};
