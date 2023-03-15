const { scheduledFlights } = require('./scheduled-flights.stub');
const { airlinesData } = require('./airlines-data.stub');

exports.getScheduledFlights = function (req, res) {
  res.send(scheduledFlights);
};

exports.getAirlineData = function (req, res) {
  res.send(airlinesData[req.query.icao_code]);
};
