import { useEffect, useState } from 'react';
import Flight from './components/flight/Flight';
import './Airport.scss';

function Airport() {
  const AIRLABS_API_KEY = '';

  const [flights, setFlights] = useState();

  useEffect(() => {
    subscribeToArrDepChangeEvents();
    emitChangeEventForCheckedArrDepOption();
  }, []);

  function emitChangeEventForCheckedArrDepOption() {
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
  }

  function subscribeToArrDepChangeEvents() {
    document
      .querySelector('div.airport-container__controls')
      ?.addEventListener('change', (event) => {
        const chosenReqType = event.target.value;
        getScheduledFlights(chosenReqType);
      });
  }

  function getScheduledFlights(chosenReqType) {
    const xhr = new XMLHttpRequest();
    xhr.open(
      'GET',
      `/airlabs/api/schedules?${chosenReqType}=MSQ&api_key=${AIRLABS_API_KEY}`
    );
    xhr.responseType = 'json';
    xhr.onload = () => {
      if (xhr.status === 200) {
        const data = xhr.response;
        displayScheduledFlights(data);
      } else {
        console.error('Something went wrong!');
      }
    };
    xhr.send();
  }

  function displayScheduledFlights(data) {
    data = data.map((flight) => {
      return {
        ...flight,
        key: flight.flight_icao + flight.dep_time_ts,
      };
    });
    setFlights(data);
  }

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
        <div className="airport-container__flights">
          <div className="airport-container-flights__wrapper">
            <div className="schedule__row schedule__row_head">
              <div className="schedule-row__cell">Flight number</div>
              <div className="schedule-row__cell">Departure</div>
              <div className="schedule-row__cell">Arrival</div>
              <div className="schedule-row__cell">Aircraft</div>
              <div className="schedule-row__cell">Status</div>
            </div>
            {flights?.map((flight) => (
              <Flight key={flight.key} flight={flight} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Airport;
