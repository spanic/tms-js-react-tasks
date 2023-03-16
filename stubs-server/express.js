const express = require('express');
const app = express();
const port = 3001;

const airlabs = require('./airlabs');

// Airlabs data
app.get('/schedules', airlabs.getScheduledFlights);
app.get('/airlines', airlabs.getAirlineData);
app.get('/airports', airlabs.getAirportsData);

app.listen(port, () => {
  console.log(`Stubs server listening on port ${port}`);
});
