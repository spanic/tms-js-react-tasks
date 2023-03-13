const { scheduledFlights } = require('./scheduled-flights.stub');

exports.getScheduledFlights = function (req, res) {
  res.send(scheduledFlights);
};
