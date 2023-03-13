import { useEffect } from 'react';
import SCHEDULED_FLIGHTS_STUB from './data/scheduledFilesStub';

function Airport() {
  const AIRLABS_API_KEY = '';

  useEffect(() => {
    document
      .querySelector('div.airport-container__controls')
      ?.addEventListener('change', (event) => {
        const chosenReqType = event.target.value;
        const xhr = new XMLHttpRequest();
        xhr.open(
          'GET',
          `https://airlabs.co/api/v9/schedules?${chosenReqType}=MSQ&api_key=${AIRLABS_API_KEY}`
        );
        xhr.responseType = 'json';
        xhr.onload = () => {
          if (xhr.status === 200) {
            const data = xhr.response.response;
            displayScheduledFlights(data);
          } else {
            console.error('Something went wrong!');
          }
        };
        xhr.send();
        // displayScheduledFlights();
      });

    const defaultReqTypeInputEl = document.querySelector(
      'input[type="radio"][checked]'
    );
    if (!defaultReqTypeInputEl) {
      document
        .querySelector('input[type="radio"]')
        .setAttribute('checked', true);
    }
    document
      .querySelector('input[type="radio"][checked]')
      .dispatchEvent(new Event('change', { bubbles: true }));

    function displayScheduledFlights(data = SCHEDULED_FLIGHTS_STUB) {
      console.log(data);
    }
  }, []);

  return (
    <>
      <div id="airportContainer" className="airport-container">
        <div className="airport-container__controls">
          <input
            type="radio"
            id="arrivals"
            name="arr_dep_options"
            value="arr_iata"
          />
          <label htmlFor="arrivals">Arrivals</label>
          <input
            type="radio"
            id="departures"
            name="arr_dep_options"
            value="dep_iata"
            defaultChecked
          />
          <label htmlFor="departures">Departures</label>
        </div>
      </div>
    </>
  );
}

export default Airport;
