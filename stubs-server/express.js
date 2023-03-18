const express = require('express');
const app = express();
const port = 3001;

const airlabs = require('./airlabs');
const tasks = require('./tasks');

app.use(express.json());

// Airlabs data
app.get('/schedules', airlabs.getScheduledFlights);
app.get('/airlines', airlabs.getAirlineData);
app.get('/airports', airlabs.getAirportsData);

// Tasks API
app.get('/tasks', tasks.getAllTasks);
app.post('/tasks/add', tasks.addTask);
app.delete('/tasks', tasks.removeTask);
app.delete('/tasks/all', tasks.removeAllTasks);
app.patch('/tasks/:id', tasks.updateTask);

app.listen(port, () => {
  console.log(`Stubs server listening on port ${port}`);
});
